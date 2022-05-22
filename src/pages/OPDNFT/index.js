/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import background_total from "../../assets/images/OPD_NFT/tatal_bg.png";
import card from "../../assets/images/OPD_NFT/card.png";

import { wrapper, fullImage, sliderBox, slide, buttonLeft, buttonRight } from "./style";

const OPDNFT = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "0px",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main css={wrapper}>
      <div css={sliderBox}>
        <Slider {...settings} ref={sliderRef}>
          <div css={slide}>
            <h3>CARD NAME</h3>
            <p>2658 4185 9934 0206</p>
            <img src={card} alt="" />
          </div>
          <div css={slide}>
            <h3>CARD NAME</h3>
            <p>2658 4185 9934 0206</p>
            <img src={card} alt="" />
          </div>
          <div css={slide}>
            <h3>CARD NAME</h3>
            <p>2658 4185 9934 0206</p>
            <img src={card} alt="" />
          </div>
        </Slider>
        <button
          css={buttonLeft}
          onClick={() => sliderRef.current?.slickPrev()}
          type="button"
        ></button>
        <button
          css={buttonRight}
          onClick={() => sliderRef.current?.slickNext()}
          type="button"
        ></button>
      </div>
      <img css={fullImage} src={background_total} alt="" />
    </main>
  );
};

export default OPDNFT;
