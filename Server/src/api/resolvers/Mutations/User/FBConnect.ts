import { GenUserToke } from "../../../../Utills/GenerateJwt";
import { Context } from "../../../../types/Context";
import {
  MutationFbConnectArgs,
  FbConnectResponse
} from "../../../../types/graph";

export const FBConnect = async (
  _parent: any,
  args: MutationFbConnectArgs,
  ctx: Context,
  _info
): Promise<FbConnectResponse> => {
  try {
    // Check if user Already Exists
    const UserExists = await ctx.prisma.query.user({
      where: {
        fbId: args.fbId
      }
    });

    // if user Exists Log them in
    if (UserExists) {
      const UserExistsToken = GenUserToke(UserExists.id);
      return {
        ok: true,
        error: null,
        token: UserExistsToken,
        user: UserExists
      };
    }
    //Create New User
    const NewUser = await ctx.prisma.mutation.createUser({
      data: {
        ...args,
        avatar: `http://graph.facebook.com/${args.fbId}/picture?type=square`
      }
    });
    const NewUserToken = GenUserToke(NewUser.id);
    return {
      ok: true,
      error: null,
      token: NewUserToken,
      user: NewUser
    };
  } catch (error) {
    return {
      ok: false,
      error: `Unable To Authenticate Because ${error.message}`,
      token: null,
      user: null
    };
  }
};
