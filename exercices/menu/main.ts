import "@/style.css";
import "./style.css";
import gsap from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
// gsap.registerPlugin(GSDevTools);

let isOpen = false;
const button = document.querySelector("button");
const menuTimeline = gsap.timeline({
  paused: true,
  onComplete: () => {
    isOpen = true;
  },
  onReverseComplete: () => {
    isOpen = false;
  },
});

gsap.set(".menu", { height: "60px", width: "60px" });

menuTimeline
  .to(".menu", { height: "100%", width: "100%" })
  .from(".menu li", { xPercent: 100, stagger: 0.1 }, "<");
// GSDevTools.create({ animation: menuTimeline });

button?.addEventListener("click", () => {
  //   isOpen = !isOpen;
  isOpen ? menuTimeline.reverse() : menuTimeline.play();
});
