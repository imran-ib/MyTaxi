export const NearByRidesSubscription = {
  subscribe: async (_parent, _args, ctx, info) => {
    const { currentUser } = ctx.context;

    const { lastLat, lastLng } = currentUser;

    const RideSubscription = await ctx.prisma.subscription.ride(
      {
        where: {
          AND: [
            {
              updatedFields_contains_some: ["pickUpLat", "pickUpLng"]
            },
            {
              node: {
                AND: [
                  { pickUpLat_gte: lastLat - 0.5 },
                  { pickUpLat_lte: lastLat + 0.5 },
                  { pickUpLng_gte: lastLng - 0.5 },
                  { pickUpLng_lte: lastLng + 0.5 }
                ]
              }
            }
          ]
        }
      },
      info
    );

    return RideSubscription;
  }
};
