import { css } from "@emotion/react";
import { backgroundImage } from "../../assets/styles/common";

import background_left from "../../assets/images/about/background_left.jpg";
import background_right from "../../assets/images/about/background_right.jpg";
import qBg1 from "../../assets/images/about/Q_01.png";
import qBg2 from "../../assets/images/about/Q_02.png";
import qBg3 from "../../assets/images/about/Q_03.png";
import qBg4 from "../../assets/images/about/Q_04.png";
import aBg1 from "../../assets/images/about/A_01.png";
import aBg2 from "../../assets/images/about/A_02.png";
import aBg3 from "../../assets/images/about/A_03.png";
import aBg4 from "../../assets/images/about/A_04.png";

export const list = css`
  > li {
    position: absolute;
    cursor: pointer;

    > .q {
      background-size: 100% 100% !important;
    }
    > .a {
      background-size: 100% 100% !important;
    }

    &:hover {
      > .a {
        opacity: 1;
      }
    }

    &:nth-of-type(1) {
      left: 22%;
      top: 52%;

      > .q {
        ${backgroundImage(qBg1)};
      }
      > .a {
        ${backgroundImage(aBg2)};
      }
    }
    &:nth-of-type(2) {
      left: 28%;
      top: 22%;

      > .q {
        ${backgroundImage(qBg2)};
      }
      > .a {
        ${backgroundImage(aBg3)};
      }
    }
    &:nth-of-type(3) {
      left: 12%;
      top: 02%;

      > .q {
        ${backgroundImage(qBg3)};
      }
      > .a {
        ${backgroundImage(aBg4)};
      }
    }
    &:nth-of-type(4) {
      left: 41%;
      top: 43%;

      > .q {
        ${backgroundImage(qBg4)};
      }
      > .a {
        ${backgroundImage(aBg3)};
      }
    }
    &:nth-of-type(5) {
      left: 59%;
      top: 51%;

      > .q {
        ${backgroundImage(qBg3)};
      }
      > .a {
        ${backgroundImage(aBg2)};
      }
    }
    &:nth-of-type(6) {
      left: 52%;
      top: 10%;

      > .q {
        ${backgroundImage(qBg2)};
      }
      > .a {
        ${backgroundImage(aBg1)};
      }
    }
  }
`;

export const post1 = () => css`
  width: 14.25rem;
  height: 14.8125rem;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const A1 = () => css`
  position: absolute;
  right: -50%;
  top: 50%;
  width: 14.25rem;
  height: 14.8125rem;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 30;
  transition: opacity 0.5s ease;
`;

export const wrapper = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const titleArea = css`
  width: 20vw;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  ${backgroundImage(background_left)};
  background-position: right center;
`;

export const title = css`
  box-sizing: border-box;
  font-size: 3.2rem;
  padding: 2rem 0 0 1rem;
  color: #b2b2b2;
`;

export const csArea = css`
  width: 80vw;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  ${backgroundImage(background_right)};
  background-position: left center;
`;
