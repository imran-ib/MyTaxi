import {
  GetChatRoomResponse,
  QueryGetChatRoomArgs,
  User
} from "./../../../types/graph.d";
import { Context } from "./../../../types/Context";
import AuthResolver from "../../../Utills/AuthResolver";

export const getChatRoom = AuthResolver(
  async (
    _parent,
    args: QueryGetChatRoomArgs,
    ctx: Context,
    info
  ): Promise<GetChatRoomResponse> => {
    const user: User = ctx.request.user;
    try {
      const [chat] = await ctx.prisma.query.chats(
        {
          where: {
            AND: [
              { id: args.id },
              {
                OR: [
                  {
                    chatAsDriver: { id: user.id }
                  },
                  {
                    ChatAsPassenger: { id: user.id }
                  }
                ]
              }
            ]
          }
        },
        `{id message{id text} chatAsDriver{id fullName} ChatAsPassenger{id fullName}}`
      );
      console.log("chat", chat);
      return {
        ok: true,
        error: null,
        Chat: chat
      };
    } catch (error) {
      return {
        ok: false,
        error: `Unable To Get Chatroom ${error.message}`,
        Chat: null
      };
    }
  }
);
