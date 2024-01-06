import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import { Footer, Header, Hero, Skills, Slider, Works } from "./components";
import { useCursor, useScroll } from "./hooks";

import "./assets/styles/app.scss";
import "aos/dist/aos.css";
import { Routes } from "./routes";

const App = () => {
  const mousePosition = useCursor();
  const scroll = useScroll();

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <motion.div
        className={`cursor ${scroll > 500 ? "cursor-green" : ""}`}
        animate={{
          x: mousePosition.x - 290,
          y: mousePosition.y - 290,
        }}
        transition={{
          duration: 0.7,
        }}
      ></motion.div>

      <Routes />
    </>
  );
};

export default App;
