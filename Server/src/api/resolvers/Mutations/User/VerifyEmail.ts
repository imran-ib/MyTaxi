import { GenUserTokenwithCookies } from "../../../../Utills/GenerateJwt";
import { Context } from "../../../../types/Context";
import {
  MutationVerifyEmailArgs,
  VerifyEmailResponse
} from "../../../../types/graph";

export const verifyEmail = async (
  _parent: any,
  args: MutationVerifyEmailArgs,
  ctx: Context,
  info: any
): Promise<VerifyEmailResponse> => {
  try {
    //Find User With Phone key and use id

    const [Varyfication] = await ctx.prisma.query.varyfications(
      {
        where: {
          AND: [
            {
              payload: args.email
            },
            { key: args.key },
            { user: { id: ctx.request.userId } }
          ]
        }
      },
      info
    );

    if (!Varyfication) {
      return {
        ok: false,
        error: `Wrong Code `,
        token: null
      };
    }
    const user = await ctx.prisma.mutation.updateUser({
      where: { email: args.email },
      data: { varyfiedEmail: true }
    });
    // remove Verification

    await ctx.prisma.mutation.deleteVaryfication({
      where: {
        payload: args.email
      }
    });

    const Token = GenUserTokenwithCookies(user.id, ctx.response);

    //TODO Check if both email and passwords are verfied then update user to isVarified=true

    return {
      ok: true,
      error: null,
      token: "Token",
      user: null
    };
  } catch (error) {
    return {
      ok: false,
      error: `Server Error Unable To send Code To phone ${error.message}`,
      token: null,
      user: null
    };
  }
};
