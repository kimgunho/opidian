import { css } from "@emotion/react";
import { MOBILE } from "../../assets/styles/mediaQuery";
import { textEffect } from "../../assets/styles/common";
import alert_background from "../../assets/images/global/error_border.png";

export const card = isActive => css`
  width: 100%;
  max-width: 40rem;
  min-height: 25rem;
  display: ${isActive ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 50;
  background-image: url(${alert_background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 0;

  ${MOBILE} {
    min-height: 20rem;
    max-width: 30rem;
    background-size: 100% 100%;
  }
`;

export const title = css`
  font-size: 3.4rem;
  font-weight: 700;
  color: #fff;

  > span {
    display: block;

    &:first-of-type {
      ${textEffect("To be")};
      transform: translate(-50%, 0);
      text-shadow: none;
    }
    &:last-of-type {
      ${textEffect("Announced")};
      transform: translate(-50%, 0);
      text-shadow: none;
    }
  }

  ${MOBILE} {
    font-size: 2.4rem;
  }
`;

export const button = css`
  position: absolute;
  right: 4rem;
  top: 4rem;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;

  ${MOBILE} {
    font-size: 1.25rem;
  }
`;
