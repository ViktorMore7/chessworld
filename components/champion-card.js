class ChampionCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['name', 'years', 'country', 'flag', 'index'];
    }
    
    attributeChangedCallback() {
        this.render();
    }
    
    connectedCallback() {
        this.render();
    }
    
    render() {
        const name = this.getAttribute('name') || 'Champion';
        const years = this.getAttribute('years') || '';
        const country = this.getAttribute('country') || '';
        const flag = this.getAttribute('flag') || 'un';
        const index = this.getAttribute('index') || '1';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; width: 100%; max-width: 600px; margin-bottom: 1.5rem; }
                .card { 
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); 
                    border: 4px solid #2C3E50; 
                    border-radius: 1.5rem; 
                    padding: 1.5rem; 
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                    position: relative;
                    overflow: hidden;
                }
                .card::before {
                    content: '♔';
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    font-size: 120px;
                    opacity: 0.05;
                    color: #2C3E50;
                }
                
                .header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap; }
                .king-icon { 
                    background: #F1C40F; 
                    color: #2C3E50; 
                    width: 50px; 
                    height: 50px; 
                    border-radius: 50%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    font-size: 28px; 
                    border: 3px solid #2C3E50;
                    box-shadow: 0 4px 0 rgba(0,0,0,0.2);
                }
                .title-wrapper { flex: 1; min-width: 200px; }
                .name { font-family: 'Fredoka One', cursive; font-size: 1.5rem; color: #2C3E50; margin: 0; line-height: 1.2; }
                .years { color: #7f8c8d; font-weight: 700; font-size: 0.9rem; margin-top: 0.25rem; }
                
                .country-section { 
                    background: rgba(52, 152, 219, 0.1); 
                    border: 2px solid #3498DB; 
                    border-radius: 1rem; 
                    padding: 1rem; 
                    display: flex; 
                    align-items: center; 
                    gap: 1rem;
                }
                .flag-img { 
                    width: 60px; 
                    height: 40px; 
                    object-fit: cover; 
                    border-radius: 0.5rem; 
                    border: 2px solid #2C3E50;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .country-text { font-size: 1.1rem; font-weight: 800; color: #2C3E50; }
                .born-in { font-size: 0.85rem; color: #7f8c8d; font-weight: 600; }
                
                @media (max-width: 480px) {
                    .card { padding: 1rem; }
                    .name { font-size: 1.25rem; }
                    .king-icon { width: 40px; height: 40px; font-size: 20px; }
                }
            </style>
            
            <div class="card animate-bounce-in">
                <div class="header">
                    <div class="king-icon">♔</div>
                    <div class="title-wrapper">
                        <h2 class="name">${name}</h2>
                        <div class="years">World Champion: ${years}</div>
                    </div>
                </div>
                
                <div class="country-section">
                    <img class="flag-img" src="https://flagcdn.com/w80/${flag}.png" 
                         alt="Flag of ${country}" 
                         onerror="this.src='https://flagcdn.com/w80/un.png'">
                    <div>
                        <div class="born-in">BORN IN</div>
                        <div class="country-text">${country}</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('champion-card', ChampionCard);