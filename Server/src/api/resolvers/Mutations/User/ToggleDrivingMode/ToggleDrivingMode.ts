import { ToggleDrivingModeResponse } from "./../../../../../types/graph.d";
import { Context } from "./../../../../../types/Context";
import AuthResolver from "../../../../../Utills/AuthResolver";

export const toggleDrivingMode = AuthResolver(
  async (
    _parent,
    _args,
    ctx: Context,
    _info
  ): Promise<ToggleDrivingModeResponse> => {
    const { isDriving } = ctx.request.user;

    try {
      await ctx.prisma.mutation.updateUser({
        where: { id: ctx.request.userId },
        data: {
          isDriving: !isDriving
        }
      });

      return {
        ok: true,
        error: null
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message
      };
    }
  }
);
