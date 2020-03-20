import { GraphQLServer } from "graphql-yoga";
import db from "./db";
// import schema from "./schema";
import { Query } from "./api/resolvers/Query";
import { Mutation } from "./api/resolvers/Mutations";
import { Subscription } from "./api/resolvers/Subscriptions";

function CreateServer() {
  const server = new GraphQLServer({
    typeDefs: __dirname + "/api/schema.graphql",
    resolvers: {
      Query,
      Mutation,
      Subscription
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => {
      const { connection: { context = null } = {} } = req;
      return {
        ...req,
        prisma: db,
        context
      };
    }
  });
  return server;
}

export default CreateServer;
