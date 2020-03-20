import { ElevenDigitKey } from "../../../../Utills/GenCustomKey";
import { Mails } from "../../../../Utills/SendMail";
import { Context } from "graphql-yoga/dist/types";
import validateEmail from "../../../../Utills/ValidateEmail";
import { GenUserToke } from "../../../../Utills/GenerateJwt";
import { Hash } from "../../../../Utills/HashPassword";
import {
  User,
  MutationCreateUserArgs,
  CreateUserResponse
} from "../../../../types/graph";

export const createUser = async (
  _parent,
  args: MutationCreateUserArgs,
  ctx: Context,
  info: any
): Promise<CreateUserResponse> => {
  // TODO Sent Verification Email
  try {
    let email = args.email;
    if (!email) {
      return {
        ok: false,
        error: "You Must Provide Email Address",
        token: null,
        user: null
      };
    }
    // check if email is valid
    email = args.email.toLowerCase();
    // lowercase email
    const ValidEmail: Boolean = validateEmail(email);

    if (!ValidEmail) {
      return {
        ok: false,
        error: `The Email Address ${email} is Not Valid`,
        token: null,
        user: null
      };
    }

    // check if password is valid
    if (args.password.length < 4) {
      return {
        ok: false,
        error: `Password is Too Short`,
        token: null,
        user: null
      };
    }

    // check if user already registerd
    const alreadyExist: User = await ctx.prisma.query.user({
      where: {
        email: email
      }
    });

    if (alreadyExist) {
      return {
        ok: false,
        error: `User With ${alreadyExist.email} Already Exists`,
        token: null,
        user: null
      };
    }

    // hash

    // const hashedPassword: string = await bcrypt.hash(args.password, 10);
    const hashedPassword: string = await Hash(args.password);
    // create new user
    // Create Verification key

    const NewUser: User = await ctx.prisma.mutation.createUser({
      data: {
        ...args,
        email: email,
        password: hashedPassword,
        fullName: args.lastName
          ? args.firstName.toUpperCase() + " " + args.lastName.toUpperCase()
          : args.firstName.toUpperCase()
        // TODO Update User ROle
        // permissions: {
        //   set: email === "imran.ib@live.com" ? ["ADMIN"] : ["USER"]
        // }
      }
    });
    // genrate Token
    const Token: string = GenUserToke(NewUser.id);
    //log the user in
    return {
      ok: true,
      error: null,
      token: Token,
      user: NewUser
    };
  } catch (error) {
    return {
      ok: false,
      error: `Unable To Create User Because ${error.message}`,
      token: null,
      user: null
    };
  }
};
