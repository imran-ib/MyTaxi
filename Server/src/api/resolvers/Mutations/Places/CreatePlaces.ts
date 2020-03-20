import { Context } from "../../../../types/Context";
import {
  MutationAddPlaceArgs,
  AddPlaceResponse
} from "../../../../types/graph";
import AuthResolver from "../../../../Utills/AuthResolver";

export const addPlace = AuthResolver(
  async (
    _parent,
    args: MutationAddPlaceArgs,
    ctx: any,
    _info
  ): Promise<AddPlaceResponse> => {
    console.log(ctx);
    try {
      await ctx.prisma.mutation.createPlaces({
        data: {
          ...args,
          user: {
            connect: { id: ctx.request.userId }
          }
        }
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
