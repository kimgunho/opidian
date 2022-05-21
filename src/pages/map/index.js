/** @jsxImportSource @emotion/react */

import { wrapper, title, sections, mainModel, list } from "./style";
const MAP = () => {
  return (
    <main css={wrapper}>
      <h2 css={title}>MAP</h2>
      <div css={mainModel}>
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
        <div></div>
      </div>

      <div css={sections}>
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </main>
  );
};

export default MAP;
