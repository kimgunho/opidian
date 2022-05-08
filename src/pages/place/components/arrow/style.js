import { css } from "@emotion/react";
import arrow_right_01 from "../../../../assets/images/place/arrow_right_01.png";
import arrow_left_01 from "../../../../assets/images/place/arrow_left_01.png";

export const arrow = way => css`
  width: 6rem;
  height: 3rem;
  background-image: url(${way === "left" ? arrow_left_01 : arrow_right_01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${way === "left" ? `margin-right:2rem` : `margin-left:2rem`};
`;
