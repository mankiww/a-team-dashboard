import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    position: relative;
    font-family: "Noto Sans KR";
  }

  button {
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  #menu {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default GlobalStyle;
