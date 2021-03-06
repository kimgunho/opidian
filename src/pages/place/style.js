import { css, keyframes } from "@emotion/react";
import { textEffect, backgroundImage } from "../../assets/styles/common";
import { zoomDownBlur } from "../../assets/styles/animation";
import { MOBILE, PC_HOVER } from "../../assets/styles/mediaQuery";

import background from "../../assets/images/place/background.jpg";
import background_mobile from "../../assets/images/place/background_mobile.jpg";
import background_hover from "../../assets/images/place/background_hover.jpg";
import background_nft from "../../assets/images/place/background_nft.jpg";
import text_background from "../../assets/images/place/text_background.png";
import opd_arrow_line from "../../assets/images/place/line.png";

export const background_update = hover => css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  overflow-y: hidden;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  ${hover === "lab" &&
  `
  background-image: url(${background_nft});  

  `}
  ${hover === "hover" &&
  `
  background-image: url(${background_hover});  

  `}
`;

export const container = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  ${backgroundImage(background)}
  animation: ${zoomDownBlur} 2s normal forwards ease-in-out;

  ${MOBILE} {
    display: none;
  }
`;

export const nav = css`
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 62vw;
  max-height: 40.71992481203%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);

  > ul {
    > li {
      position: absolute;
      font-size: 2.3rem;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      transition: font-size 0.2s ease;

      ${PC_HOVER} {
        &:hover {
          font-size: 2.5rem;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        filter: blur(50px);
        z-index: -1;
        opacity: 0.25;
      }
    }
  }
`;

export const hoverButton = css`
  padding: 0.5rem 4rem !important;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: -11.5625rem;
    width: 15rem;
    height: 12.5rem;
    ${backgroundImage(opd_arrow_line)};
    background-size: contain;
    background-position: center bottom;
  }

  ${PC_HOVER} {
    &:hover {
      ${backgroundImage(text_background)}
    }
  }
`;

export const position = (left = "auto", top = "auto", right = "auto") => css`
  left: ${left};
  top: ${top};
  right: ${right};
`;

export const menu = text => css`
  color: white;
  ${textEffect(text)}
  transform: translate(-50%,0);
`;

// mobile

export const containerMobile = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  ${backgroundImage(background_mobile)}
  animation: ${zoomDownBlur} 2s normal forwards ease-in-out;
  display: none;

  ${MOBILE} {
    display: block;
  }
`;

const fadeShow = keyframes`
  0%{
    opacity:0 ;
  }
  2%{
    opacity:1 ;
  }
  4%{
    opacity:0 ;
  }
  6%{
    opacity:1 ;
  }
  100%{
    opacity:1 ;
  }

`;

export const navMobile = css`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);

  > li {
    font-size: 7vw;
    text-align: center;
    white-space: nowrap;
    background-image: url(${text_background});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 1rem 2rem;
    animation: ${fadeShow} 1s forwards ease-in;

    &:nth-of-type(1) {
      animation-delay: 5s;
    }
    &:nth-of-type(2) {
      animation-delay: 3s;
    }
    &:nth-of-type(3) {
      animation-delay: 6s;
    }
    &:nth-of-type(4) {
      animation-delay: 1s;
    }
    &:nth-of-type(5) {
      animation-delay: 2s;
    }
    &:nth-of-type(6) {
      animation-delay: 4s;
    }
  }
`;
