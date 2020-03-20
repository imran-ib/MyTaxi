import { GenUserToke } from "./../../../../Utills/GenerateJwt";
import { UpdateMyprofileResponse } from "../../../../types/graph";
import { Context } from "../../../../types/Context";
import { MutationUpdateMyprofileArgs } from "../../../../types/graph";
import AuthResolver from "../../../../Utills/AuthResolver";
import { Hash } from "../../../../Utills/HashPassword";

export const updateMyprofile = AuthResolver(
  async (
    _parent: any,
    args: MutationUpdateMyprofileArgs,
    ctx: Context,
    _info: any
  ): Promise<UpdateMyprofileResponse> => {
    try {
      let HashedPassword: string;
      if (args.password) {
        //hash password
        HashedPassword = await Hash(args.password);
      }

      const User = await ctx.prisma.mutation.updateUser({
        where: { id: ctx.request.userId },
        data: {
          ...args,
          password: HashedPassword,
          fullName: args.lastName
            ? args.firstName.toUpperCase() + " " + args.lastName.toUpperCase()
            : args.firstName.toUpperCase()
        }
      });
      const Token = GenUserToke(User.id);
      return {
        ok: true,
        error: null,
        token: Token
      };
    } catch (error) {
      return {
        ok: false,
        error: null
      };
    }
  }
);
