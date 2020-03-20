import { Context } from "./../../../../types/Context";
import {
  MutationEditPlaceArgs,
  EditPlaceResponse
} from "./../../../../types/graph.d";
import AuthResolver from "../../../../Utills/AuthResolver";

export const editPlace = AuthResolver(
  async (
    _parent,
    args: MutationEditPlaceArgs,
    ctx: Context,
    _info
  ): Promise<EditPlaceResponse> => {
    try {
      const [Place] = await ctx.prisma.query.placeses(
        {
          where: {
            AND: [{ id: args.id }, { user: { id: ctx.request.userId } }]
          }
        },
        `{id user { id } }`
      );
      if (!Place) {
        return {
          ok: false,
          error: "Unable To Edit The Place"
        };
      }
      if (Place.user.id !== ctx.request.userId) {
        console.log("ctx.request.userId", ctx.request.userId);
        console.log("Place.user.id ", Place.user.id);
        return {
          ok: false,
          error: "You Cannot Edit This place"
        };
      }

      const updates = { ...args };
      delete updates.id;
      await ctx.prisma.mutation.updatePlaces({
        where: { id: args.id },
        data: updates
      });
      return {
        ok: true,
        error: null
      };
    } catch (error) {
      return {
        ok: false,
        error: error
      };
    }
  }
);
