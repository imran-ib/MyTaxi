export const ChatMessageSubscription = {
  subscribe: async (_parent, _args, ctx, info) => {
    const { currentUser } = ctx.context;
    console.log("currentUser", currentUser);

    const ChatSubscription = await ctx.prisma.subscription.chatMessage(
      {
        where: {
          AND: [
            {
              mutation_in: ["CREATED", "UPDATED", "DELETED"]
            },
            {
              node: {
                chat: {
                  OR: [
                    { chatAsDriver: { id: currentUser.id } },
                    { ChatAsPassenger: { id: currentUser.id } }
                  ]
                }
              }
            }
          ]
        }
      },
      info
    );

    return ChatSubscription;
  }
};
