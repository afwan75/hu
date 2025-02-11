function handleYesClick() {
    // Hide the buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Change the h1 text
    document.querySelector('h1').textContent = "Yay! I'm so happy! ❤️";
    
    // Show celebration hearts
    createExtraHearts();
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    // Get random position within the visible screen
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    // Ensure the button stays within visible area
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    // Apply new position
    noButton.style.position = 'fixed';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
    
    // Make Yes button bigger
    const yesButton = document.querySelector('.yes-button');
    yesButton.style.transform = 'scale(1.1)';
    yesButton.style.transition = 'transform 0.3s ease';
}

function createFloatingHearts() {
    const background = document.querySelector('.hearts-background');
    const heartSymbols = ['❤️', '💖', '💝', '💕', '💗'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
        heart.style.animationDelay = Math.random() * 4 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        background.appendChild(heart);
        
        // Remove heart after animation completes
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

function createExtraHearts() {
    // Create extra hearts for celebration
    const heartCount = 50; // More hearts for celebration
    for (let i = 0; i < 3; i++) { // Create multiple waves of hearts
        setTimeout(() => createFloatingHearts(), i * 800);
    }
}

// Start creating hearts when page loads
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    // Continuously create new hearts
    setInterval(createFloatingHearts, 3000);
}); 