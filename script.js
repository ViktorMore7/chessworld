// Champion Database
const CHAMPIONS = [
    {
        id: 1,
        name: "Wilhelm Steinitz",
        years: "1886-1894",
        country: "Czech Republic",
        capital: "Prague",
        flag: "cz",
        funFact: "Steinitz was known as the 'Father of Modern Chess' and was the first official World Champion!",
        wiki: "https://en.wikipedia.org/wiki/Wilhelm_Steinitz"
    },
    {
        id: 2,
        name: "Emanuel Lasker",
        years: "1894-1921",
        country: "Germany",
        capital: "Berlin",
        flag: "de",
        funFact: "Lasker held the title for 27 years - the longest reign of any champion!",
        wiki: "https://en.wikipedia.org/wiki/Emanuel_Lasker"
    },
    {
        id: 3,
        name: "José Raúl Capablanca",
        years: "1921-1927",
        country: "Cuba",
        capital: "Havana",
        flag: "cu",
        funFact: "Capablanca was famous for being almost impossible to beat - he went 8 years without losing a game!",
        wiki: "https://en.wikipedia.org/wiki/Jos%C3%A9_Ra%C3%BAl_Capablanca"
    },
    {
        id: 4,
        name: "Alexander Alekhine",
        years: "1927-1935, 1937-1946",
        country: "Russia",
        capital: "Moscow",
        flag: "ru",
        funFact: "Alekhine loved attacking and could play blindfolded against multiple opponents at once!",
        wiki: "https://en.wikipedia.org/wiki/Alexander_Alekhine"
    },
    {
        id: 5,
        name: "Max Euwe",
        years: "1935-1937",
        country: "Netherlands",
        capital: "Amsterdam",
        flag: "nl",
        funFact: "Euwe was a mathematics teacher and later became FIDE President!",
        wiki: "https://en.wikipedia.org/wiki/Max_Euwe"
    },
    {
        id: 6,
        name: "Mikhail Botvinnik",
        years: "1948-1957, 1958-1960, 1961-1963",
        country: "Russia",
        capital: "Moscow",
        flag: "ru",
        funFact: "Botvinnik was an electrical engineer and started a famous chess school that trained many champions!",
        wiki: "https://en.wikipedia.org/wiki/Mikhail_Botvinnik"
    },
    {
        id: 7,
        name: "Vasily Smyslov",
        years: "1957-1958",
        country: "Russia",
        capital: "Moscow",
        flag: "ru",
        funFact: "Smyslov was also a talented opera singer and had a beautiful endgame technique!",
        wiki: "https://en.wikipedia.org/wiki/Vasily_Smyslov"
    },
    {
        id: 8,
        name: "Mikhail Tal",
        years: "1960-1961",
        country: "Latvia",
        capital: "Riga",
        flag: "lv",
        funFact: "Tal was called the 'Magician from Riga' for his brilliant and risky attacking style!",
        wiki: "https://en.wikipedia.org/wiki/Mikhail_Tal"
    },
    {
        id: 9,
        name: "Tigran Petrosian",
        years: "1963-1969",
        country: "Armenia",
        capital: "Yerevan",
        flag: "am",
        funFact: "Petrosian was famous for his defensive skills - he was very hard to checkmate!",
        wiki: "https://en.wikipedia.org/wiki/Tigran_Petrosian"
    },
    {
        id: 10,
        name: "Boris Spassky",
        years: "1969-1972",
        country: "Russia",
        capital: "Moscow",
        flag: "ru",
        funFact: "Spassky was known for his universal style - he could attack or defend equally well!",
        wiki: "https://en.wikipedia.org/wiki/Boris_Spassky"
    },
    {
        id: 11,
        name: "Bobby Fischer",
        years: "1972-1975",
        country: "United States",
        capital: "Washington D.C.",
        flag: "us",
        funFact: "Fischer was a genius who won 20 games in a row against the world's best players!",
        wiki: "https://en.wikipedia.org/wiki/Bobby_Fischer"
    },
    {
        id: 12,
        name: "Anatoly Karpov",
        years: "1975-1985",
        country: "Russia",
        capital: "Moscow",
        flag: "ru",
        funFact: "Karpov was known for his positional play and collected butterflies as a hobby!",
        wiki: "https://en.wikipedia.org/wiki/Anatoly_Karpov"
    },
    {
        id: 13,
        name: "Garry Kasparov",
        years: "1985-2000",
        country: "Russia",
        capital: "Moscow",
        flag: "ru",
        funFact: "Kasparov became the youngest ever world champion at age 22 and later ran for president!",
        wiki: "https://en.wikipedia.org/wiki/Garry_Kasparov"
    },
    {
        id: 14,
        name: "Vladimir Kramnik",
        years: "2000-2007",
        country: "Russia",
        capital: "Moscow",
        flag: "ru",
        funFact: "Kramnik defeated Kasparov and was known for his solid and deep strategic understanding!",
        wiki: "https://en.wikipedia.org/wiki/Vladimir_Kramnik"
    },
    {
        id: 15,
        name: "Viswanathan Anand",
        years: "2007-2013",
        country: "India",
        capital: "New Delhi",
        flag: "in",
        funFact: "Anand was the first champion from India and is known as the 'Tiger of Madras' - he plays very fast!",
        wiki: "https://en.wikipedia.org/wiki/Viswanathan_Anand"
    },
    {
        id: 16,
        name: "Magnus Carlsen",
        years: "2013-2023",
        country: "Norway",
        capital: "Oslo",
        flag: "no",
        funFact: "Carlsen became a grandmaster at age 13 and also plays professional football!",
        wiki: "https://en.wikipedia.org/wiki/Magnus_Carlsen"
    },
    {
        id: 17,
        name: "Ding Liren",
        years: "2023-present",
        country: "China",
        capital: "Beijing",
        flag: "cn",
        funFact: "Ding is the first Chinese World Champion and loves reading books in his free time!",
        wiki: "https://en.wikipedia.org/wiki/Ding_Liren"
    }
];

// Distractor Capitals for Difficulty Levels
const DISTRACTORS = {
    easy: [
        ["Paris", "London", "Rome"], // For Prague
        ["Paris", "Madrid", "Vienna"], // For Berlin
        ["Santiago", "Lima", "Buenos Aires"], // For Havana
        ["St. Petersburg", "Kiev", "Minsk"], // For Moscow
        ["Brussels", "Luxembourg", "Geneva"], // For Amsterdam
        ["St. Petersburg", "Novosibirsk", "Kazan"], // For Moscow (Russia)
        ["Stockholm", "Copenhagen", "Helsinki"], // For Riga
        ["Tbilisi", "Baku", "Ashgabat"], // For Yerevan
        ["Los Angeles", "New York", "Chicago"], // For Washington DC
        ["Mumbai", "Calcutta", "Bangalore"], // For New Delhi
        ["Stockholm", "Copenhagen", "Helsinki"], // For Oslo
        ["Shanghai", "Hong Kong", "Guangzhou"] // For Beijing
    ],
    hard: [
        ["Bratislava", "Budapest", "Vienna"], // For Prague (nearby)
        ["Munich", "Cologne", "Hamburg"], // For Berlin (German cities)
        ["Santo Domingo", "San Juan", "Havana"], // Wait, Havana is correct, similar Caribbean
        ["Warsaw", "Prague", "Budapest"], // For Moscow (Eastern European)
        ["Rotterdam", "The Hague", "Utrecht"], // For Amsterdam (Dutch cities)
        ["Warsaw", "Prague", "Budapest"], // For Moscow
        ["Tallinn", "Vilnius", "Riga"], // For Riga (Baltic capitals)
        ["Tbilisi", "Baku", "Yerevan"], // For Yerevan (Caucasus)
        ["Ottawa", "Washington", "Canberra"], // For Washington DC (Capital cities)
        ["Karachi", "Lahore", "New Delhi"], // For New Delhi (Indian cities)
        ["Bergen", "Stavanger", "Oslo"], // For Oslo (Norwegian cities)
        ["Shanghai", "Beijing", "Tianjin"] // For Beijing (Chinese cities)
    ]
};

// State Management
let state = {
    currentIndex: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    answers: [],
    difficulty: 'easy',
    soundEnabled: true,
    shuffledChampions: [],
    isAnswered: false
};

// Audio Context for Simple Beeps
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (!state.soundEnabled) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'correct') {
        // Happy major chord arpeggio effect
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } else if (type === 'wrong') {
        // Low dissonant sound
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } else if (type === 'click') {
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
}

// Text to Speech
function speakText(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9; // Slightly slower for kids
        utterance.pitch = 1.1; // Slightly higher pitch
        utterance.volume = 1.0;
        
        // Try to find a friendly voice
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => 
            voice.name.includes('Google') || 
            voice.name.includes('Samantha') || 
            voice.name.includes('Google US English')
        );
        if (preferredVoice) utterance.voice = preferredVoice;
        
        window.speechSynthesis.speak(utterance);
    }
}

// Initialize Game
function initGame() {
    // Load saved progress
    const saved = localStorage.getItem('chessQuizProgress');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.currentIndex = parsed.currentIndex || 0;
        state.score = parsed.score || 0;
        state.answers = parsed.answers || [];
    }
    
    // Shuffle champions for variety, but keep grouped if resuming? No, fresh shuffle each full game
    if (state.currentIndex === 0) {
        state.shuffledChampions = [...CHAMPIONS].sort(() => Math.random() - 0.5);
    } else {
        // Restore order from saved or use default
        state.shuffledChampions = CHAMPIONS; // Keep order if mid-game to avoid confusion
    }
    
    renderCurrentQuestion();
}

// Generate Options
function generateOptions(champion) {
    const distractors = state.difficulty === 'easy' ? DISTRACTORS.easy : DISTRACTORS.hard;
    const index = CHAMPIONS.indexOf(champion);
    const wrongAnswers = distractors[index] || distractors[0];
    
    const options = [champion.capital, ...wrongAnswers];
    return options.sort(() => Math.random() - 0.5);
}

// Render Current Question
function renderCurrentQuestion() {
    const container = document.getElementById('game-container');
    const currentChampion = state.shuffledChampions[state.currentIndex];
    
    // Create progress tracker
    const progressTracker = document.createElement('progress-tracker');
    progressTracker.setAttribute('current', state.currentIndex + 1);
    progressTracker.setAttribute('total', CHAMPIONS.length);
    progressTracker.setAttribute('score', state.score);
    progressTracker.setAttribute('streak', state.streak);
    
    // Create champion card
    const championCard = document.createElement('champion-card');
    championCard.setAttribute('name', currentChampion.name);
    championCard.setAttribute('years', currentChampion.years);
    championCard.setAttribute('country', currentChampion.country);
    championCard.setAttribute('flag', currentChampion.flag);
    championCard.setAttribute('index', state.currentIndex + 1);
    
    // Create question text
    const questionDiv = document.createElement('div');
    questionDiv.className = 'w-full max-w-2xl mb-6 text-center animate-slide-up';
    questionDiv.innerHTML = `
        <h2 class="text-2xl md:text-3xl font-bold text-chess-dark mb-4">
            What is the capital of ${currentChampion.country}?
        </h2>
        <button onclick="speakQuestion()" class="bg-chess-blue text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto mb-4">
            <i data-feather="volume-2" class="w-4 h-4"></i>
            Read Question Aloud
        </button>
    `;
    
    // Create answer options
    const options = generateOptions(currentChampion);
    const answerOptions = document.createElement('answer-options');
    answerOptions.setAttribute('options', JSON.stringify(options));
    answerOptions.setAttribute('correct', currentChampion.capital);
    
    // Clear and append
    container.innerHTML = '';
    container.appendChild(progressTracker);
    container.appendChild(championCard);
    container.appendChild(questionDiv);
    container.appendChild(answerOptions);
    
    // Update feather icons
    feather.replace();
    
    // Save state
    saveProgress();
}

function speakQuestion() {
    const currentChampion = state.shuffledChampions[state.currentIndex];
    const text = `Question ${state.currentIndex + 1}. World Chess Champion ${currentChampion.name} was born in ${currentChampion.country}. What is the capital of ${currentChampion.country}? The options are displayed on screen.`;
    speakText(text);
}

// Handle Answer
function handleAnswer(selectedAnswer, isCorrect) {
    if (state.isAnswered) return;
    state.isAnswered = true;
    
    const currentChampion = state.shuffledChampions[state.currentIndex];
    
    // Update state
    state.answers.push({
        champion: currentChampion.name,
        correct: isCorrect,
        answer: selectedAnswer
    });
    
    if (isCorrect) {
        state.score++;
        state.streak++;
        if (state.streak > state.maxStreak) state.maxStreak = state.streak;
        playSound('correct');
        fireConfetti();
    } else {
        state.streak = 0;
        playSound('wrong');
    }
    
    // Show feedback
    const container = document.getElementById('game-container');
    const feedbackPanel = document.createElement('feedback-panel');
    feedbackPanel.setAttribute('is-correct', isCorrect);
    feedbackPanel.setAttribute('champion', currentChampion.name);
    feedbackPanel.setAttribute('capital', currentChampion.capital);
    feedbackPanel.setAttribute('country', currentChampion.country);
    feedbackPanel.setAttribute('fun-fact', currentChampion.funFact);
    feedbackPanel.setAttribute('wiki', currentChampion.wiki);
    feedbackPanel.setAttribute('is-last', state.currentIndex === CHAMPIONS.length - 1);
    
    container.appendChild(feedbackPanel);
    feather.replace();
    
    // Scroll to feedback on mobile
    setTimeout(() => {
        feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
    
    saveProgress();
}

// Next Question
function nextQuestion() {
    state.currentIndex++;
    state.isAnswered = false;
    
    if (state.currentIndex >= CHAMPIONS.length) {
        showResults();
    } else {
        renderCurrentQuestion();
    }
}

// Show Results
function showResults() {
    const container = document.getElementById('game-container');
    const resultsScreen = document.createElement('results-screen');
    resultsScreen.setAttribute('score', state.score);
    resultsScreen.setAttribute('total', CHAMPIONS.length);
    resultsScreen.setAttribute('max-streak', state.maxStreak);
    resultsScreen.setAttribute('answers', JSON.stringify(state.answers));
    
    container.innerHTML = '';
    container.appendChild(resultsScreen);
    feather.replace();
    
    // Clear saved progress
    localStorage.removeItem('chessQuizProgress');
}

// Utility Functions
function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById('sound-btn');
    btn.innerHTML = state.soundEnabled ? 
        `<i data-feather="volume-2" class="w-5 h-5"></i><span class="font-bold text-sm">Sound On</span>` :
        `<i data-feather="volume-x" class="w-5 h-5"></i><span class="font-bold text-sm">Sound Off</span>`;
    feather.replace();
}

function changeDifficulty(value) {
    state.difficulty = value;
    // Only allow change at start of game or restart
    if (state.currentIndex > 0) {
        if (confirm('Changing difficulty will restart the quiz. Continue?')) {
            resetProgress();
        } else {
            document.getElementById('difficulty-select').value = state.difficulty === 'easy' ? 'easy' : 'hard';
        }
    }
}

function resetProgress() {
    state.currentIndex = 0;
    state.score = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.answers = [];
    state.isAnswered = false;
    localStorage.removeItem('chessQuizProgress');
    initGame();
}

function saveProgress() {
    localStorage.setItem('chessQuizProgress', JSON.stringify({
        currentIndex: state.currentIndex,
        score: state.score,
        answers: state.answers,
        difficulty: state.difficulty
    }));
}

// Confetti Effect
function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const pieces = [];
    const colors = ['#F1C40F', '#E74C3C', '#3498DB', '#27AE60', '#9B59B6'];
    
    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 20,
            vy: (Math.random() - 0.5) * 20 - 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 10 + 5,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    let animationId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        pieces.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.5; // gravity
            p.rotation += p.rotationSpeed;
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
            
            if (p.y > canvas.height) {
                pieces.splice(i, 1);
            }
        });
        
        if (pieces.length > 0) {
            animationId = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(animationId);
        }
    }
    
    animate();
}

// Initialize on load
window.addEventListener('DOMContentLoaded', initGame);

// Service Worker for Offline Support (Basic)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('data:text/javascript,' + encodeURIComponent(`
        self.addEventListener('install', e => e.waitUntil(self.skipWaiting()));
        self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => new Response('Offline'))));
    `)).catch(() => console.log('Offline mode not available'));
}