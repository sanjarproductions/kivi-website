import { motion } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import { FreeMode, Parallax, Virtual, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCursor } from "../../hooks";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/parallax";
import "swiper/css/virtual";
import "swiper/css/zoom";
import "./carousel.scss";
import { portfolioList } from "./portfolio-list";

export const Carousel = memo(() => {
  const mousePosition = useCursor();
  const swiperRef = useRef(null);

  const handleScroll = () => {
    swiperRef.current.translateTo(-1 * window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="corousel" id="carusel">
      <Swiper
        className="corousel__swiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Zoom, FreeMode, Parallax, Virtual]}
        zoom
        freeMode
        loopedSlides={8}
        parallax
        spaceBetween={20}
        slidesPerView={"auto"}
        speed={1000}
      >
        {[...portfolioList, ...portfolioList, ...portfolioList].map(
          (texts, index) => (
            <SwiperSlide className="corousel__item" key={index}>
              <div className="corousel__block">
                <div
                  data-swiper-parallax="8%"
                  className="corousel__img"
                  style={{
                    backgroundImage: `url(${texts.img})`,
                  }}
                >
                  <a className="corousel__link" href="/"></a>
                </div>
              </div>

              <div className="corousel__texts">
                <h3>{texts.title}</h3>
                <p>
                  <span></span>
                  {texts.text}
                </p>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <motion.span
        animate={{
          x: mousePosition.x - 130,
          y: mousePosition.y - 1900,
        }}
        transition={{
          duration: 0.6,
          type: "tween",
        }}
        className="corousel__drag"
      >
        drag or click
      </motion.span>
    </div>
  );
});
