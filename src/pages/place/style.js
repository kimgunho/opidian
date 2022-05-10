import { css } from "@emotion/react";
import { textEffect, backgroundImage } from "../../assets/styles/common";
import { zoomDownBlur } from "../../assets/styles/animation";
import { PC_HOVER } from "../../assets/styles/mediaQuery";

import background from "../../assets/images/place/background.jpg";
import background_hover from "../../assets/images/place/background_hover.jpg";
import text_background from "../../assets/images/place/text_background.png";
import opd_arrow_line from "../../assets/images/place/line.png";

export const container = hover => css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-size: cover;

  ${backgroundImage(hover ? background_hover : background)};
  animation: ${zoomDownBlur} 2s normal forwards ease-in-out;

  @media (max-width: 1350px) {
    background-position: center right;
  }
`;

export const nav = css`
  position: absolute;
  left: 45%;
  top: 50%;
  max-width: 61.75387505871%;
  max-height: 40.71992481203%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);

  @media (max-width: 1350px) {
    left: 36%;
    max-width: 73%;
  }

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
          font-size: 2.8125rem;
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
    width: 18.75rem;
    height: 12.5rem;
    ${backgroundImage(opd_arrow_line)};
    background-position: center left;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  ${PC_HOVER} {
    &:hover {
      ${backgroundImage(text_background)}

      &::after {
        opacity: 1;
      }
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
