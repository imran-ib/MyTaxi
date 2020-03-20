export const RideStatusSubscription = {
  subscribe: async (_parent, _args, ctx, info) => {
    const { currentUser } = ctx.context;

    const StatusSubscription = await ctx.prisma.subscription.ride(
      {
        where: {
          AND: [
            {
              mutation_in: ["UPDATED"]
            },
            {
              node: {
                OR: [
                  { driver: { id: currentUser.id } },
                  { passenger: { id: currentUser.id } }
                ]
              }
            }
          ]
        }
      },
      info
    );

    return StatusSubscription;
  }
};
