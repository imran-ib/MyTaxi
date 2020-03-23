import { Context } from "graphql-yoga/dist/types";
import { GenUserTokenwithCookies } from "../../../../Utills/GenerateJwt";
import { ComparePassword } from "../../../../Utills/HashPassword";
import {
  MutationLoginUserArgs,
  LoginUserResponse
} from "../../../../types/graph";

export const loginUser = async (
  _parent,
  args: MutationLoginUserArgs,
  ctx: Context,
  _info: any
): Promise<LoginUserResponse> => {
  try {
    ctx.response.clearCookie("Token");
    // check if user is legit
    const user = await ctx.prisma.query.user({
      where: {
        email: args.email
      }
    });
    if (!user) {
      return {
        ok: false,
        error: `No User Rigistred with email ${args.email.toLowerCase()}`,
        token: null,
        user: null
      };
    }
    // Check if user is sigenedup with email
    if (user.fbId && !user.password) {
      return {
        ok: false,
        error: `Sorry!.  Trying logingin with FaceBook`
      };
    }

    // check if password is correct
    const validPassword = await ComparePassword(args.password, user.password);
    if (!validPassword) {
      return {
        ok: false,
        error: `Wrong Password`,
        token: null,
        user: null
      };
    }

    const Token = GenUserTokenwithCookies(user.id, ctx.response);

    if (user && validPassword) {
      return {
        ok: true,
        error: null,
        token: null,
        user: user
      };
    }
  } catch (error) {
    return {
      ok: false,
      error: `Unble To Login Because ${error.message}`,
      token: null,
      user: null
    };
  }
};
