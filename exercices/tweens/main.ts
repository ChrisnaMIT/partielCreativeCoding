import "@/style.css";
import "./style.css";
import gsap from "gsap";

gsap.to("hr", {
  yPercent: 100,
  duration: 5,
  stagger: 0.5,
});
