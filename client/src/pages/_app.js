import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import { GlobalStyle, theme } from "../styles/globals";

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
