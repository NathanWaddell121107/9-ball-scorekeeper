import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  html, body, #__next {
    font-weight: 400;
    height: 100%;
    margin: 0;
    font-family: '"Mukta Vaani", sans-serif',
  }
  
  a,
  a:hover,  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

Reset.displayName = "Reset";

export default Reset;
