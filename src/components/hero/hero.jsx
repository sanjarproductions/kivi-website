import { Parallax } from "react-parallax";
import Tilt from "react-parallax-tilt";
import { Container } from "../container";
import { Button } from "../button";
import { motion } from "framer-motion";

import heroImg from "../../assets/images/hero-img.png";

import "./hero.scss";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__inner">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Tilt
              tiltEnable={window.innerWidth < 500 ? false : true}
              scale={1.1}
              transitionSpeed={1000}
              className="hero__img-content"
            >
              <Parallax
                strength={100}
                bgImage={heroImg}
                className="hero__img"
              ></Parallax>
            </Tilt>
          </motion.div>

          <div className="hero__texts">
            <motion.span
              initial={{
                opacity: 0,
                x: 400,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
              className="hero__conversion"
            >
              conversion
            </motion.span>
            <motion.div
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
              className="hero__through"
            >
              <span>through</span>
              <Button
                className="hero__button"
                color="#E2B671"
                hover="#fff"
                bg="#36A112"
                bgLine="#ffffff"
                width="289"
              >
                Get in touch
              </Button>
            </motion.div>
            <motion.span
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.3, type: "spring" }}
              className="hero__immersion"
            >
              immersion
            </motion.span>

            <motion.div
              initial={{
                opacity: 0,
                x: 500,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
            >
              <Button
                className="hero__button-bottom"
                color="#E2B671"
                hover="#fff"
                bg="#36A112"
                bgLine="#fff"
                width="171"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>

      <Link
        className="hero__vector vector"
        to="carusel"
        smooth={true}
        offset={-50}
      >
        <span className="vector__border">
          <span className="vector__img">
            <svg
              width="28"
              height="31"
              viewBox="0 0 28 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6 3L2 16.4167M14.6 3L26 16.4167M14.6 3V31"
                stroke="#36A112"
                strokeWidth="3"
              />
            </svg>
          </span>
        </span>
      </Link>
    </section>
  );
};
