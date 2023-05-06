import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
   padding: 0;
   margin: 0;
  };
  body {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    margin: 0 !important;
    font-family: Roboto, sans-serif;
  };
  #__next {
    padding-top: 58px;
    height: calc(100vh - 58px);
  }
`;

export const theme = {
  colors: {
    white: "#fff",
    black: "#333",
    muted: "#777",
    link: "#09099c",
    error: "#ff3333",
    primary: "blue",
    secondary: "lightblue",
  },
};
