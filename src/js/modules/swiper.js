// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
// import "swiper/css/bundle.";

function swiper() {
    const offersSwiper = document.querySelector("#offers-swiper");
    const testimonialsSwiper = document.querySelector("#testimonials-swiper");

    // if (!offersSwiper) return;
    // if (!testimonialsSwiper) return;

    /* Initialize Swiper */
    const swiper = new Swiper("#offers-swiper", {
        // Optional parameters
        spaceBetween: 20,
        loop: true,
        slidesPerView: "auto",
        // freeMode: true,
        grabCursor: true,
        // effect: "fade",
        lazy: true,
        speed: 1000, //Скорость прокрутки
        /* Autoplay */
        // centeredSlides: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //     reverseDirection: true, //обратное направление
        // },
        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },

        // Navigation arrows
        navigation: {
            nextEl: "#offers__control-next",
            prevEl: "#offers__control-prev",
        },
    });
    const swiperTestimonials = new Swiper("#testimonials-swiper", {
        // Optional parameters
        spaceBetween: 20,
        loop: true,
        slidesPerView: "auto",
        // freeMode: true,
        grabCursor: true,
        // lazy: true,
        speed: 1000, //Скорость прокрутки
        /* Autoplay */
        // centeredSlides: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        //     reverseDirection: true, //обратное направление
        // },
        breakpoints: {
            510: {
                centeredSlides: true,
            },
            800: {
                centeredSlides: false,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: "#testimonials__control-next",
            prevEl: "#testimonials__control-prev",
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        // },
    });
}

export default swiper;
