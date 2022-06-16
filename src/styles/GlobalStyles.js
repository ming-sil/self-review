import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const mainStyle = {
  titleSize: "26px",
  titleColor: "white",
  descSize: "16px",
  descColor: "white",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}

img{
    width: 100%;
}

a{
    text-decoration: none;
    color: white;
}
`;
