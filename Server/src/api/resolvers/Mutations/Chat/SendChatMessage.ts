import { Context } from "graphql-yoga/dist/types";
import {
  MutationSendChatMessageArgs,
  SendChatMessageResponse,
  User
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/AuthResolver";

export const sendChatMessage = AuthResolver(
  async (
    _parent,
    args: MutationSendChatMessageArgs,
    ctx: Context,
    _info
  ): Promise<SendChatMessageResponse> => {
    const user: User = ctx.request.user;

    try {
      const Chat = await ctx.prisma.query.chat(
        { where: { id: args.chatId } },
        `{id chatAsDriver{id} ChatAsPassenger{id}}`
      );
      const PassengerId: string = Chat.ChatAsPassenger.id;
      const DriverId: string = Chat.chatAsDriver.id;

      if (PassengerId === user.id || DriverId === user.id) {
        const NewMessage = await ctx.prisma.mutation.createChatMessage({
          data: {
            text: args.text,
            chat: { connect: { id: args.chatId } },
            user: { connect: { id: user.id } }
          }
        });
        return {
          ok: true,
          error: null,
          message: NewMessage
        };
      } else {
        return {
          ok: false,
          error: `You Are Not Part Of This Conversation`,
          message: null
        };
      }
    } catch (error) {
      return {
        ok: false,
        error: `Cannot Send Chat Message ${error.message}`,
        message: null
      };
    }
  }
);
