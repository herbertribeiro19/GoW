var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
    breakpoints: {
        320:{
            slidesPerView: 1.1,
        },
        768: {
            slidesPerView: 2.2,
        },
        991: {
            slidesPerView: 2.8,
        },       
        1200: {
            slidesPerView: 3.5,
        },
    },
    });

AOS.init({
    duration: 1000,
    once: false,
});