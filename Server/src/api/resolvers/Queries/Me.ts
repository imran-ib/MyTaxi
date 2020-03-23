import { Context } from "./../../../types/Context";

export const me = async (parent, args, ctx: Context, info): Promise<any> => {
  const user = ctx.request.user;
  if (!user) {
    return null;
  }
  const User = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    email: user.email,
    age: user.age,
    phone: user.phone,
    avatar: user.avatar,
    lastLat: user.lastLat,
    lastLng: user.lastLng,
    lastOrientation: user.lastOrientation,
    isDriving: user.isDriving,
    isRiding: user.isRiding,
    isTaken: user.isTaken,
    isVerified: user.isVerified
  };

  return User;
};

export default me;
