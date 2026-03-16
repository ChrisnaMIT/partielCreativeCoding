import "@/style.css";
import "./style.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

console.log(SplitText);

SplitText.create("h1", {
  type: "chars",
  charsClass: "chars",
  mask: "chars",
});

gsap.from(".chars", {
  yPercent: -100,
  stagger: {
    amount: 0.5,
    from: "center",
  },
});
