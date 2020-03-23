import { GenUserTokenwithCookies } from "./../../../../Utills/GenerateJwt";
import { Context } from "./../../../../types/Context";
import {
  MutationResetPasswordArgs,
  ResetPasswordResponse
} from "../../../../types/graph";
import AuthResolver from "../../../../Utills/AuthResolver";
import { Hash } from "../../../../Utills/HashPassword";

export const resetPassword = AuthResolver(
  async (
    _parent: any,
    args: MutationResetPasswordArgs,
    ctx: Context,
    info: any
  ): Promise<ResetPasswordResponse> => {
    try {
      // check if there is any token clear it
      if (!args.token) {
        return {
          ok: false,
          error: "Where is Your Token ????",
          token: null,
          successMessage: null
        };
      }

      //check if token is valid
      const [user] = await ctx.prisma.query.users({
        where: {
          resetToken: args.token,
          resetTokenExpiry_gte: Date.now() - 1800000
        }
      });
      if (!user) {
        return {
          ok: false,
          error: "Your Token is Either Invalid Or Expire",
          token: null,
          successMessage: null
        };
      }
      // check if password match

      if (args.password !== args.confirmPassword) {
        return {
          ok: false,
          error: "Your Password Do Not Match",
          token: null,
          successMessage: null
        };
      }
      // hash password
      const hashedPassword = await Hash(args.password);
      // save new password
      // remove reset token and reset token expiry
      const updatedUser = await ctx.prisma.mutation.updateUser({
        where: {
          id: user.id
        },
        data: {
          password: hashedPassword,
          resetToken: null,
          resetTokenExpiry: null
        }
      });
      // log user in
      const Token = GenUserTokenwithCookies(updatedUser.id, ctx.response);
      return {
        ok: true,
        error: null,
        token: "",
        successMessage: "Your New Password has been set"
      };
    } catch (error) {
      return {
        ok: false,
        error: "",
        token: null,
        successMessage: null
      };
    }
  }
);
