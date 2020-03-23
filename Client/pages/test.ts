import React from "react";
import App from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../src/components/lib/apolloClient";
import cookie from "cookie";

function parseCookies(ctx, options = {}) {
  return cookie.parse(
    ctx ? ctx.req.headers.cookie || "" : document.cookie,
    options
  );
}

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { Token } = parseCookies(ctx);

    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
