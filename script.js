let loadingSteps = [
    "Initializing neural networks...",
    "Processing 47,000+ hygiene datasets...",
    "Analyzing your personal hygiene patterns...",
    "Finalizing AI analysis..."
];

let currentStep = 0;
let loadingInterval;

document.addEventListener('DOMContentLoaded', function() {
});

function startAnalysis() {
    const homeScreen = document.getElementById('homeScreen');
    const loadingScreen = document.getElementById('loadingScreen');
    
    homeScreen.style.display = 'none';
    loadingScreen.classList.remove('hidden');
    startLoadingAnimation();
}

function startLoadingAnimation() {
    const loadingStepsContainer = document.getElementById('loadingSteps');
    
    loadingInterval = setInterval(() => {
        if (currentStep < loadingSteps.length) {
            loadingStepsContainer.innerHTML = `<div class="text-sm text-gray-300 fade-in">${loadingSteps[currentStep]}</div>`;
            currentStep++;
        } else {
            clearInterval(loadingInterval);
            setTimeout(() => {
                showMainContent();
            }, 1000);
        }
    }, 800);
}

function showMainContent() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    generateRandomScores();
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
    }, 500);
}

function generateRandomScores() {
    const hygieneScore = (Math.random() * 40 + 20).toFixed(1);
    const daysSinceShower = (Math.random() * 3 + 1).toFixed(1);
    const confidenceLevel = (Math.random() * 4.9 + 95).toFixed(1);
    const hygieneScoreElement = document.querySelector('.flex.justify-between:nth-child(1) .font-mono');
    const lastShowerElement = document.querySelector('.flex.justify-between:nth-child(2) .font-mono');
    const confidenceElement = document.querySelector('.text-sm.opacity-90');
    
    if (hygieneScoreElement) {
        hygieneScoreElement.textContent = `${hygieneScore}/100`;
    }
    if (lastShowerElement) {
        lastShowerElement.textContent = `${daysSinceShower} days ago`;
    }
    if (confidenceElement) {
        confidenceElement.textContent = `Confidence Level: ${confidenceLevel}%`;
    }
}



function resetAnalysis() {
    const mainContent = document.getElementById('mainContent');
    const loadingScreen = document.getElementById('loadingScreen');
    mainContent.classList.add('hidden');
    mainContent.classList.remove('fade-in');
    
    loadingScreen.classList.remove('hidden');
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';
    
    currentStep = 0;
    const loadingStepsContainer = document.getElementById('loadingSteps');
    loadingStepsContainer.innerHTML = '';
    
    startLoadingAnimation();
}



// Add some fun Easter eggs
let clickCount = 0;
document.addEventListener('click', function(event) {
    if (event.target.textContent.includes('🚿')) {
        clickCount++;
        if (clickCount === 5) {
            showEasterEgg();
        }
    }
});

function showEasterEgg() {
    const easterEgg = document.createElement('div');
    easterEgg.className = 'fixed top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg z-50 fade-in';
    easterEgg.textContent = '🎉 You found the secret! Still need to shower though...';
    
    document.body.appendChild(easterEgg);
    
    setTimeout(() => {
        easterEgg.remove();
    }, 3000);
}

const aiMessages = [
    "AI detected: You're probably procrastinating right now",
    "Neural network suggests: Shower first, code later",
    "Machine learning algorithm: Your hygiene score is... concerning",
    "IoT sensors indicate: Your roommates are avoiding you",
    "Deep learning analysis: You definitely need a shower"
];

let messageInterval = setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance every 30 seconds
        showRandomAIMessage();
    }
}, 30000);

function showRandomAIMessage() {
    const message = aiMessages[Math.floor(Math.random() * aiMessages.length)];
    const messageElement = document.createElement('div');
    messageElement.className = 'fixed bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-40 fade-in max-w-xs';
    messageElement.textContent = `🤖 ${message}`;
    
    document.body.appendChild(messageElement);
    
    setTimeout(() => {
        messageElement.remove();
    }, 4000);
} 