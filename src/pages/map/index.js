/** @jsxImportSource @emotion/react */
import rocket from "../../assets/images/MAP/rocket.png";
import rocketVertical from "../../assets/images/MAP/rocket_vertical.png";

import {
  wrapper,
  title,
  sections,
  list,
  PCIMG,
  MOBILEIMG,
  mobileCenterTop,
  mobileCenterBottom,
} from "./style";
const MAP = () => {
  return (
    <main css={wrapper}>
      <h2 css={title}>MAP</h2>

      <div css={sections}>
        <div className="left"></div>
        <div className="center">
          <div css={mobileCenterTop} />
          <ul css={list}>
            <li>
              <h3>1st</h3>
              <p>
                Community Wallet
                <br />
                We enter the Sandbox
                <br />
                Opidian Social App
                <br />
                P2E Game + ICO
              </p>
            </li>
            <li>
              <h3>2nd</h3>
              <p>
                Community Wallet
                <br />
                We enter the Sandbox
                <br />
                Opidian Social App
                <br />
                P2E Game + ICO
              </p>
            </li>
            <li>
              <h3>3rd</h3>
              <p>
                Community Wallet
                <br />
                We enter the Sandbox
                <br />
                Opidian Social App
                <br />
                P2E Game + ICO
              </p>
            </li>
          </ul>
          <img css={PCIMG} src={rocket} alt="" />
          <img css={MOBILEIMG} src={rocketVertical} alt="" />
          <div css={mobileCenterBottom} />
        </div>
        <div className="right"></div>
      </div>
    </main>
  );
};

export default MAP;
