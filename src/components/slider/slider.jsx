import { Carousel } from "../carousel";
import { Container } from "../container";
import "./slider.scss";

export const Slider = () => {
  return (
    <section className="slider">
      <Container>
        <div className="slider__text-content flex justify-end">
          <h2 className="slider__title" data-aos="zoom-in-up">
            Kivi provides the{" "}
            <span style={{ color: "#E2B671" }}>est customer servise </span>
            bInternet development services in Tashkent ,
            <span style={{ color: "#36A112" }}>Uzbekistan and World Wide</span>.
          </h2>
        </div>
      </Container>
      <Carousel />
    </section>
  );
};
