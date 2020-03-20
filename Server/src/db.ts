// import { Prisma } from './generated/prisma';
import { Prisma } from "prisma-binding";

const primsa: Prisma = new Prisma({
  // typeDefs: "src/api/generated/prisma.graphql",
  typeDefs: __dirname + "/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: false,
  secret: process.env.PRISMA_SECRET
});

export default primsa;
