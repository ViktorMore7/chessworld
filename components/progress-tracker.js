class ProgressTracker extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['current', 'total', 'score', 'streak'];
    }
    
    attributeChangedCallback() {
        this.render();
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const current = this.getAttribute('current') || 1;
        const total = this.getAttribute('total') || 17;
        const score = this.getAttribute('score') || 0;
        const streak = this.getAttribute('streak') || 0;
        
        const progress = (current / total) * 100;
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; width: 100%; max-width: 600px; margin-bottom: 1.5rem; }
                .container { background: white; padding: 1rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 3px solid #2C3E50; }
                .top-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem; }
                .question-num { font-family: 'Fredoka One', cursive; font-size: 1.25rem; color: #2C3E50; }
                .badges { display: flex; gap: 1rem; }
                .badge { display: flex; align-items: center; gap: 0.25rem; font-weight: 800; font-size: 1rem; }
                .badge.score { color: #F1C40F; }
                .badge.streak { color: #E74C3C; }
                .flame { font-size: 1.25rem; }
                
                .progress-bg { background: #e0e0e0; height: 12px; border-radius: 6px; overflow: hidden; border: 2px solid #2C3E50; }
                .progress-fill { height: 100%; background: linear-gradient(90deg, #F1C40F 0%, #f39c12 100%); transition: width 0.5s ease; border-radius: 4px; }
                
                @media (max-width: 480px) {
                    .top-row { flex-direction: column; align-items: flex-start; }
                }
            </style>
            
            <div class="container">
                <div class="top-row">
                    <div class="question-num">⭐ Question ${current}/${total}</div>
                    <div class="badges">
                        <div class="badge score">
                            <span>⭐</span>
                            <span>${score} Points</span>
                        </div>
                        <div class="badge streak">
                            <span class="flame">🔥</span>
                            <span>${streak} Streak</span>
                        </div>
                    </div>
                </div>
                <div class="progress-bg">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
    }
}

customElements.define('progress-tracker', ProgressTracker);