import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloLink, concat, Operation, split } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { toast } from "react-toastify";

// endpoints
const endpoint = `http://localhost:4444`;
const prodEndpoint = `https://imran-ebazar-server.herokuapp.com`;

const cache = new InMemoryCache();

function createClient({ headers }) {
  return new ApolloClient({
    uri: `http://localhost:4444`,
    request: operation => {
      //like a middleware that passes credentials and headers to all requests
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers: {
          ...headers,
          "X-JWT": headers ? headers.cookie : undefined
        }
      });
    }
  });
}

export default withApollo(createClient);
