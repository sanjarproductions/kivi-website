import { Button } from "../button";
import { Container } from "../container";
import "./works.scss";

export const Works = () => {
  return (
    <section className="works">
      <Container>
        <div className="works__inner mx-auto flex justify-center items-center flex-col">
          <p
            className="works__make hero__conversion"
            data-aos={`${
              window.screen.width < 540 ? "zoom-in-up" : "fade-up-left"
            }`}
          >
            let’s make
          </p>
          <div
            className="works__great-content hero__through"
            data-aos={`${
              window.screen.width < 540 ? "zoom-in-up" : "fade-up-right"
            }`}
          >
            <p className="works__great">great work</p>
            <Button
              className="works__button"
              color="#36A112"
              hover="#E2B671"
              bg="transparent"
              bgLine="#E2B671"
              width="171"
            >
              Get in touch
            </Button>
          </div>
          <p
            className="works__together hero__immersion"
            data-aos={`${
              window.screen.width < 540 ? "zoom-in-up" : "fade-up-left"
            }`}
          >
            together
          </p>
        </div>
      </Container>
    </section>
  );
};
