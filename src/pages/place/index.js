/** @jsxImportSource @emotion/react */
import { UseUserModal } from "../../context/modalContext";

import {
  container,
  nav,
  menu,
  position,
  hoverButton,
  background_update,
  containerMobile,
  navMobile,
} from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import Arrow from "./components/arrow";

const Place = () => {
  const [isHover, setIsHover] = useState("default");
  const { setModalActive } = UseUserModal();

  const showAlertModal = e => {
    e.preventDefault();
    setModalActive(true);
  };
  return (
    <>
      <main css={container}>
        <nav css={nav}>
          <ul>
            <li css={position("0%", "0%")}>
              <Arrow way="left" />
              <a href="/" target={"_blank"} onClick={showAlertModal}>
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
              <a href="/" target={"_blank"} onClick={showAlertModal}>
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
      <main css={containerMobile}>
        <ul css={navMobile}>
          <li>
            <a href="/" target={"_blank"}>
              <span css={menu("LAUNCH PAD")}>LAUNCH PAD</span>
            </a>
          </li>
          <li>
            <Link to="/map">
              <span css={menu("MAP")}>MAP</span>
            </Link>
          </li>
          <li>
            <Link to="/OPD_LAB">
              <span css={menu("OPD LAB")}>OPD LAB</span>
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <span css={menu("ABOUT US")}>ABOUT US</span>
            </Link>
          </li>
          <li>
            <a href="/" target={"_blank"}>
              <span css={menu("DAO")}>DAO</span>
            </a>
          </li>
          <li>
            <Link to="/OPD_NFT">
              <span css={menu("OPD ACCESS NFT")}>OPD ACCESS NFT</span>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Place;
