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


/*for navigation*/
document.querySelectorAll('button').forEach(button => {
	button.addEventListener('click', function() {
		 // Find all pages and hide them
		 document.querySelectorAll('.page').forEach(page => {
			  page.classList.remove('show');
		 });
		 // Determine the target page based on the button's class and show it
		 if (this.classList.contains('home')) {
			  document.querySelector('.homepage').classList.add('show');
		 } else if (this.classList.contains('to-page2')) {
			  document.querySelector('.page2').classList.add('show');
		 } else if (this.classList.contains('to-page3')) {
			  document.querySelector('.page3').classList.add('show');
		 } else if (this.classList.contains('to-page4')) {
			  document.querySelector('.page4').classList.add('show');
		 }
	});
});
