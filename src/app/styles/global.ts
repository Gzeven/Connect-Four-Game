import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

   /* CSS Reset */
   *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; 
    scroll-behavior: smooth; 
  }

  body {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    color: ${({ theme }) => theme.colors.black}; 
    /* line-height: 1.6;  */
    overflow-x: hidden; 
    min-height: 100vh; 

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    color: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: bold;
  }

  /* Accessibility focus outline */
  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.purple};
    outline-offset: 2px;
  }
`;
