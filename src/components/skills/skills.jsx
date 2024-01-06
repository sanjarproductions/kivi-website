import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../button";
import { Container } from "../container";
import { skillsList } from "./skills-list";
import "./skills.scss";

export const Skills = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    console.log({ x: event.clientX, y: event.clientY });
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <section className="skills">
      <Container>
        <div>
          <div data-aos="fade-up-right">
            <Button
              className="skills__button hero__button"
              color="#E2B671"
              hover="#fff"
              bg="#36A112"
              bgLine="#fff"
              width="289"
            >
              Get in touch
            </Button>
            <Button
              className="skills__button hero__button-bottom"
              color="#E2B671"
              hover="#fff"
              bg="#36A112"
              bgLine="#fff"
              width="171"
            >
              Get in touch
            </Button>
          </div>

          <ul className="skills__list">
            {skillsList.map((skill, index) => (
              <li
                className="skills__item"
                key={index}
                data-aos="zoom-in-up"
                onMouseMove={handleMouseMove}
              >
                <motion.div
                  className="skills__item-img"
                  style={{ backgroundImage: `url(${skill.hoverImg})` }}
                  animate={{
                    x: position.x + skill.x,
                    y: position.y - 300,
                    rotate: 25,
                  }}
                  transition={{
                    duration: 0.7,
                    type: "tween",
                  }}
                ></motion.div>
                <h2 style={{ color: skill.color }} className="skills__title">
                  {skill.title}
                </h2>
                <p className="skills__text">{skill.text}</p>

                <a className="skills__contiune" href="/">
                  Continue reading
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
