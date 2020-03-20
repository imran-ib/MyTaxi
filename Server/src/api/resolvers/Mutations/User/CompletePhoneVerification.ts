import { GenUserToke } from "../../../../Utills/GenerateJwt";
import { Context } from "../../../../types/Context";
import {
  CompletePhoneVericationResponse,
  MutationCompletePhoneVerificationArgs
} from "../../../../types/graph";
import AuthResolver from "../../../../Utills/AuthResolver";

export const CompletePhoneVerification = AuthResolver(
  async (
    _parent: any,
    args: MutationCompletePhoneVerificationArgs,
    ctx: Context,
    info: any
  ): Promise<CompletePhoneVericationResponse> => {
    try {
      //Find verification With Phone key and use id
      const [Varyfication] = await ctx.prisma.query.varyfications(
        {
          where: {
            AND: [
              {
                payload: args.phone
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
          error: `Provided Verification Code is Not Correct `,
          token: null
        };
      }
      const user = await ctx.prisma.mutation.updateUser({
        where: { phone: args.phone },
        data: { varyfiedPhone: true }
      });
      // remove Verification

      await ctx.prisma.mutation.deleteVaryfication({
        where: {
          payload: args.phone
        }
      });

      const Token: string = GenUserToke(user.id);

      return {
        ok: true,
        error: null,
        token: Token
      };
    } catch (error) {
      return {
        ok: false,
        error: `Server Error Unable To Complete The Action because ${error.message}`,
        token: null
      };
    }
  }
);
