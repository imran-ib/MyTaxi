import { Context } from "./../../../types/Context";
import {
  GetRideResponse,
  QueryGetRideArgs,
  User
} from "./../../../types/graph.d";
import AuthResolver from "../../../Utills/AuthResolver";

export const getRide = AuthResolver(
  async (
    parent,
    args: QueryGetRideArgs,
    ctx: Context,
    info
  ): Promise<GetRideResponse> => {
    const user: User = ctx.request.user;
    try {
      const [Ride] = await ctx.prisma.query.rides({
        where: {
          AND: [
            { id: args.id },
            {
              OR: [{ driver: { id: user.id } }, { passenger: { id: user.id } }]
            }
          ]
        }
      });

      if (!Ride) {
        return {
          ok: false,
          error: `Ride Not Found`,
          Ride: null
        };
      }
      return {
        ok: true,
        error: null,
        Ride: Ride
      };
    } catch (error) {
      return {
        ok: false,
        error: `Cannot get ride ${error.message}`,
        Ride: null
      };
    }
  }
);
