import { css, keyframes } from "@emotion/react";
import { backgroundImage } from "../../assets/styles/common";
import { MOBILE } from "../../assets/styles/mediaQuery";

import background from "../../assets/images/MAP/background.jpg";
import background_left from "../../assets/images/MAP/info_left.png";
import background_right from "../../assets/images/MAP/info_right.png";
import background_center from "../../assets/images/MAP/info_center.png";
import background_top from "../../assets/images/MAP/mobile_top.png";
import background_bottom from "../../assets/images/MAP/mobile_bottom.png";

export const wrapper = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  ${backgroundImage(background)};
`;

export const title = css`
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translate(-50%, 0);
  color: #fff;
  font-size: 3.2rem;
  font-weight: 700;

  ${MOBILE} {
    font-size: 2.4rem;
  }
`;

const fadeShow = keyframes`
0%{
  opacity:0;
}
8%{
  opacity:.5;  
}
16%{
  opacity:0;  
}
24%{
  opacity:1;    
  clip:rect(auto, 0, auto, auto) ;
}
100%{
  clip:rect(auto, 1500px, auto, auto) ;  
}
`;

const downMove = keyframes`
0%{
  height:0%;
}
100%{
  height:100%;
}
`;

const fadeOn = keyframes`
0%{
  opacity:0 ;
}
100%{
  opacity:1 ;
}
`;

export const sections = css`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  ${MOBILE} {
    align-items: center;
  }

  > div {
    width: 20%;
    box-sizing: border-box;
    filter: drop-shadow(2px 4px 6px black);

    &:nth-of-type(1) {
      ${backgroundImage(background_left)};
      background-position: left center;
      opacity: 0;
      animation: ${fadeOn} 2s forwards ease-in-out;
      animation-delay: 4s;

      ${MOBILE} {
        display: none;
      }
    }
    &:nth-of-type(2) {
      ${backgroundImage(background_center)};
      background-size: contain;
      background-position: center bottom;
      width: 55%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      ${MOBILE} {
        width: 100%;
        height: 90vh;
        background-image: none;
      }

      > img {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: ${fadeShow} 3s forwards ease-in;

        ${MOBILE} {
          width: auto;
          left: 20%;
          top: 50%;
          max-height: 65vh;
        }
      }
    }
    &:nth-of-type(3) {
      ${backgroundImage(background_right)};
      background-position: right center;
      opacity: 0;
      animation: ${fadeOn} 2s forwards ease-in-out;
      animation-delay: 4s;

      ${MOBILE} {
        display: none;
      }
    }
  }
`;

export const mobileCenterTop = css`
  display: none;
  width: 100%;
  height: 8vh;
  ${backgroundImage(background_top)};
  background-position: center bottom;
  background-size: contain;

  ${MOBILE} {
    display: block;
  }
`;
export const mobileCenterBottom = css`
  display: none;
  width: 100%;
  height: 10vh;
  ${backgroundImage(background_bottom)};
  background-position: center top;
  background-size: auto 10vh;

  ${MOBILE} {
    display: block;
  }
`;

export const list = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  animation: ${downMove} 1s forwards ease-in-out;
  animation-delay: 3s;

  > li {
    padding-left: 3rem;
    border-left: 3px solid #fff;
    position: absolute;

    ${MOBILE} {
      border-left: 0;
      border-top: 3px solid #fff;
      padding: 1rem 0 0 0;
    }

    &::after {
      content: "";
      position: absolute;
      left: -2px;
      width: 1px;
      background-color: #fff;
      opacity: 0.4;

      ${MOBILE} {
        top: -2px;
        width: 20vw;
        left: auto;
        right: 100%;
      }
    }

    &:nth-of-type(1) {
      left: 0;
      top: 20%;

      ${MOBILE} {
        top: 15%;
        right: 0;
        left: auto;
      }

      &::after {
        height: 10vh;
        bottom: -10vh;

        ${MOBILE} {
          bottom: auto;
          height: 1px;
        }
      }
    }
    &:nth-of-type(2) {
      bottom: 20%;
      left: 33%;

      ${MOBILE} {
        top: 40%;
        right: 0;
        left: auto;
      }

      &::after {
        height: 5vh;
        top: -5vh;

        ${MOBILE} {
          top: -2px;
          height: 1px;
          bottom: auto;
        }
      }
    }
    &:nth-of-type(3) {
      left: 66%;
      top: 20%;

      ${MOBILE} {
        top: 65%;
        right: 0;
        left: auto;
      }

      &::after {
        height: 5vh;
        bottom: -5vh;

        ${MOBILE} {
          height: 1px;
          bottom: auto;
        }
      }
    }

    > h3 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
    }
    > p {
      color: #fff;
      font-size: 1rem;
      line-height: 2;
    }
  }
`;

export const PCIMG = css`
  ${MOBILE} {
    display: none;
  }
`;
export const MOBILEIMG = css`
  display: none;
  ${MOBILE} {
    display: block;
  }
`;
