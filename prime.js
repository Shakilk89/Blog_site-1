// 'use strict';



// add Event listener on multiple elements
// add Event listener on multiple elements
const navbar = document.querySelector('.navbar');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');


const addEventOnElements = (elements, eventType, callback) => {
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

const toggleSide = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleSide);


// HEADER ANIMATION
// when scrolled down to 100px header will be active
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});


//================== SLIDER ===============
//================== SLIDER ===============
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
let currentSlidePos = 0;

const moveSliderItem = function (){
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

// Next SLIDER ===============
const sliderNextBtn = document.querySelector("[data-slider-next]");

const slideNext = function () {
    const slideEnd = currentSlidePos > totalSlidableItems;

    if(slideEnd){
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

// Prev SLIDER ===============
const sliderPrevBtn = document.querySelector("[data-slider-prev]");

const slidePrev = function () {
    if(currentSlidePos < 0) {
        currentSlidePos = totalSlidableItems;
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);



//================== RESPONSIVE
//================== RESPONSIVE
window.addEventListener("resize", function () {
    let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
})