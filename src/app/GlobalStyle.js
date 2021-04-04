import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body,
  #root {
    background: #202124;
  }
  #root {
    width: 100%;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex: 1;
    justify-content: center;
  }
`;
