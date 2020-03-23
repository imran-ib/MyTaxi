import { User } from "./generated/prisma";
import { DecaodeJWT } from "./Utills/GenerateJwt";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import helmet from "helmet";
import logger from "morgan";
import cookieParser from "cookie-parser";
import createServer from "./server";
import prisma from "./db";

const server = createServer();

server.express.use(cookieParser());
server.express.use(helmet());
server.express.use(logger("dev"));

server.express.use(
  async (req, res, next): Promise<User | undefined | void> => {
    // const Token = req.get("X-JWT");
    const { Token } = req.cookies;
    if (!Token) return next();
    if (Token) {
      const UserId = await DecaodeJWT(Token);
      if (!UserId) return next();

      const user: User = await prisma.query.user({
        where: { id: UserId.userId }
      });

      req.userId = UserId;
      req.user = user;
    }
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
        console.log("connectionPrams", connectionPrams);
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
