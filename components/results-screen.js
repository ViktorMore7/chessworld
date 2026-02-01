class ResultsScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    static get observedAttributes() {
        return ['score', 'total', 'max-streak', 'answers'];
    }
    
    connectedCallback() {
        this.render();
        this.generateCertificate();
        if (window.speakText) {
            const score = this.getAttribute('score') || 0;
            const total = this.getAttribute('total') || 17;
            setTimeout(() => {
                window.speakText(`Congratulations! You completed the quiz. You got ${score} out of ${total} questions correct.`);
            }, 1000);
        }
    }
    
    generateCertificate() {
        const score = parseInt(this.getAttribute('score')) || 0;
        const total = parseInt(this.getAttribute('total')) || 17;
        const percentage = Math.round((score / total) * 100);
        
        const rank = percentage === 100 ? 'Grandmaster' : 
                     percentage >= 80 ? 'International Master' : 
                     percentage >= 60 ? 'Candidate Master' : 'Chess Learner';
        
        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', month: 'long', day: 'numeric' 
        });
        
        const certificateHTML = `
            <div id="certificate-section" style="
                background: linear-gradient(135deg, #FDF6E3 0%, #F1C40F 100%);
                border: 8px solid #2C3E50;
                padding: 3rem;
                text-align: center;
                max-width: 800px;
                margin: 2rem auto;
                position: relative;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            ">
                <div style="font-size: 4rem; margin-bottom: 1rem;">♔</div>
                <h2 style="font-family: 'Fredoka One', cursive; font-size: 2.5rem; color: #2C3E50; margin-bottom: 0.5rem;">
                    Certificate of Achievement
                </h2>
                <p style="font-size: 1.25rem; color: #555; margin-bottom: 2rem;">
                    This certifies that
                </p>
                <h3 style="font-family: 'Fredoka One', cursive; font-size: 2rem; color: #E74C3C; margin-bottom: 1rem;">
                    Young Grandmaster
                </h3>
                <p style="font-size: 1.1rem; color: #555; margin-bottom: 2rem;">
                    has successfully completed the Grandmaster Geography Quiz<br>
                    with a score of <strong>${score}/${total}</strong> (${percentage}%)
                </p>
                <p style="font-size: 1.5rem; color: #2C3E50; font-weight: 800; margin-bottom: 2rem;">
                    Rank: ${rank}
                </p>
                <div style="border-top: 2px solid #2C3E50; margin: 2rem 0; padding-top: 1rem;">
                    <p style="font-size: 1rem; color: #777;">Date: ${date}</p>
                    <p style="font-size: 1rem; color: #777; margin-top: 0.5rem;">Signed: The Chess Masters Academy</p>
                </div>
                <div style="position: absolute; top: 20px; right: 20px; font-size: 5rem; opacity: 0.2;">🏆</div>
                <div style="position: absolute; bottom: 20px; left: 20px; font-size: 5rem; opacity: 0.2;">🌍</div>
            </div>
        `;
        
        const certContainer = this.shadowRoot.getElementById('certificate-container');
        if (certContainer) {
            certContainer.innerHTML = certificateHTML;
        }
    }
    
    printCertificate() {
        // Add certificate to body temporarily for printing
        const certHTML = this.shadowRoot.getElementById('certificate-container').innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>My Chess Certificate</title>
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;700&display=swap" rel="stylesheet">
                <style>
                    body { margin: 0; padding: 20px; font-family: 'Nunito', sans-serif; }
                    @media print { body { padding: 0; } }
                </style>
            </head>
            <body>${certHTML}</body>
            </html>
        `);
        printWindow.document.close();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 250);
    }
    
    render() {
        const score = parseInt(this.getAttribute('score')) || 0;
        const total = parseInt(this.getAttribute('total')) || 17;
        const maxStreak = parseInt(this.getAttribute('max-streak')) || 0;
        const answers = JSON.parse(this.getAttribute('answers') || '[]');
        
        const percentage = Math.round((score / total) * 100);
        const stars = percentage === 100 ? '⭐⭐⭐' : percentage >= 70 ? '⭐⭐' : '⭐';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; width: 100%; max-width: 800px; animation: bounceIn 0.6s; }
                
                @keyframes bounceIn {
                    0% { transform: scale(0.3); opacity: 0; }
                    50% { transform: scale(1.05); }
                    70% { transform: scale(0.9); }
                    100% { transform: scale(1); opacity: 1; }
                }
                
                .results-container { text-align: center; }
                
                .score-circle {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #F1C40F 0%, #f39c12 100%);
                    border: 6px solid #2C3E50;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                    position: relative;
                }
                
                .score-number { font-family: 'Fredoka One', cursive; font-size: 4rem; color: #2C3E50; line-height: 1; }
                .score-label { font-size: 1.2rem; color: #2C3E50; font-weight: 700; }
                .stars { font-size: 3rem; margin-top: 0.5rem; }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .stat-box {
                    background: white;
                    border: 3px solid #2C3E50;
                    border-radius: 1rem;
                    padding: 1rem;
                    box-shadow: 0 4px 0 rgba(0,0,0,0.1);
                }
                
                .stat-value { font-family: 'Fredoka One', cursive; font-size: 2rem; color: #3498DB; }
                .stat-label { font-size: 0.9rem; color: #7f8c8d; font-weight: 700; }
                
                .message {
                    font-size: 1.5rem;
                    color: #2C3E50;
                    margin-bottom: 2rem;
                    font-weight: 700;
                }
                
                .actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 3rem;
                }
                
                .btn {
                    padding: 1rem 2rem;
                    border: 3px solid #2C3E50;
                    border-radius: 1rem;
                    font-size: 1.1rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 4px 0 #2C3E50;
                    font-family: 'Nunito', sans-serif;
                    background: white;
                }
                
                .btn:active {
                    transform: translateY(4px);
                    box-shadow: 0 0 0 #2C3E50;
                }
                
                .btn-primary { background: #F1C40F; }
                .btn-primary:hover { background: #f39c12; }
                .btn-secondary:hover { background: #ecf0f1; }
                
                .certificate-wrapper {
                    margin-top: 2rem;
                    page-break-inside: avoid;
                }
                
                .review-section {
                    background: white;
                    border: 3px solid #2C3E50;
                    border-radius: 1rem;
                    padding: 1.5rem;
                    margin-top: 2rem;
                    text-align: left;
                }
                
                .review-title {
                    font-family: 'Fredoka One', cursive;
                    font-size: 1.5rem;
                    color: #2C3E50;
                    margin-bottom: 1rem;
                    text-align: center;
                }
                
                .review-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem;
                    border-bottom: 1px solid #eee;
                }
                
                .review-item:last-child { border-bottom: none; }
                .correct { color: #27AE60; }
                .wrong { color: #E74C3C; }
            </style>
            
            <div class="results-container">
                <div class="score-circle animate-float">
                    <div class="score-number">${percentage}%</div>
                    <div class="score-label">${score}/${total}</div>
                    <div class="stars">${stars}</div>
                </div>
                
                <div class="message">
                    ${percentage === 100 ? '🏆 Perfect Score! You are a True Grandmaster!' : 
                      percentage >= 80 ? '🌟 Excellent! You are an International Master!' :
                      percentage >= 60 ? '👍 Good Job! Keep Practicing!' : 
                      '📚 Keep Learning! You will do better next time!'}
                </div>
                
                <div class="stats-grid">
                    <div class="stat-box">
                        <div class="stat-value">${score}</div>
                        <div class="stat-label">Correct Answers</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${maxStreak}</div>
                        <div class="stat-label">Best Streak</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">${total - score}</div>
                        <div class="stat-label">To Review</div>
                    </div>
                </div>
                
                <div class="actions">
                    <button class="btn btn-primary" onclick="resetProgress()">Play Again ↺</button>
                    <button class="btn btn-secondary" onclick="this.getRootNode().host.printCertificate()">🖨️ Print Certificate</button>
                </div>
                
                <div id="certificate-container" class="certificate-wrapper"></div>
                
                <div class="review-section">
                    <div class="review-title">Review Your Answers</div>
                    ${answers.map((a, i) => `
                        <div class="review-item">
                            <span class="${a.correct ? 'correct' : 'wrong'}">
                                ${a.correct ? '✓' : '✗'}
                            </span>
                            <span><strong>${a.champion}</strong>: You answered ${a.answer}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

customElements.define('results-screen', ResultsScreen);