import { createGlobalStyle } from "styled-components"
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.palette.background.default};
  }

  html, body {
      display: flex;
      min-height: 100vh;
      width: 100%;
  }
`
export default GlobalStyle;