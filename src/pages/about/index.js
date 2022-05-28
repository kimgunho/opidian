/** @jsxImportSource @emotion/react */
import { useState, useRef } from "react";

import { post } from "./constats";
import { wrapper, titleArea, csArea, title, list, post1, A1, dimmed } from "./style";
const About = () => {
  const [indexActive, setIndexActive] = useState("");
  const liRef = useRef([]);

  return (
    <main css={wrapper}>
      <section css={titleArea}>
        <h2 css={title}>
          ABOUT
          <br />
          US
        </h2>
      </section>
      <section css={csArea}>
        <ul css={list}>
          {post.map((item, index) => {
            return (
              <li
                ref={el => (liRef.current[index] = el)}
                key={index}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                onClick={() => setIndexActive(index)}
                className={index === indexActive ? "active" : ""}
              >
                <p className="q" css={post1(item.id)}>
                  {item.q}
                </p>
                <p className="a" css={A1(item.id)}>
                  {item.a}
                </p>
                <div
                  css={dimmed}
                  onClick={() => {
                    liRef.current.forEach(item => item.classList.remove("active"));
                  }}
                />
              </li>
            );
          })}
        </ul>

        <div></div>
      </section>
    </main>
  );
};

export default About;
