class AnswerOptions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['options', 'correct'];
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const options = JSON.parse(this.getAttribute('options') || '[]');
        const correct = this.getAttribute('correct') || '';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; width: 100%; max-width: 600px; }
                .grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
                
                @media (min-width: 640px) {
                    .grid { grid-template-columns: 1fr 1fr; }
                }
                
                .option-btn {
                    background: white;
                    border: 3px solid #2C3E50;
                    border-radius: 1rem;
                    padding: 1.25rem;
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #2C3E50;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 6px 0 #2C3E50;
                    font-family: 'Nunito', sans-serif;
                    position: relative;
                    overflow: hidden;
                }
                
                .option-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 0 #2C3E50;
                    background: #F1C40F;
                }
                
                .option-btn:active:not(:disabled) {
                    transform: translateY(4px);
                    box-shadow: 0 2px 0 #2C3E50;
                }
                
                .option-btn.correct {
                    background: #27AE60 !important;
                    color: white !important;
                    border-color: #1e8449 !important;
                    animation: pulse 0.5s;
                }
                
                .option-btn.wrong {
                    background: #E74C3C !important;
                    color: white !important;
                    border-color: #c0392b !important;
                    animation: shake 0.5s;
                }
                
                .option-btn:disabled {
                    cursor: not-allowed;
                    opacity: 0.8;
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }
            </style>
            
            <div class="grid">
                ${options.map((opt, idx) => `
                    <button class="option-btn" data-value="${opt}" onclick="handleOptionClick(this, '${opt}', '${correct}')">
                        ${String.fromCharCode(65 + idx)}. ${opt}
                    </button>
                `).join('')}
            </div>
        `;
    }
}

// Global handler for option clicks
window.handleOptionClick = function(element, selected, correct) {
    // Prevent multiple clicks
    if (element.disabled) return;
    
    const isCorrect = selected === correct;
    const buttons = element.parentElement.querySelectorAll('.option-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.getAttribute('data-value') === correct) {
            btn.classList.add('correct');
            btn.innerHTML += ' ✓';
        } else if (btn === element && !isCorrect) {
            btn.classList.add('wrong');
            btn.innerHTML += ' ✗';
        }
    });
    
    // Call main app handler
    if (window.handleAnswer) {
        window.handleAnswer(selected, isCorrect);
    }
};

customElements.define('answer-options', AnswerOptions);