/** @jsxImportSource @emotion/react */
import { container, nav, menu, position, hoverProp, hoverButton } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import Arrow from "./components/arrow";

const Place = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <main css={container(isHover)}>
      <nav css={nav}>
        <ul>
          <li css={[position("12%", "20%"), hoverProp("left")]}>
            <Arrow way="left" />
            <a href="/" target={"_blank"}>
              <span css={menu("LAUNCH PAD")}>LAUNCH PAD</span>
            </a>
          </li>
          <li css={[position("12%", "50%"), hoverProp("left")]}>
            <Arrow way="left" />
            <Link to="/">
              <span css={menu("MAP")}>MAP</span>
            </Link>
          </li>
          <li
            css={position("50%", "50%")}
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
          <li css={[position("auto", "20%", "15%"), hoverProp("right")]}>
            <Link to="/">
              <span css={menu("ABOUT US")}>ABOUT US</span>
            </Link>
            <Arrow way="right" />
          </li>
          <li css={[position("auto", "35%", "15%"), hoverProp("right")]}>
            <a href="/" target={"_blank"}>
              <span css={menu("DAO")}>DAO</span>
            </a>
            <Arrow way="right" />
          </li>
          <li css={[position("auto", "80%", "15%"), hoverButton]}>
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
