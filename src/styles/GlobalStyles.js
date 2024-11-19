import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #fc9c31;
    --primary-light: #fac435;
    --dark: #0a0a0a;
    --light: #ffffff;
    --lighttext: #070b10;
    --gray: #9e9e9e;
    --bg-dark: #111111;
    --card-bg: #1a1a1a;
    --gradient: linear-gradient(135deg, #fac435 0%, #fc9c31 100%);
    --gradientlight: linear-gradient(135deg, #efe9bc 0%, #efe9bc 100%);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--dark);
    color: var(--light);
    line-height: 1.6;
  }

  a {
    color: #fac435;
  }
  
  a:hover {
     color: #fc9c31
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }
`;
