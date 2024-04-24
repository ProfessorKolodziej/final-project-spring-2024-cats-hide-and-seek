// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Game logic
let score = 0;
const maxScore = 6;

// Function to initialize the game
function initializeGame() {
    // Add event listener for find cat button
    document.getElementById('find-cat-btn').addEventListener('click', findCat);
}

// Function to find the hidden cat
function findCat() {
    // Update score
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;

    // Check if max score reached
    if (score >= maxScore) {
        // Show special level unlocked message or unlock new scenes
        alert('Special level unlocked!');
        // Reset score
        score = 0;
    }

    // Show hidden cat
    document.getElementById('hidden-cat').style.display = 'block';
}

// Function to reset the game
function resetGame() {
    score = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('hidden-cat').style.display = 'none';
}

// Call initializeGame function when DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeGame);