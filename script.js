let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 4 seconds
}

showSlides();

// Generate random snowflakes on page load
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
