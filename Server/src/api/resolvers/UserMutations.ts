import { Mails } from "./../../Utills/SendMail";
import { Context } from "graphql-yoga/dist/types";
import bcrypt from "bcryptjs";
import validateEmail from "../../Utills/ValidateEmail";
import { GenUserTokenwithCookies } from "../../Utills/GenerateJwt";
import { Hash } from "../../Utills/HashPassword";
import {
  resetPasswordToken,
  validateEmailToken
} from "../../Utills/GenCryptoToken";
import {
  User,
  MutationCreateUserArgs,
  MutationLoginUserArgs,
  MutationRequestResetArgs,
  MutationResetPasswordArgs,
  CreateUserResponse
} from "./../../types/graph.d";

export const logoutUser = async (_parent, _args, ctx: Context, _info: any) => {
  ctx.response.clearCookie("Token");
  return { message: "Goodbye!" };
};
export const requestReset = async (
  _parent,
  args: MutationRequestResetArgs,
  ctx: Context,
  info: any
) => {
  ctx.response.clearCookie("Token");

  // check if there is user registred with that email
  const user = await ctx.prisma.query.user({
    where: { email: args.email }
  });
  if (!user) throw new Error("No User Found With that Email Address");
  // generate Token
  const token = resetPasswordToken();
  // const resetPasswordExpires = new Date().getTime() + 1000 * 60 * 60 * 5; // 5 hours
  const resetPasswordExpires = Date.now() + 1800000; // half an hour
  const updatedUser = await ctx.prisma.mutation.updateUser(
    {
      where: { email: args.email },
      data: {
        resetToken: token,
        resetTokenExpiry: resetPasswordExpires
      }
    },
    info
  );
  // Send Email
  Mails.sendForgetPassword(token, user, ctx);

  return {
    message: "Reset Token is Generated and sent to your email address"
  };
};
export const resetPassword = async (
  _parent,
  args: MutationResetPasswordArgs,
  ctx: Context,
  info: any
) => {
  ctx.response.clearCookie("Token");

  // check if there is any token clear it
  if (!args.token) throw new Error("Where is Your Token ????");
  //check if token is valid
  const [user] = await ctx.prisma.query.users({
    where: {
      resetToken: args.token,
      resetTokenExpiry_gte: Date.now() - 1800000
    }
  });
  if (!user) throw new Error("Your Token is Either Invalid Or Expire");
  // check if password match

  if (args.password !== args.confirmPassword)
    throw new Error("Your Password Do Not Match");
  // hash password
  const hashedPassword = await Hash(args.password);
  // save new password
  // remove reset token and reset token expiry
  const updatedUser = await ctx.prisma.mutation.updateUser(
    {
      where: {
        id: user.id
      },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    },
    info
  );
  // log user in
  GenUserTokenwithCookies(updatedUser.id, ctx.response);
  return updatedUser;
};
