import React from "react";
import App from "next/app";
import GlobalStyle from "../components/GlobalStyle";
import "../firebase";
import Store from "../components/useStore";

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Store>
        <Component {...pageProps} />
        <GlobalStyle />
      </Store>
    );
  }
}
