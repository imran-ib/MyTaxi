import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

const endpoint = `http://localhost:4444`;
const prodEndpoint = "";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    request: operation => {
      //like a middleware that passes credentials and headers to all requests
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}
export default withApollo(createClient);
