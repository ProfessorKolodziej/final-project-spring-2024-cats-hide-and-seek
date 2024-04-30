// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector('.home-start');
    const homepage = document.querySelector('.homepage');
    const story = document.querySelector('.story');

    startButton.addEventListener('click', function() {
        homepage.style.display = 'none';
        story.style.display = 'block';
    });

    const homeButton = document.querySelector('.story-home');

    homeButton.addEventListener('click', function() {
        story.style.display = 'none';
        homepage.style.display = 'block';
    });

    const skipButton = document.querySelector('.story-skip');
    const tutorial = document.querySelector('.tutorial');

    skipButton.addEventListener('click', function() {
        story.style.display = 'none';
        tutorial.style.display = 'block';
    });

    const chatContent = [
        "Hey there! I'm Mr. Cat. Can you do me a favor?",
        "I'm playing hide and seek with my six kids, but I can't find them anywhere. It seems like they've used that invisibility magic I showed them yesterday...",
        "Anyway, I'm glad I found you! Could you help me hold this heavy magical cat detector? Let me show you how it works."
    ];
    let currentChatIndex = 0;

    const chatElement = document.querySelector('.story-chat');
    const prevButton = document.querySelector('.story-prev');
    const nextButton = document.querySelector('.story-next');
    const lastNextButton = document.querySelector('.story-last-next');

    // Function to update the chat content
    function updateChatContent() {
        chatElement.textContent = chatContent[currentChatIndex];
    }

    updateChatContent();

    nextButton.addEventListener('click', function() {
        currentChatIndex++;
        updateChatContent();
        prevButton.style.display = 'block';
        if (currentChatIndex === chatContent.length - 1) {
            nextButton.style.display = 'none';
            lastNextButton.style.display = 'block';
        }
    });

    prevButton.addEventListener('click', function() {
        currentChatIndex--;
        updateChatContent();

        // Show the next button when prev is clicked
        nextButton.style.display = 'block';

        // Hide the prev button if it's the first content
        if (currentChatIndex === 0) {
            prevButton.style.display = 'none';
        }
    });

    const tutorialInfo = document.querySelector('.tutorial-info');
    lastNextButton.addEventListener('click', function() {
        story.style.display = 'none';
        tutorial.style.display = 'block';
        tutorialInfo.style.display = 'block';
    });

    const homeButton2 = document.querySelector('.tutorial-home');

    homeButton2.addEventListener('click', function() {
        tutorial.style.display = 'none';
        homepage.style.display = 'block';
    });

    const tutorialNextButton = document.querySelector('.tutorial-next');
    tutorialNextButton.addEventListener('click', function() {
        tutorialInfo.style.display = 'none';
    });
    
    const tutorialNext2 = document.querySelector('.tutorial-chat2-next');


    const tutskipButton = document.querySelector('.tutorial-skip');
    const game = document.querySelector('.game');

    tutskipButton.addEventListener('click', function() {
        tutorial.style.display = 'none';
        game.style.display = 'block';
    });
    
    tutorialNext2.addEventListener('click', function() {
        tutorial.style.display = 'none';
        game.style.display = 'block';
        placeCats();
    });

    const pauseButton = document.querySelector('.game .game-pausebutton');
    const pausePage = document.querySelector('.pausepage');
    pauseButton.addEventListener('click', function() {
        game.style.display = 'none';
        pausePage.style.display = 'block';
    });
    const resumeButton = document.querySelector('.resume-title');
    const retryButton = document.querySelector('.retry-title');
    const pausehomeButton = document.querySelector('.pausepage .home-title');
    resumeButton.addEventListener('click', function() {
        pausePage.style.display = 'none';
        game.style.display = 'block';
    });
    retryButton.addEventListener('click', function() {
        pausePage.style.display = 'none';
        game.style.display = 'block';
        resetGameState();
    });
    pausehomeButton.addEventListener('click', function() {
        pausePage.style.display = 'none';
        homepage.style.display = 'block';
    });
    
});

function toggleImageVisibility() {
    var catImage = document.querySelector('.cat');
    catImage.style.opacity = '1';
    const tutorialChat2 = document.querySelector('.tutorial-chat2');
    tutorialChat2.style.display = "block";
    const tutorialMrcat = document.querySelector('.tutorial .mr-cat ');
    tutorialMrcat.style.display = "block";
    const tutorialNext2 = document.querySelector('.tutorial-chat2-next');
    tutorialNext2.style.display = "block"
}

const catImages = [
    "images/cat1.png",
    "images/cat2.png",
    "images/cat3.png",
    "images/cat4.png",
    "images/cat5.png",
    "images/cat6.png"
];

function getRandomPosition() {
    const x = Math.floor(Math.random() * (window.innerWidth-30));
    const y = Math.floor(Math.random() * (window.innerHeight-30));
    return { x, y };
}

function placeCats() {
    const catContainer = document.querySelector(".cat-container");
    const catchcatLabel = document.querySelector(".catchcat-label");
    let catsFound = 0;

    // Clear any existing cats
    catContainer.innerHTML = "";
    for (let i = 0; i < catImages.length; i++) {
        const catImg = document.createElement("img");
        catImg.src = catImages[i];
        catImg.classList.add("cat");
        catImg.style.opacity = "0";
        catImg.style.position = "absolute";

        const { x, y } = getRandomPosition();
        console.log(x,y);
        catImg.style.left = `${x}px`;
        catImg.style.top = `${y}px`;

        catImg.addEventListener("click", () => {
            if (catImg.style.opacity === "0") {
                catImg.style.opacity = "1";
                catsFound++;
                catchcatLabel.textContent = catsFound;
            }
        });

        catContainer.appendChild(catImg);
    }
}

function resetGameState() {
    const catchcatLabel = document.querySelector(".catchcat-label");
    const catImages = document.querySelectorAll(".cat-container img");

    // Reset the cat count
    catsFound = 0;
    catchcatLabel.textContent = catsFound;

    // Reset the opacity of all cat images
    catImages.forEach(catImg => {
        catImg.style.opacity = "0";
    });
    placeCats();
}