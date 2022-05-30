import { css } from "@emotion/react";
import { backgroundImage } from "../../assets/styles/common";
import { MOBILE } from "../../assets/styles/mediaQuery";

import background_left from "../../assets/images/about/background_left.jpg";
import background_right from "../../assets/images/about/background_right.jpg";
import background_top from "../../assets/images/about/background_top.jpg";
import background_bottom from "../../assets/images/about/background_bottom.jpg";
import qBg1 from "../../assets/images/about/Q_01.png";
import qBg2 from "../../assets/images/about/Q_02.png";
import qBg3 from "../../assets/images/about/Q_03.png";
import qBg4 from "../../assets/images/about/Q_04.png";
import aBg1 from "../../assets/images/about/A_01.png";
import aBg2 from "../../assets/images/about/A_02.png";
import aBg3 from "../../assets/images/about/A_03.png";
import aBg4 from "../../assets/images/about/A_04.png";

export const list = css`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 90%;
  height: 90%;

  ${MOBILE} {
    width: 100%;
    height: 100%;
  }

  > li {
    position: absolute;
    cursor: pointer;

    &.active {
      > .a {
        z-index: 5;
        display: flex;
      }
      > .q {
        z-index: 4;
      }
      > div {
        z-index: 3;
        display: block;
      }
    }
  }
`;

export const post1 = number => css`
  width: 14.25rem;
  height: 14.8125rem;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  position: relative;
  z-index: 2;
  font-size: 1.25rem;
  font-family: "Nanum Brush Script", cursive;

  ${number === 1 &&
  `
    background-image: url(${qBg1});  
  `}
  ${number === 2 &&
  `
    background-image: url(${qBg2});  
  `}
  ${number === 3 &&
  `
    background-image: url(${qBg3});  
  `}
  ${number === 4 &&
  `
    background-image: url(${qBg4});  
  `}

  ${MOBILE} {
    width: 9rem;
    height: 9rem;
  }
`;

export const A1 = number => css`
  position: absolute;
  right: -50%;
  top: 50%;
  width: 14.25rem;
  height: 14.8125rem;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  font-size: 1.25rem;
  background-size: 100% 100%;
  font-family: "Nanum Brush Script", cursive;

  ${number === 1 &&
  `
    background-image: url(${aBg1});  
  `}
  ${number === 2 &&
  `
    background-image: url(${aBg2});  
  `}
  ${number === 3 &&
  `
    background-image: url(${aBg3});  
  `}
  ${number === 4 &&
  `
    background-image: url(${aBg4});  
  `}

  ${MOBILE} {
    position: fixed;
    left: 50%;
    top: 50%;
    right: auto;
    transform: translate(-50%, -50%);
  }
`;

export const wrapper = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

export const titleArea = css`
  width: 15vw;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  top: 0;
  ${backgroundImage(background_left)};
  background-position: right center;

  ${MOBILE} {
    flex-direction: row;
    width: 100%;
    height: 10%;
    justify-content: center;
    ${backgroundImage(background_top)};
    background-position: center bottom;
  }
`;

export const title = css`
  box-sizing: border-box;
  padding-top: 3rem;
  font-size: 3.2rem;
  color: #b2b2b2;

  ${MOBILE} {
    padding: 1rem;

    > br {
      display: none;
    }
  }
`;

export const csArea = css`
  width: 85vw;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  ${backgroundImage(background_right)};
  background-position: left center;

  ${MOBILE} {
    ${backgroundImage(background_bottom)};
    background-position: center top;
    width: 100%;
    height: 90%;
    top: 10%;
  }
`;

export const dimmed = css`
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);

  ${MOBILE} {
    width: 100vw;
  }
`;
