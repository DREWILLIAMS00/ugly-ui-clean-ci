const msg = 'CI/CD + ESLint working';
console.log(msg);

// Generate a random pastel HSL color
function generatePastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
}

// Cycle background color on page load
function cycleBackgroundColor() {
  // Apply a smooth transition
  document.body.style.transition = 'background-color 1s';
  // Set initial color
  document.body.style.backgroundColor = generatePastelColor();
  // Change color every few seconds
  setInterval(() => {
    document.body.style.backgroundColor = generatePastelColor();
  }, 3000);
}

// Run when the DOM is fully loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', cycleBackgroundColor);
}

// Export functions for testing
if (typeof module !== 'undefined') {
  module.exports = { generatePastelColor, cycleBackgroundColor };
}
