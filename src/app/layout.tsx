"use client";

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global'; // Import the global styles
import { theme } from './styles/theme'; // Your theme with the colors
import { Space_Grotesk } from "next/font/google";
import Head from './head';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // Ensures text is displayed with fallback font until the font is loaded
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <Head></Head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}