import { css } from "@emotion/react";
import { backgroundImage } from "../../assets/styles/common";

import background from "../../assets/images/OPD_NFT/background.jpg";
import slider_background from "../../assets/images/OPD_NFT/slider_background.png";
import prevBtn from "../../assets/images/OPD_NFT/prev_btn.png";
import nextBtn from "../../assets/images/OPD_NFT/next_btn.png";

export const wrapper = css`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  ${backgroundImage(background)};
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
    height: 20rem;
    margin-top: 5rem;
  }
`;

const button = css`
  position: absolute;
  top: 60%;
  z-index: 10;
  transform: translate(0, -50%);
  width: 3.125rem;
  height: 3.4375rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
export const buttonLeft = css`
  ${button};
  left: 2rem;
  ${backgroundImage(prevBtn)};
`;

export const buttonRight = css`
  ${button};
  right: 2rem;
  ${backgroundImage(nextBtn)};
`;
