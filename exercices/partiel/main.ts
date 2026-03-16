import "@/style.css";
import "./style.css";
import Swiper from "swiper";
import { Navigation, Autoplay, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



// split text

SplitText.create(".titleSplitText", {
    type: "chars",
    charsClass: "char",

});

gsap.from(".char", {
    y: 100,
    opacity: 0,
    stagger: 0.05,
    duration: 0.8,
    ease: "power4.out",
});


// Slider

const slides = document.querySelectorAll(".katana .swiper-slide");

const slider = new Swiper(".katana", {
    slidesPerView: 3,
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

slider.on("slideChange", function () {
    const currentIndex = slider.realIndex + 1 < slides.length ? slider.realIndex + 1 : 0;
    const sliderEl = document.getElementById("slider");
    const sliderCircle = document.getElementById("circle");
    const backgroundColor = slides[currentIndex].getAttribute("data-background");
    const circleColor = slides[currentIndex].getAttribute("data-circle");
    if (sliderEl && backgroundColor) {
        sliderEl.style.background = backgroundColor;
    }
    if (sliderCircle && circleColor) {
        sliderCircle.style.background = circleColor;
    }

});

new Swiper(".slider", {
    slidesPerView: 3,
    spaceBetween: 120,
    loop: true,
    speed: 4000,
    modules: [Autoplay],
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
});



// scrolltelling

gsap.to(".buyImage", {
    rotate: 360,
    scrollTrigger: {
        trigger: ".buyImage",
        start: "top center",
        end: "bottom top",
        scrub: true,
    },
});


