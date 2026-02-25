import "@/style.css";
import "./style.css";
import { DotLottie } from "@lottiefiles/dotlottie-web";

const canvas = document.querySelector("canvas");
const animation = new DotLottie({
  canvas: canvas!,
  src: "./user.lottie",
  autoplay: false,
  loop: false,
});

canvas?.addEventListener("mouseenter", () => {
  animation.play();
});
