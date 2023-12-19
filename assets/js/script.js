
//Fade in/out
window.onload = function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
        let slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        let currentSlide = slides[slideIndex - 1];
        currentSlide.style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
}

// Toggles .full element for the corresponding class
//to avoid redundancy.
function toggleFull(className) {
    let element = document.getElementsByClassName(className)[0];
    element.classList.toggle('full');
}

function openSidePanel(){
    toggleFull("top-intro-wrapper");
    toggleFull("info-wrapper");
    toggleFull("card-wrapper");

    let sideButton = document.getElementsByClassName("side-button")[0];
    sideButton.style.display = "none";

    let closeButton = document.getElementsByClassName("side-button-close")[0];
    closeButton.style.display = "block";

    let sidePanel = document.getElementsByClassName("side-panel-wrapper")[0];
    sidePanel.style.left = "0";
}

function closeSidePanel(){
    toggleFull("top-intro-wrapper");
    toggleFull("info-wrapper");
    toggleFull("card-wrapper");

    let closeButton = document.getElementsByClassName("side-button-close")[0];
    closeButton.style.display = "none";
    let sidePanel = document.getElementsByClassName("side-panel-wrapper")[0];
    sidePanel.style.left = "-100%";
    
    let sideButton = document.getElementsByClassName("side-button")[0];
    sideButton.style.display = "block";
}

