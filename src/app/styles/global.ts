import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    display: flex; // Use flexbox
    align-items: center; // Center vertically
    justify-content: center; // Center horizontally
    min-height: 100vh; // Full viewport height
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
