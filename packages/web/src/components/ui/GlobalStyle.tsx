import { css, Theme } from "@emotion/react";
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

const GlobalStyle = (theme: Theme) => css`
  html {
    color: ${theme.text1};
    background-color: ${theme.bg1} !important;
    font-family: "Roboto", sans-serif;

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overscroll-behavior: smoth;
    
  }

  #__next {
    height: 100%;
  }

`;

export default function GlobalStyles() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <CssBaseline />
    </>
  );
}
