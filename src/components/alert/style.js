import { css } from "@emotion/react";
import { MOBILE, PC_HOVER } from "../../assets/styles/mediaQuery";
import { textEffect } from "../../assets/styles/common";
import alert_background from "../../assets/images/global/error_border.png";

export const card = isActive => css`
  width: 100%;
  max-width: 46.25rem;
  min-height: 28.125rem;
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
      text-shadow: none;
    }
    &:last-of-type {
      ${textEffect("Announced")};
      text-shadow: none;
    }
  }

  ${MOBILE} {
    font-size: 2.4rem;
  }
`;

export const buttonBorder = css`
  border: 1px solid #fff;
  box-shadow: 0px 0px 10px #a27e7e, inset 0 0 20px #a27e7e;
  background-color: transparent;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 20;

  ${PC_HOVER} {
    &:hover {
      border-color: #a27e7e;
    }
  }

  &.active {
    border-color: #a27e7e;
  }
`;

export const button = css`
  background-color: rgba(255, 255, 255, 1);
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem;
  font-size: 1.5rem;
  color: #a27e7e;

  ${MOBILE} {
    font-size: 1.25rem;
  }
`;
