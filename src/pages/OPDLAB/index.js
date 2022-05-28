/** @jsxImportSource @emotion/react */
import { useState } from "react";

import background_red from "../../assets/images/OPD_LAB/background_red.jpg";
import background_blue from "../../assets/images/OPD_LAB/background_blue.jpg";
import background_yello from "../../assets/images/OPD_LAB/background_yello.jpg";
import boxRed from "../../assets/images/OPD_LAB/object_red.png";
import boxBlue from "../../assets/images/OPD_LAB/object_blue.png";
import boxYellow from "../../assets/images/OPD_LAB/object_yellow.png";
import boxRedActive from "../../assets/images/OPD_LAB/object_red_active.png";
import boxBlueActive from "../../assets/images/OPD_LAB/object_blue_active.png";
import boxYellowActive from "../../assets/images/OPD_LAB/object_yellow_active.png";

import {
  wrapper,
  background,
  hover_background,
  labNav,
  infoCSS,
  menuTitle,
  active,
  wrapperMobile,
  navMobile,
  menu,
  centerNav,
  infoMobileCSS,
  upY,
} from "./style";

const OPDLAB = () => {
  const data = [
    {
      title: "LAUNCH PAD",
      desc: "LAUNCH PAD LAUNCH PAD LAUNCH PAD LAUNCH PAD LAUNCH PAD LAUNCH PADLAUNCH PAD LAUNCH PAD LAUNCH PADLAUNCH PAD LAUNCH PAD LAUNCH PADLAUNCH PAD LAUNCH PAD LAUNCH PADLAUNCH PAD LAUNCH PAD LAUNCH PADLAUNCH PAD LAUNCH PAD LAUNCH PADLAUNCH PAD LAUNCH PAD LAUNCH PADLAUNCH PAD",
      moreLink: "/",
    },
    {
      title: "NFT",
      desc: "NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT NFT ",
      moreLink: "/OPD_NFT",
    },
    {
      title: "DAO",
      desc: "DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO DAO ",
      moreLink: "/",
    },
  ];
  const [selectBg, setSelectBg] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isActiveM, setIsActiveM] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClickObj, setIsClickObj] = useState({ red: false, blue: false, yellow: false });

  const onMouseLeave = () => {
    setSelectBg(null);
  };

  const handleShowInfo = number => {
    setActiveIndex(number);
    setIsActive(true);
  };

  // const handleMobileNavIsActive = () => {};

  const handleIsClickObj = box => {
    if (box === "red") {
      setIsClickObj({ red: true, blue: false, yellow: false });
    }
    if (box === "blue") {
      setIsClickObj({ red: false, blue: true, yellow: false });
    }
    if (box === "yellow") {
      setIsClickObj({ red: false, blue: false, yellow: true });
    }
    if (box === "all") {
      setIsClickObj({ red: false, blue: false, yellow: false });
    }
  };
  return (
    <>
      <main css={wrapper}>
        <ul css={labNav}>
          <li
            onMouseEnter={() => {
              setSelectBg(background_red);
            }}
            onMouseLeave={onMouseLeave}
            onClick={() => {
              handleShowInfo(0);
            }}
            css={active(isActive)}
          >
            <span css={menuTitle("LAUNCH PAD")}>LAUNCH PAD</span>
          </li>
          <li
            onMouseEnter={() => {
              setSelectBg(background_blue);
            }}
            onMouseLeave={onMouseLeave}
            onClick={() => {
              handleShowInfo(1);
            }}
            css={active(isActive)}
          >
            <span css={menuTitle("NFT")}>NFT</span>
          </li>
          <li
            onMouseEnter={() => {
              setSelectBg(background_yello);
            }}
            onMouseLeave={onMouseLeave}
            onClick={() => {
              handleShowInfo(2);
            }}
            css={active(isActive)}
          >
            <span css={menuTitle("DAO")}>DAO</span>
          </li>
        </ul>
        <div css={infoCSS(isActive)}>
          <h3>{data[activeIndex].title}</h3>
          <p>{data[activeIndex].desc}</p>
          <a href={data[activeIndex].moreLink}>LEARN MORE &gt;</a>
          <button
            type="button"
            onClick={() => {
              setIsActive(false);
            }}
          >
            X
          </button>
        </div>
        <div css={hover_background} style={{ backgroundImage: `url(${selectBg})` }} />
        <div css={background}></div>
      </main>
      <main css={wrapperMobile}>
        <ul css={centerNav}>
          <li css={upY(isClickObj.red)}>
            <img src={isClickObj.red ? boxRedActive : boxRed} alt="" />
          </li>
          <li css={upY(isClickObj.blue)}>
            <img src={isClickObj.blue ? boxBlueActive : boxBlue} alt="" />
          </li>
          <li css={upY(isClickObj.yellow)}>
            <img src={isClickObj.yellow ? boxYellowActive : boxYellow} alt="" />
          </li>
        </ul>
        <ul css={navMobile(isActiveM)}>
          <li
            onClick={() => {
              handleIsClickObj("red");
              setIsActiveM(false);
            }}
          >
            <span css={menu("LAUNCH PAD")}>LAUNCH PAD</span>
          </li>
          <li
            onClick={() => {
              handleIsClickObj("blue");
              setIsActiveM(false);
            }}
          >
            <span css={menu("NFT")}>NFT</span>
          </li>
          <li
            onClick={() => {
              handleIsClickObj("yellow");
              setIsActiveM(false);
            }}
          >
            <span css={menu("DAO")}>DAO</span>
          </li>
        </ul>
        {isClickObj.red && (
          <div css={infoMobileCSS}>
            <h3>{data[0].title}</h3>
            <p>{data[0].desc}</p>
            <a href={data[0].moreLink}>LEARN MORE &gt;</a>
            <button
              type="button"
              onClick={() => {
                handleIsClickObj("all");
                setIsActiveM(true);
              }}
            >
              X
            </button>
          </div>
        )}
        {isClickObj.blue && (
          <div css={infoMobileCSS}>
            <h3>{data[1].title}</h3>
            <p>{data[1].desc}</p>
            <a href={data[1].moreLink}>LEARN MORE &gt;</a>
            <button
              type="button"
              onClick={() => {
                handleIsClickObj("all");
                setIsActiveM(true);
              }}
            >
              X
            </button>
          </div>
        )}
        {isClickObj.yellow && (
          <div css={infoMobileCSS}>
            <h3>{data[2].title}</h3>
            <p>{data[2].desc}</p>
            <a href={data[2].moreLink}>LEARN MORE &gt;</a>
            <button
              type="button"
              onClick={() => {
                handleIsClickObj("all");
                setIsActiveM(true);
              }}
            >
              X
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default OPDLAB;
