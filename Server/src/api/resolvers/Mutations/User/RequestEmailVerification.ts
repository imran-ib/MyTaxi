import { Mails } from "../../../../Utills/SendMail";
import { ElevenDigitKey } from "../../../../Utills/GenCustomKey";
import { Varyfication } from "../../../../generated/prisma-client/index";

import { Context } from "../../../../types/Context";
import {
  RequestEmailVerificationResponse,
  MutationRequestEmailVerificationArgs
} from "../../../../types/graph";

export const requestEmailVerification = async (
  _parent: any,
  args: MutationRequestEmailVerificationArgs,
  ctx: Context,
  _info: any
): Promise<RequestEmailVerificationResponse> => {
  try {
    // find user with provided email
    const UserExists = await ctx.prisma.query.user({
      where: { email: args.email }
    });
    console.log("UserExists", UserExists);
    if (!UserExists) {
      return {
        ok: false,
        error: `No User Found With ${args.email} `
      };
    }
    // if User Has Already Verification Delete it
    const exitsVerification: Varyfication = await ctx.prisma.query.varyfication(
      {
        where: { payload: args.email }
      }
    );
    if (exitsVerification) {
      await ctx.prisma.mutation.deleteVaryfication({
        where: { payload: args.email }
      });
    }

    const VerificationKey = ElevenDigitKey;

    const NewVarification: Varyfication = await ctx.prisma.mutation.createVaryfication(
      {
        data: {
          payload: args.email,
          target: "EMAIL",
          key: VerificationKey,
          user: {
            connect: {
              id: ctx.request.userId
            }
          }
        }
      }
    );

    const user = await ctx.prisma.mutation.updateUser({
      where: { id: ctx.request.userId },
      data: {
        email: args.email,
        varyfication: {
          connect: {
            id: NewVarification.id
          }
        }
      }
    });

    // send Email
    Mails.sendWelcomeEmail(user, ctx, VerificationKey);

    return {
      ok: true,
      error: null
    };
  } catch (error) {
    return {
      ok: false,
      error: `Server Error Unable To send Code To phone ${error.message}`
    };
  }
};
