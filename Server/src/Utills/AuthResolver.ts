const AuthResolver = resolverFunctions => async (parent, args, ctx, info) => {
  const user = ctx.request.user;
  if (!user) {
    throw new Error("ACCESS DENIED,  AUTHORISATION FAILED");
  }
  const resolver = await resolverFunctions(parent, args, ctx, info);
  return resolver;
};

export default AuthResolver;
