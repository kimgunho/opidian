import { keyframes } from "@emotion/react";
import card_border_01 from "../images/home/card_border_01.png";
import card_border_02 from "../images/home/card_border_02.png";
import card_border_03 from "../images/home/card_border_03.png";
import card_border_04 from "../images/home/card_border_04.png";
import arrow_right_01 from "../images/place/arrow_right_01.png";
import arrow_left_01 from "../images/place/arrow_left_01.png";
import arrow_right_02 from "../images/place/arrow_right_02.png";
import arrow_left_02 from "../images/place/arrow_left_02.png";
import arrow_right_03 from "../images/place/arrow_right_03.png";
import arrow_left_03 from "../images/place/arrow_left_03.png";
import arrow_right_04 from "../images/place/arrow_right_04.png";
import arrow_left_04 from "../images/place/arrow_left_04.png";

export const imageShowHide = keyframes`
0%{
    background-image: url(${card_border_01});
}
25%{
    background-image: url(${card_border_02});
}
50%{
    background-image: url(${card_border_03});
}
75%{
    background-image: url(${card_border_04});
}
100%{
    background-image: url(${card_border_01});
}
`;

export const showHide = keyframes`
0%{
    opacity: 0;
}
50%{
    opacity: 1;
}
100%{
    opacity: 0;
}
`;

export const showHideRandom = keyframes`
0%{
    opacity: 0;
}
1%{
    opacity:.3;
}
2%{
    opacity: 0;
}
3%{
    opacity: .2;
}
4%{
    opacity: 0;
}
60%{
    opacity:.2;
}
70%{
    opacity: 0;
}
71%{
    opacity: .2;
}
75%{
    opacity: 0;
}
100%{
    opacity: .2;
}
`;

export const fadeUp = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: .3;
}
`;

export const arrowActive = way => keyframes`
0%{
    background-image: url(${way === "left" ? arrow_left_01 : arrow_right_01});
}
25%{
    background-image: url(${way === "left" ? arrow_left_02 : arrow_right_02});
}
50%{
    background-image: url(${way === "left" ? arrow_left_03 : arrow_right_03});
}
75%{
    background-image: url(${way === "left" ? arrow_left_04 : arrow_right_04});
}
`;

export const zoomDownBlur = keyframes`
0%{
    transform: scale(2);
    filter: blur(100px);
}
100%{
    transform: scale(1);    
    filter: blur(0);
}
`;

export const zoomUpBlur = keyframes`
0%{
    transform: scale(1);
    filter: blur(0);
}
100%{
    transform: scale(2);    
    filter: blur(100px);
}
`;
