import { css } from "@emotion/react";
import { MOBILE } from "../../assets/styles/mediaQuery";
import { textEffect, backgroundImage } from "../../assets/styles/common";

import OPD_background from "../../assets/images/OPD_LAB/background.jpg";
import OPD_background_MOBILE from "../../assets/images/OPD_LAB/background_mobile.jpg";
import text_frame from "../../assets/images/OPD_LAB/text_frame.png";
import text_frame_mobile from "../../assets/images/OPD_LAB/text_frame_mobile.png";
import text_background from "../../assets/images/OPD_LAB/text_background.png";
import text_background_small from "../../assets/images/OPD_LAB/text_background_small.png";

export const wrapper = css`
  width: 100%;
  min-height: 100vh;
  position: relative;

  ${MOBILE} {
    display: none;
  }
`;

export const background = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-image: url(${OPD_background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const labNav = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;

  > li {
    width: 11%;
    height: 30%;
    text-indent: -9999px;
    cursor: pointer;
    position: absolute;
    top: 37%;

    > span {
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
    }

    &:nth-of-type(1) {
      left: 43.5%;
      > span {
        background-image: url(${text_background});
      }
    }
    &:nth-of-type(2) {
      left: 57.5%;
      > span {
        background-image: url(${text_background_small});
      }
    }
    &:nth-of-type(3) {
      left: 72.5%;
      > span {
        background-image: url(${text_background_small});
      }
    }

    &:hover {
      > span {
        opacity: 1;
      }
    }
  }
`;

export const active = active => css`
  > span {
    display: ${active ? "none" : "block"};
  }
`;

export const hover_background = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transition: opacity 1s ease;
`;

export const infoCSS = isActive => css`
  position: absolute;
  z-index: 30;
  right: 5rem;
  bottom: 5rem;
  padding: 2rem;
  width: 100%;
  max-width: 50rem;
  height: auto;
  background-image: url(${text_frame});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: ${isActive ? "block" : "none"};

  > h3 {
    color: #fff;
    font-size: 2rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    text-shadow: 0px 0px 1.25em #8cfde959;
  }

  > p {
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.6;
  }
  > a {
    margin-top: 2rem;
    text-align: right;
    display: block;
    font-size: 1.25rem;
    color: #fff;
    text-shadow: 0px 0px 1.25em #00ecc2;
  }
  > button {
    background-color: transparent;
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    border: 0;
    line-height: 1;
    text-shadow: 0px 0px 1.25em #00ecc2;
  }
`;

export const menuTitle = text => css`
  ${textEffect(text)};
  text-indent: 0px;
  top: -2rem;
  height: auto;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 2.3rem;
  white-space: nowrap;
  display: block;
  width: fit-content;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const wrapperMobile = css`
  width: 100%;
  min-height: 100vh;
  position: relative;
  ${backgroundImage(OPD_background_MOBILE)};
  background-position: center center;
`;

export const navMobile = boolean => css`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);

  ${!boolean &&
  `
  display:none;
  `}

  > li {
    font-size: 7vw;
    text-align: center;
    white-space: nowrap;
    background-image: url(${text_background});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 1rem 2rem;
    cursor: pointer;
  }
`;

export const menu = title => css`
  color: #fff;
  ${textEffect(title)};
  transform: translate(-50%, 0);
`;

export const centerNav = css`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 35vw;
  display: flex;
  justify-content: space-between;

  > li {
    width: 30%;
    height: 100%;
    cursor: pointer;

    > img {
      width: 100%;
    }
  }
`;

export const infoMobileCSS = css`
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 1rem;
  padding: 2rem;
  width: 80%;
  height: auto;
  transform: translate(-50%, 0);
  background-image: url(${text_frame_mobile});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;

  > h3 {
    color: #fff;
    font-size: 2rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    text-shadow: 0px 0px 1.25em #8cfde959;
  }

  > p {
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.6;
  }
  > a {
    margin-top: 2rem;
    text-align: right;
    display: block;
    font-size: 1.25rem;
    color: #fff;
    text-shadow: 0px 0px 1.25em #00ecc2;
  }
  > button {
    background-color: transparent;
    position: absolute;
    right: 2rem;
    top: 2rem;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    border: 0;
    line-height: 1;
    text-shadow: 0px 0px 1.25em #00ecc2;
  }
`;

export const upY = boolean => css`
  transition: all 0.2s ease;
  transform: ${boolean ? "translateY(-2rem)" : "translateY(0)"};
`;
