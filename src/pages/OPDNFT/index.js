/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import background_total from "../../assets/images/OPD_NFT/tatal_bg.png";
import card from "../../assets/images/OPD_NFT/card.png";

import {
  wrapper,
  fullImage,
  sliderBox,
  slide,
  buttonLeft,
  buttonRight,
  wrapperMobile,
  containerMobile,
  sliderMobileBox,
  slideMobile,
  buttonMobileRight,
  buttonMobileLeft,
} from "./style";

const OPDNFT = () => {
  const sliderRef = useRef();
  const sliderMobileRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "0px",
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <>
      <main css={wrapper}>
        <div css={sliderBox}>
          <Slider {...settings} ref={sliderRef}>
            <div css={slide}>
              <h3>CARD NAME</h3>
              <p>2658 4185 9934 0206</p>
              <div style={{ backgroundImage: `url(${card})` }} />
            </div>
            <div css={slide}>
              <h3>CARD NAME</h3>
              <p>2658 4185 9934 0206</p>
              <div style={{ backgroundImage: `url(${card})` }} />
            </div>
            <div css={slide}>
              <h3>CARD NAME</h3>
              <p>2658 4185 9934 0206</p>
              <div style={{ backgroundImage: `url(${card})` }} />
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
      <main css={wrapperMobile}>
        <div css={containerMobile}>
          <div css={sliderMobileBox}>
            <Slider {...settings} ref={sliderMobileRef}>
              <div css={slideMobile}>
                <h3>CARD NAME</h3>
                <p>2658 4185 9934 0206</p>
                <div style={{ backgroundImage: `url(${card})` }} />
              </div>
              <div css={slideMobile}>
                <h3>CARD NAME</h3>
                <p>2658 4185 9934 0206</p>
                <div style={{ backgroundImage: `url(${card})` }} />
              </div>
              <div css={slideMobile}>
                <h3>CARD NAME</h3>
                <p>2658 4185 9934 0206</p>
                <div style={{ backgroundImage: `url(${card})` }} />
              </div>
            </Slider>
            <button
              css={buttonMobileLeft}
              onClick={() => sliderMobileRef.current?.slickPrev()}
              type="button"
            ></button>
            <button
              css={buttonMobileRight}
              onClick={() => sliderMobileRef.current?.slickNext()}
              type="button"
            ></button>
          </div>
        </div>
      </main>
    </>
  );
};

export default OPDNFT;
