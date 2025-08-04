// src/styles/GlobalStyle.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f2f2f2;
    color: #333;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
