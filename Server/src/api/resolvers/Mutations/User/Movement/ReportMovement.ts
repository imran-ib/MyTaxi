import { Context } from "./../../../../../types/Context";
import {
  MutationReportOrientationArgs,
  ReportOrientationResponse
} from "./../../../../../types/graph.d";
import AuthResolver from "../../../../../Utills/AuthResolver";

export const reportOrientation = AuthResolver(
  async (
    _parent,
    args: MutationReportOrientationArgs,
    ctx: Context,
    _info
  ): Promise<ReportOrientationResponse> => {
    try {
      const { user } = ctx.request;

      await ctx.prisma.mutation.updateUser({
        where: { id: user.id },
        data: {
          lastLat: args.lat,
          lastLng: args.lng,
          lastOrientation: args.orientation
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
