// Step navigation
let currentStep = 0;
const steps = ['mainContent', 'step1', 'step2', 'step3'];

const continueBtn = document.getElementById('continueBtn');
const step1Btn = document.getElementById('step1Btn');
const step2Btn = document.getElementById('step2Btn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');

// Navigation function
function showStep(stepIndex) {
    steps.forEach((step, index) => {
        const element = document.getElementById(step);
        if (index === stepIndex) {
            element.classList.remove('hidden');
            setTimeout(() => {
                element.classList.add('show');
            }, 10);
        } else {
            element.classList.remove('show');
            setTimeout(() => {
                element.classList.add('hidden');
            }, 300);
        }
    });
}

// Continue button handlers
continueBtn.addEventListener('click', () => {
    currentStep = 1;
    showStep(1);
});

step1Btn.addEventListener('click', () => {
    currentStep = 2;
    showStep(2);
});

step2Btn.addEventListener('click', () => {
    currentStep = 3;
    showStep(3);
});

// Function to send response notification
async function sendResponse(answer) {
    // TODO: Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
    // Get it from https://formspree.io/ (it's free!)
    // Example: 'https://formspree.io/f/YOUR_FORM_ID'
    const formspreeEndpoint = 'https://formspree.io/f/maqwakgg';
    
    // Skip if endpoint not configured
    if (formspreeEndpoint === 'YOUR_FORMSPREE_ENDPOINT') {
        console.log('Response:', answer);
        return;
    }
    
    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: answer,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
            }),
        });
        
        if (response.ok) {
            console.log('Response sent successfully!');
        }
    } catch (error) {
        console.error('Error sending response:', error);
    }
}

// Yes button handler
yesBtn.addEventListener('click', () => {
    responseMessage.textContent = 'Nice! ✨ Let\'s figure out the details na!';
    responseMessage.className = 'response-message yes show';
    
    // Send notification
    sendResponse('Yes');
    
    // Create confetti effect
    createConfetti();
    
    // Disable buttons
    yesBtn.disabled = true;
    noBtn.disabled = true;
    yesBtn.style.opacity = '0.6';
    noBtn.style.opacity = '0.6';
});

// Button movement removed - button stays in place

// Crying meme functionality
const cryingMeme = document.getElementById('cryingMeme');
const cryingFace = cryingMeme.querySelector('.crying-face');
let cryingInterval = null;
let clickAttempts = 0;
const REQUIRED_ATTEMPTS = 20;

function showCryingMeme(scale = 1) {
    cryingMeme.classList.add('show');
    
    // Check if mobile
    const isMobile = window.innerWidth <= 640;
    
    // Set the scale based on attempts (smaller growth on mobile)
    const scaleMultiplier = isMobile ? 0.1 : 0.15; // Slower growth on mobile
    const currentScale = 1 + (clickAttempts * scaleMultiplier);
    cryingMeme.style.setProperty('--meme-scale', currentScale);
    
    // Font size growth (smaller on mobile)
    const baseFontSize = isMobile ? 5 : 8;
    const fontSizeGrowth = isMobile ? 0.8 : 1.5;
    const maxFontSize = isMobile ? 12 : 38; // Cap the size on mobile
    const fontSize = Math.min(baseFontSize + (clickAttempts * fontSizeGrowth), maxFontSize);
    cryingFace.style.fontSize = `${fontSize}rem`;
    
    // Keep crying for 3 seconds
    if (cryingInterval) {
        clearTimeout(cryingInterval);
    }
    
    cryingInterval = setTimeout(() => {
        cryingMeme.classList.remove('show');
    }, 3000);
}

function startContinuousCrying() {
    // Show crying meme with current scale
    showCryingMeme();
    
    // Keep showing it every 2 seconds
    const cryLoop = setInterval(() => {
        if (!cryingMeme.classList.contains('show')) {
            showCryingMeme();
        }
    }, 2000);
    
    // Stop after 10 seconds total
    setTimeout(() => {
        clearInterval(cryLoop);
        cryingMeme.classList.remove('show');
    }, 10000);
}

// Show crying meme when button is clicked (no movement)
noBtn.addEventListener('mousedown', (e) => {
    // Show crying meme
    showCryingMeme();
});

// No button handler - requires 20 attempts
noBtn.addEventListener('click', (e) => {
    clickAttempts++;
    
    // Show crying meme when clicked, bigger each time
    startContinuousCrying();
    
    // Show attempt counter in response message
    const attemptsLeft = REQUIRED_ATTEMPTS - clickAttempts;
    if (attemptsLeft > 0) {
        const attemptMessages = [
            `Wait... that's only attempt ${clickAttempts} 😅`,
            `Hmm, try ${attemptsLeft} more times maybe?`,
            `Attempt ${clickAttempts}... keep going!`,
            `You're at ${clickAttempts}... almost there!`,
            `${attemptsLeft} more to go! 😊`
        ];
        const randomMessage = attemptMessages[Math.floor(Math.random() * attemptMessages.length)];
        
        responseMessage.textContent = randomMessage;
        responseMessage.className = 'response-message no show';
    }
    
    // After 20 attempts, process the "No" response
    if (clickAttempts >= REQUIRED_ATTEMPTS) {
        const messages = [
            'Okay fine, you really tried! 😅',
            'You\'re persistent! 😊',
            'Alright, you win this round!'
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        responseMessage.textContent = randomMessage;
        responseMessage.className = 'response-message no show';
        
        // Send notification
        sendResponse('No');
        
        // Disable buttons
        yesBtn.disabled = true;
        noBtn.disabled = true;
        
        // Stop crying after a moment
        setTimeout(() => {
            cryingMeme.classList.remove('show');
        }, 5000);
    }
});

// Confetti effect
function createConfetti() {
    const colors = ['✨', '⭐', '🌟', '💫', '⭐'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.position = 'fixed';
            confetti.style.fontSize = '1.5rem';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 50);
    }
}

// Add confetti animation to styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize - show first step, hide others
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('show');
    mainContent.classList.remove('hidden');
    
    // Hide other steps initially
    ['step1', 'step2', 'step3'].forEach(stepId => {
        const step = document.getElementById(stepId);
        step.classList.add('hidden');
        step.classList.remove('show');
    });
});

// Add subtle mouse movement parallax effect
document.addEventListener('mousemove', (e) => {
    const hearts = document.querySelectorAll('.floating-heart');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    hearts.forEach((heart, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        heart.style.transform = `translate(${x}px, ${y}px)`;
    });
});

