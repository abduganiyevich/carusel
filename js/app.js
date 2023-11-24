let currentIndex = 0;

function changeSlide(direction) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const transformValue = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${transformValue}px)`;
}
