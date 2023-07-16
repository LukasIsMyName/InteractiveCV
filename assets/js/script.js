
function expand(button) 
{
    let card = button.parentNode;
    card.classList.toggle('expanded');
    
   
};

function collapse(button)
{
    let card = button.parentNode;
    card.classList.toggle('expanded');
}

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

function openSidePanel(){
    
    let top = document.getElementsByClassName("top-intro-wrapper")[0];
    top.classList.toggle('full');
    let info = document.getElementsByClassName("info-wrapper")[0];
    info.classList.toggle('full');
    let grid = document.getElementsByClassName("card-wrapper")[0];
    grid.classList.toggle('full');
    let sideButton = document.getElementsByClassName("side-button")[0];
    sideButton.style.display = "none";
    let closeButton = document.getElementsByClassName("side-button-close")[0];
    closeButton.style.display = "block";
    let sidePanel = document.getElementsByClassName("side-panel-wrapper")[0];
    sidePanel.style.display = "block";

    console.log("Open");
}

function closeSidePanel(){
    let closeButton = document.getElementsByClassName("side-button-close")[0];
    closeButton.style.display = "none";
    let sidePanel = document.getElementsByClassName("side-panel-wrapper")[0];
    sidePanel.style.display = "none";
    
    let sideButton = document.getElementsByClassName("side-button")[0];
    sideButton.style.display = "block";

    let top = document.getElementsByClassName("top-intro-wrapper")[0];
    top.classList.toggle('full');
    let info = document.getElementsByClassName("info-wrapper")[0];
    info.classList.toggle('full');
    let grid = document.getElementsByClassName("card-wrapper")[0];
    grid.classList.toggle('full');

    console.log("Close");
}

