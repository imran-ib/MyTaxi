export const ChatMessageSubscription = {
  subscribe: async (_parent, args, ctx, info) => {
    console.log("args", args);
    const { currentUser } = ctx.context;

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
