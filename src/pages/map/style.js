import { css } from "@emotion/react";
import { backgroundImage } from "../../assets/styles/common";
import background from "../../assets/images/MAP/background.jpg";
import background_left from "../../assets/images/MAP/info_left.png";
import background_right from "../../assets/images/MAP/info_right.png";
import background_center from "../../assets/images/MAP/info_center.png";
import rocket from "../../assets/images/MAP/rocket.png";

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
`;

export const sections = css`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  > div {
    width: 30%;
    box-sizing: border-box;

    &:nth-of-type(1) {
      ${backgroundImage(background_left)};
    }
    &:nth-of-type(2) {
      ${backgroundImage(background_center)};
      background-size: contain;
      background-position: center bottom;
    }
    &:nth-of-type(3) {
      ${backgroundImage(background_right)};
    }
  }
`;

export const mainModel = css`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 60vw;
  height: 100%;
  max-height: 60vh;
  transform: translate(-50%, -50%);
  padding: 1rem;

  > div {
    width: 100%;
    height: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ${backgroundImage(rocket)};
    background-size: contain;
  }
`;

export const list = css`
  > li {
    padding-left: 1rem;
    border-left: 2px solid #fff;
    position: absolute;

    &:nth-of-type(1) {
      left: 2rem;
      top: 2rem;
    }
    &:nth-of-type(2) {
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
    }
    &:nth-of-type(3) {
      right: 2rem;
      top: 2rem;
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
