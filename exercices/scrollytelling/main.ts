import "@/style.css";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

console.log("exemple");

gsap.to("header img", {
  rotate: 360,
  scrollTrigger: {
    trigger: "header img",
    start: "top top",
    end: "bottom top",
    scrub: true,
    // markers: true,
  },
});

gsap.from("footer hr", {
  width: "0%",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    // markers: true,
  },
});

gsap.utils.toArray<HTMLHRElement>("figure hr").forEach((hr) => {
  gsap.to(hr, {
    xPercent: -100,
    scrollTrigger: {
      trigger: hr,
      start: "top center",
      //   markers: true,
    },
  });
});
