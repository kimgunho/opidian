import { keyframes } from "@emotion/react";
import { blue, pink } from "./common";
import card_border_01 from "../images/home/card_border_01.png";
import card_border_02 from "../images/home/card_border_02.png";
import card_border_03 from "../images/home/card_border_03.png";
import card_border_04 from "../images/home/card_border_04.png";

export const twinklingBox = keyframes`
  from, 20%, 53%, 80%, to {
    box-shadow: 0px 0px 20px #8cfde959, inset 0 0 30px #8cfde959;
    border: 1px solid #fff;
  }

  40%, 43% {
    box-shadow: 0px 0px 10px #8cfde959, inset 0 0 20px #8cfde959;
    border: 1px solid #8cfde959;    
  }

  70% {
    box-shadow: 0px 0px 35px #8cfde959, inset 0 0 40px #8cfde959;
    border: 1px solid #fff;    
  }

  90% {
    box-shadow: 0px 0px 20px #8cfde959, inset 0 0 30px #8cfde959;
    border: 1px solid #8cfde959;    
  }
`;

export const twinklingColor = keyframes`
 from, 20%, 53%, 80%, to {
     color:#fff;
  }

  40%, 43% {
    color:${blue};      
  }

  70% {
    color:#fff;      
  }

  90% {
    color:${pink};      
  }
`;

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
    opacity: .4;
}
4%{
    opacity: 0;
}
60%{
    opacity:.5;
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
    opacity: .5;
}
`;
