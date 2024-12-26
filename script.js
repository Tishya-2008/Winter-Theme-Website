let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 5000); 
}

showSlides();

window.onload = function() {
    const snowflakes = document.querySelector('.snowflakes');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 7 + 's'; 
        snowflakes.appendChild(snowflake);
    }
};

const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = 0;

function flipCard() {
    if (this.classList.contains('flipped') && !this.classList.contains('matched')) {
        this.classList.remove('flipped');
        flippedCards = flippedCards.filter(card => card !== this); 
        return;
    }

    if (!this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);
    }

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.name === secondCard.dataset.name) {
        matchedCards += 2;
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        flippedCards = [];

        if (matchedCards === cards.length) {
            setTimeout(() => alert("You win!"), 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function setupGame() {
    const cardArray = Array.from(cards);
    cardArray.sort(() => Math.random() - 0.5);

    cardArray.forEach(card => {
        card.addEventListener('click', flipCard);
        document.querySelector('.game-container').appendChild(card);
    });
}

setupGame();

const gameLink = document.querySelector('a[href="#game"]');
const gameContainer = document.getElementById('game');
const slideshow = document.getElementById('slideshow');

gameLink.addEventListener('click', function(event) {
    event.preventDefault();  

    if (gameContainer.style.display === 'none' || !gameContainer.style.display) {
        gameContainer.style.display = 'block';   
        slideshow.style.display = 'none';        
    } else {
        gameContainer.style.display = 'none';    
        slideshow.style.display = 'block';       
    }
});
