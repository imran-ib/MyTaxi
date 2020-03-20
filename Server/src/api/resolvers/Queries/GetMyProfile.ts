import AuthResolver from "../../../Utills/AuthResolver";
import { Context } from "./../../../types/Context";
import {
  GetMyProfileResponse,
  MutationLoginUserArgs
} from "./../../../types/graph.d";

export const getMyProfile = AuthResolver(
  async (
    _parent: any,
    _args: MutationLoginUserArgs,
    ctx: Context,
    _info: any
  ): Promise<GetMyProfileResponse> => {
    const user = ctx.request.user;

    return {
      ok: true,
      error: null,
      user
    };
  }
);
