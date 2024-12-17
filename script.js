const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const nextButton = document.getElementById('next-btn');

let quotes = []; // Array to hold 10 randomly selected quotes
let currentIndex = 0;

// Static array of 1000 motivational quotes
const allQuotes = [
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    // Add 990 more quotes here
    { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Dream bigger. Do bigger.", author: "Unknown" },
    { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Unknown" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
    { text: "Little things make big days.", author: "Unknown" },
    { text: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
    // Continue until you have 1000 quotes...
];

// Function to get 10 random quotes from the allQuotes array
function getRandomQuotes() {
    const shuffled = allQuotes.sort(() => Math.random() - 0.5); // Shuffle quotes array
    return shuffled.slice(0, 10); // Select first 10 quotes after shuffling
}

// Function to display the current quote
function displayQuote() {
    if (quotes.length > 0) {
        quoteText.textContent = `"${quotes[currentIndex].text}"`;
        quoteAuthor.textContent = `- ${quotes[currentIndex].author}`;
    }
}

// Fetch and display quotes
function fetchQuotes() {
    quotes = getRandomQuotes(); // Get 10 random quotes
    currentIndex = 0; // Start at the first quote
    displayQuote(); // Show the first quote
    nextButton.disabled = false; // Enable the "Next" button
}

// "Next" button click handler
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % quotes.length; // Cycle through quotes
    displayQuote();
});

// Initial fetch of quotes
fetchQuotes();
