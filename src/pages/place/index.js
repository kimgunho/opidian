/** @jsxImportSource @emotion/react */
import { container, nav, menu, position, hoverButton, background_update } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import Arrow from "./components/arrow";

const Place = () => {
  const [isHover, setIsHover] = useState("default");

  return (
    <main css={container}>
      <nav css={nav}>
        <ul>
          <li css={position("0%", "0%")}>
            <Arrow way="left" />
            <a href="/" target={"_blank"}>
              <span css={menu("LAUNCH PAD")}>LAUNCH PAD</span>
            </a>
          </li>
          <li css={position("0%", "40%")}>
            <Arrow way="left" />
            <Link to="/map">
              <span css={menu("MAP")}>MAP</span>
            </Link>
          </li>
          <li
            css={position("40%", "30%")}
            onMouseEnter={() => {
              setIsHover("hover");
            }}
            onMouseLeave={() => {
              setIsHover("default");
            }}
          >
            <Link to="/OPD_LAB">
              <span css={menu("OPD LAB")}>OPD LAB</span>
            </Link>
          </li>
          <li css={position("auto", "0%", "0%")}>
            <Link to="/about-us">
              <span css={menu("ABOUT US")}>ABOUT US</span>
            </Link>
            <Arrow way="right" />
          </li>
          <li css={position("auto", "20%", "0%")}>
            <a href="/" target={"_blank"}>
              <span css={menu("DAO")}>DAO</span>
            </a>
            <Arrow way="right" />
          </li>
          <li
            css={[position("auto", "100%", "0%"), hoverButton]}
            onMouseEnter={() => {
              setIsHover("lab");
            }}
            onMouseLeave={() => {
              setIsHover("default");
            }}
          >
            <Link to="/OPD_NFT">
              <span css={menu("OPD ACCESS NFT")}>OPD ACCESS NFT</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div css={background_update(isHover)} />
    </main>
  );
};

export default Place;
