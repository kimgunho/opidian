/** @jsxImportSource @emotion/react */
import { container, nav, menu, position } from "./style";
import { Link } from "react-router-dom";

const Place = () => {
  return (
    <main css={container}>
      <div />
      <nav css={nav}>
        <ul>
          <li css={position(1, 2)}>
            <a href="" target={"_blank"}>
              <span css={menu("LAUNCH PAD")}>LAUNCH PAD</span>
            </a>
          </li>
          <li>
            <Link to="">
              <span css={menu("MAP")}>MAP</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span css={menu("OPD LAB")}>OPD LAB</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span css={menu("ABOUT US")}>ABOUT US</span>
            </Link>
          </li>
          <li>
            <a href="" target={"_blank"}>
              <span css={menu("DAO")}>DAO</span>
            </a>
          </li>
          <li>
            <Link to="">
              <span css={menu("OPD ACCESS NFT")}>OPD ACCESS NFT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Place;
