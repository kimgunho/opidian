import { css } from "@emotion/react";
import { textEffect, backgroundImage } from "../../assets/styles/common";

import background from "../../assets/images/place/background.jpg";

export const container = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  ${backgroundImage(background)}
`;

export const nav = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  > ul {
    > li {
      position: absolute;
      font-size: 2rem;
    }
  }
`;

export const position = (x, y) => css`
  left: ${x}vw;
  top: ${y}vw;
`;

export const menu = text => css`
  color: white;
  ${textEffect(text)}
`;
