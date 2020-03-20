import { GetMyPlacesResponse } from "./../../../../types/graph.d";
import { Context } from "./../../../../types/Context";
import AuthResolver from "../../../../Utills/AuthResolver";

export const getMyplaces = AuthResolver(
  async (parent, args, ctx: Context, info): Promise<GetMyPlacesResponse> => {
    try {
      const places = await ctx.prisma.query.placeses({
        where: {
          user: { id: ctx.request.userId }
        }
      });
      if (!places) {
        return {
          ok: false,
          error: "No place Found",
          places: null
        };
      }
      return {
        ok: true,
        error: null,
        places: places
      };
    } catch (error) {
      return {
        ok: false,
        error: error.message,
        places: null
      };
    }
    console.log(args);
  }
);
