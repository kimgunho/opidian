import { css } from "@emotion/react";
import { MOBILE } from "../../assets/styles/mediaQuery";
import { backgroundImage } from "../../assets/styles/common";
import { zoomDownBlur } from "../../assets/styles/animation";

import background from "../../assets/images/OPD_NFT/background.jpg";
import slider_background from "../../assets/images/OPD_NFT/slider_background.png";
import prevBtn from "../../assets/images/OPD_NFT/prev_btn.png";
import nextBtn from "../../assets/images/OPD_NFT/next_btn.png";
import background_mobile from "../../assets/images/OPD_NFT/background_mobile.png";

export const wrapper = css`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  ${backgroundImage(background)};
  animation: ${zoomDownBlur} 2s normal forwards ease-in-out;

  ${MOBILE} {
    display: none;
  }
`;

export const sliderBox = css`
  position: absolute;
  width: 40.5vw;
  height: 45vh;
  left: 4%;
  top: 17%;
  z-index: 10;
  ${backgroundImage(slider_background)};
  background-size: 100% 100%;

  .slick-slider {
    height: 100%;
  }

  .slick-dots {
    bottom: -3rem;
  }
`;

export const fullImage = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  object-fit: fill;
`;

export const slide = css`
  padding: 3rem 1rem 8rem;
  box-sizing: border-box;
  text-align: center;
  display: flex !important;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > h3 {
    color: #fff;
    font-size: 2.25rem;
  }
  > p {
    color: #fff;
    opacity: 0.4;
    font-size: 1.25rem;
  }
  > div {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 20vh;
    margin-top: 5vh;
  }
`;

const button = css`
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translate(0, -50%);
  width: 3.125rem;
  height: 3.4375rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  background-size: contain;

  ${MOBILE} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const buttonLeft = css`
  left: 2rem;
  ${backgroundImage(prevBtn)};
  ${button};
`;

export const buttonRight = css`
  right: 2rem;
  ${backgroundImage(nextBtn)};
  ${button};
`;

export const wrapperMobile = css`
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  display: none;
  ${backgroundImage(background)};
  animation: ${zoomDownBlur} 2s normal forwards ease-in-out;

  ${MOBILE} {
    display: block;
  }
`;

export const containerMobile = css`
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  max-width: 630px;
  transform: translate(-50%, -50%);
  ${backgroundImage(background_mobile)};
  background-size: 100% 100%;
`;

export const sliderMobileBox = css`
  position: absolute;
  left: 50%;
  top: 10vh;
  width: 90%;
  max-width: 600px;
  height: 100%;
  max-height: 28vh;
  transform: translate(-50%, 0);
  ${backgroundImage(slider_background)};
  background-size: 100% 100%;

  .slick-slider {
    height: 100%;
  }

  .slick-dots {
    bottom: 0;
  }
`;

export const slideMobile = css`
  box-sizing: border-box;
  text-align: center;
  display: flex !important;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 28vh;
  padding: 1rem;

  > h3 {
    color: #fff;
    font-size: 1.5rem;
  }
  > p {
    color: #fff;
    opacity: 0.4;
    font-size: 1rem;
  }
  > div {
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 16vh;
    margin-top: 2vh;
  }
`;

export const buttonMobileLeft = css`
  left: 0;
  ${backgroundImage(prevBtn)};
  ${button};
`;

export const buttonMobileRight = css`
  right: 0;
  ${backgroundImage(nextBtn)};
  ${button};
`;
