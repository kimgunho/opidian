/** @jsxImportSource @emotion/react */
import { container, nav, menu, position, hoverButton } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import Arrow from "./components/arrow";

const Place = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <main css={container(isHover)}>
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
            <Link to="/">
              <span css={menu("MAP")}>MAP</span>
            </Link>
          </li>
          <li
            css={position("40%", "30%")}
            onMouseEnter={() => {
              setIsHover(true);
            }}
            onMouseLeave={() => {
              setIsHover(false);
            }}
          >
            <Link to="/">
              <span css={menu("OPD LAB")}>OPD LAB</span>
            </Link>
          </li>
          <li css={position("auto", "0%", "0%")}>
            <Link to="/">
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
          <li css={[position("auto", "100%", "0%"), hoverButton]}>
            <Link to="/">
              <span css={menu("OPD ACCESS NFT")}>OPD ACCESS NFT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Place;
