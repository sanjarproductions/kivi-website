import { Button } from "../button";
import { Container } from "../container";
import { Drawer } from "../drawer";
import { Logo } from "../logo";

import { useEffect, useState } from "react";
import "./header.scss";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScroll(() => latest > 20 && true);
  });

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(null);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-scroll");
    } else {
      document.body.classList.remove("body-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <header className={`header ${isOpen ? "header-open" : ""}`}>
        <Container>
          <div className="header__inner">
            <Logo
              className={`${isOpen ? "logo-nav" : ""} ${
                isScroll ? "logo-scroll" : ""
              }`}
            />

            <div className="flex items-center">
              <Button
                className={`${isScroll ? "opacity-none" : ""} ${
                  isOpen ? "opacity-none-2" : ""
                }`}
                color="#36A112"
                hover="#E2B671"
                bg="transparent"
                bgLine="#E2B671"
                width="171"
              >
                Get in touch
              </Button>

              <button
                onClick={handleOpen}
                className={`header__menu-burger menu-burger ${
                  isOpen ? "menu-burger--open" : ""
                }`}
                style={{ "--color": "#36A112" }}
              >
                <span className="menu-burger__line"></span>
                <span className="menu-burger__line"></span>
                <span className="menu-burger__line"></span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <Drawer
        className={`${
          isOpen === true
            ? "drawer-open"
            : isOpen === null
            ? "drawer-close"
            : ""
        }`}
      />
    </>
  );
};
