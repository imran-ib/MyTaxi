import { Context } from "./../../../../types/Context";
import AuthResolver from "../../../../Utills/AuthResolver";
import {
  MutationDeletePlaceArgs,
  DeletePlaceResponse
} from "../../../../types/graph";

export const deletePlace = AuthResolver(
  async (
    _parent,
    args: MutationDeletePlaceArgs,
    ctx: Context,
    _info
  ): Promise<DeletePlaceResponse> => {
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
          error: "Unable To Delete The Place"
        };
      }
      if (Place.user.id !== ctx.request.userId) {
        return {
          ok: false,
          error: "You Cannot Delete This place"
        };
      }

      await ctx.prisma.mutation.deletePlaces({
        where: { id: args.id }
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
