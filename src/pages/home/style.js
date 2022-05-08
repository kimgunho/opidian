import { css } from "@emotion/react";
import { backgroundImage, textEffect, textShadow } from "../../assets/styles/common";
import { PC_HOVER } from "../../assets/styles/mediaQuery";
import {
  twinklingBox,
  twinklingColor,
  showHide,
  fadeUp,
  imageShowHide,
} from "../../assets/styles/animation";
import background from "../../assets/images/home/background.jpg";
import card_background from "../../assets/images/home/card_background.png";
import card_border from "../../assets/images/home/card_border.png";

export const container = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  ${backgroundImage(background)}
`;

export const hide = css`
  display: none;
`;

export const card = css`
  ${backgroundImage(card_background)}
  width: 100%;
  max-width: 46.25rem;
  min-height: 28.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 10;

  &.active {
    &::before {
      animation: ${imageShowHide} 1s ease infinite;
    }
  }

  &::before {
    ${backgroundImage(card_border)}
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const title = css`
  font-size: 3.2rem;
  font-weight: 700;
  color: #fff;
`;

export const text = text => css`
  color: white;
  ${textEffect(text)}
`;

export const buttonBorder = css`
  border: 1px solid #fff;
  box-shadow: 0px 0px 10px #8cfde959, inset 0 0 20px #8cfde959;
  background-color: transparent;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 20;

  ${PC_HOVER} {
    &:hover {
      animation: ${twinklingBox} 1s ease infinite;
    }
  }
`;

export const button = css`
  background-color: rgba(255, 255, 255, 0.5);
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem;
  font-size: 1.25rem;
  color: #fff;
  ${textShadow}

  ${PC_HOVER} {
    &:hover {
      animation: ${twinklingColor} 1s ease infinite;
    }
  }
`;

export const active = css`
  animation: ${showHide} 1s ease infinite;
`;

export const absoluteFill = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;

  &.active {
    animation: ${fadeUp} 3s normal forwards ease-in-out;
  }
`;
