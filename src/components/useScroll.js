import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (thresh = 0.09) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thresh });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};

export const useScroll2 = (thresh = 0.09) => {
  const controls2 = useAnimation();
  const [element2, view2] = useInView({ threshold: thresh });

  if (view2) {
    controls2.start("show");
  } else {
    controls2.start("hidden");
  }

  return [element2, controls2];
};