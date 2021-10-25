import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.default};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      /* opacity: 0.6; */
      color: ${({ theme }) => theme.palette.secondary.main}
    }
  }

`;
export default GlobalStyle;
