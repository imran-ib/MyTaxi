import { Mails } from "./../../../../Utills/SendMail";
import { Context } from "graphql-yoga/dist/types";
import {
  MutationRequestResetArgs,
  RequestResetResponse
} from "../../../../types/graph";
import { resetPasswordToken } from "../../../../Utills/GenCryptoToken";

export const requestReset = async (
  _parent: any,
  args: MutationRequestResetArgs,
  ctx: Context,
  info: any
): Promise<RequestResetResponse> => {
  //TODO Check The Flow
  try {
    // check if there is user registred with that email
    const user = await ctx.prisma.query.user({
      where: { email: args.email }
    });
    if (!user) {
      return {
        ok: false,
        error: "No User Found With that Email Address",
        message: "Please check your Email Or Create New Account"
      };
    }
    // generate Token
    const token = resetPasswordToken();
    // const resetPasswordExpires = new Date().getTime() + 1000 * 60 * 60 * 5; // 5 hours
    const resetPasswordExpires = Date.now() + 1800000; // half an hour
    const updatedUser = await ctx.prisma.mutation.updateUser({
      where: { email: args.email },
      data: {
        resetToken: token,
        resetTokenExpiry: resetPasswordExpires
      }
    });

    // Send Email
    Mails.sendForgetPassword(token, user, ctx);

    return {
      ok: true,
      error: null,
      message: "Reset Token is Generated and sent to your email address"
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
      message: ""
    };
  }
};
