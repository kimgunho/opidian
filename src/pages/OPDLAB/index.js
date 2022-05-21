/** @jsxImportSource @emotion/react */
import { useState } from "react";

import background_red from "../../assets/images/OPD_LAB/background_red.jpg";
import background_blue from "../../assets/images/OPD_LAB/background_blue.jpg";
import background_yello from "../../assets/images/OPD_LAB/background_yello.jpg";

import { wrapper, background, hover_background, labNav, infoCSS, menuTitle } from "./style";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const onMouseLeave = () => {
    setSelectBg(null);
  };

  const handleShowInfo = number => {
    setActiveIndex(number);
    setIsActive(true);
  };

  return (
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
  );
};

export default OPDLAB;
