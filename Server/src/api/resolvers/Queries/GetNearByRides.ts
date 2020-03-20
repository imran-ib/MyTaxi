import { GetNearByRidesResponse, User } from "./../../../types/graph.d";
import { Context } from "./../../../types/Context";
import AuthResolver from "../../../Utills/AuthResolver";

export const getNearByRides = AuthResolver(
  async (
    _parent,
    _args,
    ctx: Context,
    _info
  ): Promise<GetNearByRidesResponse> => {
    const user: User = ctx.request.user;
    const { lastLat, lastLng } = user;
    if (!user.isDriving) {
      return {
        ok: false,
        error: `You Are Not A Driver`,
        Ride: []
      };
    }

    try {
      const Rides = await ctx.prisma.query.rides({
        where: {
          AND: [
            { status_in: "REQUESTING" },
            { pickUpLat_in: [lastLat - 0.05, lastLat + 0.05] },
            { pickUpLng_in: [lastLng - 0.05, lastLng + 0.5] }
          ]
        }
      });
      return {
        ok: true,
        error: null,
        Ride: Rides
      };
    } catch (error) {
      return {
        ok: false,
        error: `Can not Get Rides ${error.message}`,
        Ride: []
      };
    }
  }
);
