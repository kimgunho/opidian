import { css } from "@emotion/react";
import { textEffect, backgroundImage } from "../../assets/styles/common";
import { blueFade } from "../../assets/styles/animation";
import { PC_HOVER } from "../../assets/styles/mediaQuery";
import { arrowActive } from "../../assets/styles/animation";
import background from "../../assets/images/place/background.jpg";
import background_hover from "../../assets/images/place/background_hover.jpg";
import text_background from "../../assets/images/place/text_background.png";

export const container = hover => css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  ${backgroundImage(hover ? background_hover : background)}
  animation: ${blueFade} 2s normal forwards ease-in-out;
`;

export const nav = css`
  position: absolute;
  left: 45%;
  top: 50%;
  max-width: 70vw;
  max-height: 60vh;
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

export const hoverProp = way => css`
  ${PC_HOVER} {
    &:hover {
      div {
        animation: ${arrowActive(way)} 2s ease-in-out infinite;
      }
    }
  }
`;

export const hoverButton = css`
  padding: 0.5rem 4rem !important;

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
