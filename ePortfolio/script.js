function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let projectSlideIndex = 1;
let experienceSlideIndex = 1;
let pubSlideIndex = 1;

showSlides("projects", projectSlideIndex);
showSlides("experience", experienceSlideIndex);
showSlides("publications", pubSlideIndex);

function plusProjects(n) {
    showSlides("projects", (projectSlideIndex += n));
}

function plusExperience(n) {
    showSlides("experience", (experienceSlideIndex += n));
}

function plusPub(n) {
    showSlides("creativepublications", (pubSlideIndex += n));
}


function showSlides(sliderId, n) {
    const sliderContainer = document.querySelector(`#${sliderId} .slider`);
    const slides = document.querySelectorAll(`#${sliderId} .slide`);

    if (n > slides.length) {
        if (sliderId === "projects") {
            projectSlideIndex = 1;
            n = 1;
        } else if (sliderId === "experience") {
            experienceSlideIndex = 1;
            n = 1;
        } else {
            pubSlideIndex = 1;
            n = 1;
        }
    }

    if (n < 1) {
        if (sliderId === "projects") {
            projectSlideIndex = slides.length;
            n = slides.length;
        } else if(sliderId === "experience") {
            experienceSlideIndex = slides.length;
            n = slides.length;
        } else {
            pubSlideIndex = slides.length;
            n = slides.length;
        }
    }

    const newPosition = -(n - 1) * 100;
    sliderContainer.style.transform = `translateX(${newPosition}%)`;
}