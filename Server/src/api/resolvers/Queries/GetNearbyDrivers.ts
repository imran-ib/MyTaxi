import { GetNearbyDriversRespones, User } from "./../../../types/graph.d";
import { Context } from "graphql-yoga/dist/types";
import AuthResolver from "../../../Utills/AuthResolver";

export const getNearbyDrivers = AuthResolver(
  async (
    parent,
    args,
    ctx: Context,
    info
  ): Promise<GetNearbyDriversRespones> => {
    const User: User = ctx.request.user;

    const { lastLat, lastLng } = User;

    try {
      const drivers: User[] = await ctx.prisma.query.users({
        where: {
          AND: [
            {
              isDriving: true
            },
            { lastLat_in: [lastLat - 0.05, lastLat + 0.05] },
            { lastLng_in: [lastLng - 0.05, lastLng + 0.5] }
          ]
        }
      });
      return {
        ok: true,
        error: null,
        drivers: drivers
      };
    } catch (error) {
      return {
        ok: false,
        error: `Something Went Wrong ${error.message}`,
        drivers: null
      };
    }
  }
);
