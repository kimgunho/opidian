import { css } from "@emotion/react";
import { MOBILE } from "./mediaQuery";

export const blue = "#8CFDE9";
export const pink = "#FEB4FF";

export const textShadow = css`
  text-shadow: 0px 0px 1.25em #00ecc2;
`;

export const FontNoto = css`
  font-family: "Noto Sans KR", sans-serif;
`;

export const backgroundImage = image => css`
  background-image: url(${image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const textEffect = text => css`
  position: relative;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  text-shadow: 0px 0px 15px #8cfde959;

  &:before {
    content: "${text}";
    left: calc(50% - 3px);
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color: ${blue};
    z-index: -1;
    position: absolute;

    ${MOBILE} {
      left: calc(50% - 1px);
    }
  }

  &:after {
    content: "${text}";
    left: calc(50% + 3px);
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color: ${pink};
    z-index: -1;
    position: absolute;

    ${MOBILE} {
      left: calc(50% + 1px);
    }
  }
`;
