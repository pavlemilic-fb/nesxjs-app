import { authSlice } from "@/api/auth";
import { wrapper } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import App from "next/app";

import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import { GlobalStyle, theme } from "../styles/globals";

App.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
  store.dispatch(authSlice.endpoints.getMe.initiate());

  await Promise.all(store.dispatch(authSlice.util.getRunningQueriesThunk()));

  const appProps = await App.getInitialProps(context);
  return { ...appProps };
});

export default function MyApp({ Component, pageProps }) {
  const store = wrapper.useStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
