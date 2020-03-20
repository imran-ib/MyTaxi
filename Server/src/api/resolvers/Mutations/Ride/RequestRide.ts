import { Context } from "./../../../../types/Context";
import {
  RequestRideResponse,
  MutationRequestRideArgs,
  User
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/AuthResolver";

export const requestRide = AuthResolver(
  async (
    _parent,
    args: MutationRequestRideArgs,
    ctx: Context,
    _info
  ): Promise<RequestRideResponse> => {
    try {
      const user: User = ctx.request.user;
      if (user.isRiding) {
        return {
          ok: false,
          error: `You Connot Request two Rides At same Time`,
          Ride: null
        };
      }
      if (user.isDriving) {
        return {
          ok: false,
          error: `Drivers Connot request Rides`,
          Ride: null
        };
      }

      const Ride = await ctx.prisma.mutation.createRide({
        data: {
          ...args,
          passenger: {
            connect: { id: user.id }
          }
        }
      });

      await ctx.prisma.mutation.updateUser({
        where: { id: user.id },
        data: { isRiding: true }
      });

      return {
        ok: true,
        error: null,
        Ride
      };
    } catch (error) {
      return {
        ok: false,
        error: `Unable To Request Ride ${error.message}`,
        Ride: null
      };
    }
  }
);
