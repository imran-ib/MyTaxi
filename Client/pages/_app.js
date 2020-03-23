import React from "react";
import App from "next/app";
import { ApolloProvider } from "react-apollo";
import cookie from "cookie";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, concat, Operation, split } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { WebSocketLink } from "apollo-link-ws";
import * as ws from "ws";
import { getMainDefinition } from "apollo-utilities";
import { toast } from "react-toastify";
const isDev = process.env.NODE_ENV === "development";
import withApollo from "next-with-apollo";
import Cookies from "js-cookie";

const parseCookies = (ctx, options) => {
  const result = cookie.parse(
    ctx ? ctx.req.headers.cookie || "" : document.cookie,

    options
  );
  const { Token } = result;
  if (typeof window !== "undefined") {
    console.log(typeof window);
    return localStorage.setItem("Tokne", Token);
  }
};

let MyToken = "";
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    fetchOptions: {
      credentials: "include"
    },
    headers: {
      "X-JWT": Cookies.get("Token")
    }
  });
  return forward(operation);
});

const httplink = new HttpLink({
  uri: isDev ? "http://localhost:4444/" : "https://nuberserver.now.sh/graphql"
});

const wsLink = process.browser
  ? new WebSocketLink({
      // if you instantiate in the server, the error will be thrown
      uri: isDev
        ? "ws://localhost:4444/subscriptions"
        : "ws://nuberserver.now.sh/subscriptions",
      options: {
        reconnect: true,
        connectionParams: {
          "X-JWT": Cookies.get("Token")
        }
      }
    })
  : null;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      toast.error(`Unexpected error: ${message}`);
    });
  }
  if (networkError) {
    toast.error(`Network error: ${networkError}`);
  }
});

const link = process.browser
  ? split(
      //only create the split in the browser
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      wsLink,
      httplink
    )
  : httplink;

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, concat(authMiddleware, link)])
});

class MyApp extends App {
  state = {
    token: MyToken
  };
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    let token = "";

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    parseCookies(ctx);

    pageProps.query = ctx.query;
    token = token;
    return { pageProps, token };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default MyApp;
