import { User } from "./generated/prisma";
import { DecaodeJWT } from "./Utills/GenerateJwt";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import helmet from "helmet";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import createServer from "./server";
import prisma from "./db";

const server = createServer();

server.express.use(cookieParser());
server.express.use(helmet());
server.express.use(cors());
server.express.use(logger("dev"));

// Get the Token From Header
server.express.use((req, res, next) => {
  const Token = req.get("x-jwt");
  // const { Token } = req.cookies;
  if (Token) {
    const DecodedToken: any = jwt.verify(Token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    const userId = DecodedToken.userId;
    req.userId = userId;
  }
  next();
});

server.express.use(
  async (req, res, next): Promise<User | undefined | void> => {
    // if they aren't logged in, skip this
    if (!req.userId) return next();
    const user: User = await prisma.query.user({ where: { id: req.userId } });
    req.user = user;

    next();
  }
);

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    },
    // in order to know which user is logedin in subscription
    subscriptions: {
      path: "/subscriptions",
      onConnect: async connectionPrams => {
        const Token = connectionPrams["X-JWT"];
        if (Token) {
          const User = await DecaodeJWT(Token);
          if (User) {
            const userId = User.userId;
            const user = await prisma.query.user({ where: { id: userId } });
            return {
              currentUser: user
            };
          }
        }
        throw new Error("ACCESS DENIED,  AUTHORISATION FAILED");
      }
    }
  },

  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
