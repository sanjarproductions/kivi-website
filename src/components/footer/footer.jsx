import { memo } from "react";
import { useScroll } from "../../hooks";
import { Container } from "../container";

import { TextField } from "@mui/material";
import "./footer.scss";
import { Form } from "../form";

export const Footer = memo(() => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__form">
            <h3 className="footer__title" data-aos="zoom-in-up">
              STAY UP TO BATE
            </h3>
            <p className="footer__info" data-aos="zoom-in-up">
              Contact us
            </p>

            <Form />
          </div>

          <div className="footer__address">
            <h3 className="footer__title" data-aos="zoom-in-up">
              get in touch
            </h3>

            <div className="footer__address-content">
              <a
                className="footer__address-link"
                href="mailto:kiviwebstudio@gmail.com"
                target="_blank"
                data-aos="zoom-in-up"
              >
                kiviwebstudio@gmail.com
              </a>
              <a
                className="footer__address-link"
                href="tel:+998716606060"
                target="_blank"
                data-aos="zoom-in-up"
              >
                +998 90 054 83 88
              </a>
              <a
                className="footer__address-link"
                href="https://goo.gl/maps/LQms22LCNBhG2DraA"
                target="_blank"
                data-aos="zoom-in-up"
              >
                Tashkent.sh Sergeli 6
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="footer__line"></div>
    </footer>
  );
});
