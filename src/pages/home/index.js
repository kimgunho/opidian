/** @jsxImportSource @emotion/react */
import {
  container,
  hide,
  card,
  title,
  button,
  buttonBorder,
  text,
  active,
  absoluteFill,
} from "./style";
import { useState } from "react";

const Home = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setIsClick(!isClick);
    onPage();
  };

  const onPage = () => {
    setTimeout(() => {
      console.log("go~");
    }, 3000);
  };

  return (
    <main css={container}>
      <h1 css={hide}>Opidian</h1>
      <article css={card} className={isClick && "active"}>
        <h2 css={[title, isClick && active]}>
          <span css={text(isClick ? "Welcome" : "Tag Your")}>
            {isClick ? "Welcome" : "Tag Your"}
          </span>
          <span css={text(isClick ? "OPIDIAN" : "Card to Enter")}>
            {isClick ? "OPIDIAN" : "Card to Enter"}
          </span>
        </h2>
        <div css={buttonBorder}>
          <a onClick={handleClick} href="/" css={button}>
            {isClick ? `SCUCESS` : "ENTER"}
          </a>
        </div>
      </article>
      <div css={absoluteFill} className={isClick && "active"} />
    </main>
  );
};

export default Home;
