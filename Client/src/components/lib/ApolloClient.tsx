import { useState, useEffect } from "react";
import { ApolloClient } from "apollo-client";
import { split, ApolloLink, concat } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import withApollo from "next-with-apollo";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { WebSocketLink } from "apollo-link-ws";
import Cookies from "js-cookie";
import cookie from "cookie";

/**
 * Configuration
 */

export const SERVER = "http://localhost:4444/";
export const WEB_SOCKET_LINK = "ws://localhost:4444/subscriptions";

export default withApollo(props => {
  function paraseCookie(ctx) {
    return cookie.parse(
      ctx && ctx.req
        ? ctx.req.headers.cookie
          ? ctx.req.headers.cookie
          : ""
        : document.cookie
    );
  }

  interface Definintion {
    kind: string;
    operation?: string;
  }

  const httpLink = new HttpLink({
    fetch,
    uri: SERVER
  });

  let { Token } = paraseCookie(props.ctx);
  console.log("Token", Token);
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        "X-JWT": paraseCookie(props.ctx)
      },

      fetchOptions: {
        credentials: "include"
      }
    });
    // Add onto payload for WebSocket authentication
    (operation as any & {
      Token: string | undefined;
    }).Token = Token;

    return forward(operation);
  });

  const webSocketLink: any = process.browser
    ? new WebSocketLink({
        uri: WEB_SOCKET_LINK,
        options: {
          reconnect: true,
          connectionParams: {
            "X-JWT": paraseCookie(props.ctx)
          }
        }
      })
    : null;

  const link = process.browser
    ? split(
        ({ query }) => {
          const { kind, operation }: Definintion = getMainDefinition(query);
          return kind === "OperationDefinition" && operation === "subscription";
        },
        webSocketLink,
        httpLink
      )
    : httpLink;

  // Token = props.ctx.req.headers.cookie;

  return new ApolloClient({
    link: concat(authMiddleware, link),
    cache: new InMemoryCache()
  });
});
