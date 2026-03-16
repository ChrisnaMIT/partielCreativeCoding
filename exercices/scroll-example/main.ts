import "@/style.css";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

console.log("exemple");

gsap.utils.toArray<HTMLHeadingElement>("h2").forEach((title) => {
  gsap.from(title, {
    xPercent: -100,
    scrollTrigger: {
      trigger: title,
      start: "top bottom",
      end: "top 80%",
      toggleActions: "play none none reverse",
      //   scrub: true,
      //   markers: true,
    },
  });
});
