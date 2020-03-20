import { Context } from "./../../../../types/Context";
import {
  MutationUpdateRideStatusArgs,
  UpdateRideStatusResponse,
  User,
  Ride
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/AuthResolver";

export const updateRideStatus = AuthResolver(
  async (
    _parent,
    args: MutationUpdateRideStatusArgs,
    ctx: Context,
    info
  ): Promise<UpdateRideStatusResponse> => {
    const user: User = ctx.request.user;
    if (!user.isDriving) {
      return {
        ok: false,
        error: `You are not Allowed`
      };
    }
    try {
      let Ride: Ride;
      if (args.status === "ACCEPTED") {
        [Ride] = await ctx.prisma.query.rides({
          where: { AND: [{ id: args.id }, { status: "REQUESTING" }] }
        });
      } else {
        [Ride] = await ctx.prisma.query.rides({
          where: { AND: [{ id: args.id }, { driver: { id: user.id } }] }
        });
      }

      if (!Ride) {
        return {
          ok: false,
          error: `Cannot Update Ride`
        };
      }

      const updateUser = await ctx.prisma.mutation.updateUser({
        where: { id: user.id },
        data: { isTaken: true }
      });

      const udpatedRide = await ctx.prisma.mutation.updateRide(
        {
          where: { id: args.id },
          data: { status: args.status, driver: { connect: { id: user.id } } }
        },
        `{id passenger { id } driver { id  } }`
      );

      const passengerId: string = udpatedRide.passenger.id;
      const driverId: string = udpatedRide.driver.id;
      // Create Chat

      const chat = await ctx.prisma.mutation.createChat({
        data: {
          chatAsDriver: { connect: { id: driverId } },
          ChatAsPassenger: { connect: { id: passengerId } },
          ride: { connect: { id: udpatedRide.id } }
        }
      });
      if (!chat) {
        return {
          ok: false,
          error: `Unable to careate Chat Room`
        };
      }

      return {
        ok: true,
        error: null
      };
    } catch (error) {
      return {
        ok: false,
        error: `Cannot Update Ride Status ${error}`
      };
    }
  }
);
