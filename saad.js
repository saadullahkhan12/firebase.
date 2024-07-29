// const incrementButton = document.getElementById('incrementButton');
const counterDisplay = document.getElementById('counter');

// Initialize counter
let counter = 0;

// Function to increment counter and update display
function incrementCounter() {
  counter++;
  counterDisplay.textContent = counter;
}

// Get all buttons with class 'btn-black' (assuming this class is used for 'Add to Cart' buttons)
const addToCartButtons = document.querySelectorAll('.btn-black');

// Add event listener to each 'Add to Cart' button
addToCartButtons.forEach(button => {
  button.addEventListener('click', incrementCounter);
});