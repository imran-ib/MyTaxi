import * as React from "react";
import App from "next/app";
import Head from "next/head";
import withApollo from "../src/components/lib/apollo/apollo";

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>MyTaxi</title>
        </title>
        <Component {...pageProps} />
      </>
    );
  }
}

export default withApollo(MyApp);
