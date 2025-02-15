const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  // ... (other quotes)
];

let currentIndex = 0;

// Update the quote text and author
function updateQuote() {
  document.querySelector('.quote').textContent = `"${quotes[currentIndex].text}"`;
  document.querySelector('.author').textContent = `- ${quotes[currentIndex].author}`;
}

const quoteBox = document.querySelector('.quote-box');
let startY = null;
const threshold = 50;

// Touch gesture handling on the quote box (swipe animations)
quoteBox.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

quoteBox.addEventListener('touchmove', (e) => {
  e.preventDefault();
}, { passive: false });

quoteBox.addEventListener('touchend', (e) => {
  if (startY === null) return;
  const endY = e.changedTouches[0].clientY;
  const deltaY = endY - startY;
  if (Math.abs(deltaY) > threshold) {
    if (deltaY < 0) {
      swipeNext();
    } else {
      swipePrevious();
    }
  }
  startY = null;
});

// Swipe gesture animation for next quote (slide animation)
function swipeNext() {
  quoteBox.classList.add('slide-up-out');
  quoteBox.addEventListener('transitionend', function handler() {
    quoteBox.removeEventListener('transitionend', handler);
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote();
    quoteBox.classList.remove('slide-up-out');
    quoteBox.classList.add('slide-up-in');
    void quoteBox.offsetWidth; // Force reflow to trigger animation
    quoteBox.classList.remove('slide-up-in');
  });
}

// Swipe gesture animation for previous quote (slide animation)
function swipePrevious() {
  quoteBox.classList.add('slide-down-out');
  quoteBox.addEventListener('transitionend', function handler() {
    quoteBox.removeEventListener('transitionend', handler);
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
    quoteBox.classList.remove('slide-down-out');
    quoteBox.classList.add('slide-down-in');
    void quoteBox.offsetWidth;
    quoteBox.classList.remove('slide-down-in');
  });
}

// Next button now triggers a fade animation (different from swipe's slide)
function fadeNext() {
  quoteBox.classList.add('fade-out');
  quoteBox.addEventListener('transitionend', function handler() {
    quoteBox.removeEventListener('transitionend', handler);
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote();
    quoteBox.classList.remove('fade-out');
    quoteBox.classList.add('fade-in');
    void quoteBox.offsetWidth; // Force reflow
    quoteBox.classList.remove('fade-in');
  });
}

// Next button event listener (using fade animation)
document.querySelector('.next-btn').addEventListener('click', () => {
  fadeNext();
});

// Voice button: Speak the current quote
document.querySelector('.voice-btn').addEventListener('click', () => {
  let speech = new SpeechSynthesisUtterance();
  speech.text = document.querySelector('.quote').textContent;
  window.speechSynthesis.speak(speech);
});

// Share button: Share the current quote
document.querySelector('.share-btn').addEventListener('click', () => {
  const text = document.querySelector('.quote').textContent + " " + document.querySelector('.author').textContent;
  if (navigator.share) {
    navigator.share({ text });
  } else {
    alert("Sharing not supported on this device.");
  }
});

// Tutorial Modal Handling (no animation on tutorial button)
const tutorialBtn = document.getElementById("tutorial-btn");
const tutorialModal = document.getElementById("tutorial-modal");
const closeTutorial = document.getElementById("close-tutorial");

tutorialBtn.addEventListener("click", () => {
  tutorialModal.classList.add("show");
});

closeTutorial.addEventListener("click", () => {
  tutorialModal.classList.remove("show");
});

// Dark/Light Mode Toggle with rotation animation on tap
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Add rotation animation class
  modeToggle.classList.add("rotate");
  // Remove rotation class after animation ends
  modeToggle.addEventListener("animationend", () => {
    modeToggle.classList.remove("rotate");
  }, { once: true });
  
  // Update emoji based on current mode
  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "☀️";
  } else {
    modeToggle.textContent = "🌙";
  }
});

// Initialize with the first quote
updateQuote();
