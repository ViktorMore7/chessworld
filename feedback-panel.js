class FeedbackPanel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['is-correct', 'champion', 'capital', 'country', 'fun-fact', 'wiki', 'is-last'];
    }
    
    connectedCallback() {
        this.render();
        // Speak feedback if sound is on
        setTimeout(() => this.speakFeedback(), 500);
    }
    
    speakFeedback() {
        const isCorrect = this.getAttribute('is-correct') === 'true';
        const champion = this.getAttribute('champion');
        const capital = this.getAttribute('capital');
        const country = this.getAttribute('country');
        
        const text = isCorrect ? 
            `Correct! ${champion} was born in ${country}, whose capital is ${capital}. Great job!` :
            `Not quite. ${champion} was born in ${country}, whose capital is ${capital}. Keep learning!`;
        
        if (window.speakText) window.speakText(text);
    }
    
    render() {
        const isCorrect = this.getAttribute('is-correct') === 'true';
        const champion = this.getAttribute('champion') || '';
        const capital = this.getAttribute('capital') || '';
        const country = this.getAttribute('country') || '';
        const funFact = this.getAttribute('fun-fact') || '';
        const wiki = this.getAttribute('wiki') || '#';
        const isLast = this.getAttribute('is-last') === 'true';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; width: 100%; max-width: 600px; margin-top: 1.5rem; animation: slideUp 0.4s ease-out; }
                
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .panel {
                    background: white;
                    border: 4px solid ${isCorrect ? '#27AE60' : '#E74C3C'};
                    border-radius: 1.5rem;
                    padding: 1.5rem;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }
                
                .result-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    font-family: 'Fredoka One', cursive;
                    font-size: 1.5rem;
                    color: ${isCorrect ? '#27AE60' : '#E74C3C'};
                }
                
                .explanation {
                    font-size: 1.1rem;
                    color: #2C3E50;
                    margin-bottom: 1rem;
                    line-height: 1.5;
                    font-weight: 600;
                }
                
                .fun-fact {
                    background: ${isCorrect ? 'rgba(39, 174, 96, 0.1)' : 'rgba(231, 76, 60, 0.1)'};
                    border-left: 4px solid ${isCorrect ? '#27AE60' : '#E74C3C'};
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-bottom: 1rem;
                    font-style: italic;
                    color: #555;
                }
                
                .fun-fact-label {
                    font-weight: 800;
                    color: #2C3E50;
                    display: block;
                    margin-bottom: 0.25rem;
                    font-style: normal;
                }
                
                .actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                
                .btn {
                    flex: 1;
                    min-width: 150px;
                    padding: 1rem 1.5rem;
                    border: 3px solid #2C3E50;
                    border-radius: 1rem;
                    font-size: 1.1rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 4px 0 #2C3E50;
                    font-family: 'Nunito', sans-serif;
                    text-align: center;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }
                
                .btn:active {
                    transform: translateY(4px);
                    box-shadow: 0 0 0 #2C3E50;
                }
                
                .btn-primary {
                    background: #F1C40F;
                    color: #2C3E50;
                }
                
                .btn-primary:hover {
                    background: #f39c12;
                }
                
                .btn-secondary {
                    background: white;
                    color: #2C3E50;
                }
                
                .btn-secondary:hover {
                    background: #ecf0f1;
                }
                
                .guardian-notice {
                    font-size: 0.75rem;
                    color: #7f8c8d;
                    margin-top: 0.5rem;
                    text-align: center;
                    width: 100%;
                }
            </style>
            
            <div class="panel">
                <div class="result-header">
                    <span style="font-size: 2rem;">${isCorrect ? '🎉' : '😊'}</span>
                    <span>${isCorrect ? 'Correct! Well done!' : 'Not quite, but keep learning!'}</span>
                </div>
                
                <div class="explanation">
                    ${champion} was born in ${country}, whose capital is <strong>${capital}</strong>.
                </div>
                
                <div class="fun-fact">
                    <span class="fun-fact-label">💡 Fun Fact:</span>
                    ${funFact}
                </div>
                
                <div class="actions">
                    <button class="btn btn-primary" onclick="nextQuestion()">
                        ${isLast ? 'See Results 🏆' : 'Next Question →'}
                    </button>
                    
                    <a href="${wiki}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" onclick="return confirm('You are leaving to visit Wikipedia. Ask a parent if you are under 13! 🛡️')">
                        📚 Learn More
                    </a>
                </div>
                
                <div class="guardian-notice">
                    🔒 Always ask a parent before visiting external websites
                </div>
            </div>
        `;
    }
}

customElements.define('feedback-panel', FeedbackPanel);