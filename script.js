const quotes = [
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "What you do today can improve all your tomorrows.", author: " Ralph Marston" },
    { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.", author: "Wayne Dyer" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything has beauty, but not everyone can see it.", author: "Confucius" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Everything has beauty, but not everyone can see it.", author: "Confucius" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "If you’re going through *****, keep going.", author: "Winston Churchill" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.", author: "Wayne Dyer" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Everything has beauty, but not everyone can see it.", author: "Confucius" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
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
