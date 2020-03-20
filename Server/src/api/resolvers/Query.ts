import { getChatRoom } from "./Queries/GetChatRoom";
import { getRide } from "./Queries/GetRide";
import { getNearByRides } from "./Queries/GetNearByRides";
import { getNearbyDrivers } from "./Queries/GetNearbyDrivers";
import { getMyplaces } from "./Mutations/Places/Myplaces";
import { getMyProfile } from "./Queries/GetMyProfile";

export const Query = {
  getMyProfile,
  getMyplaces,
  getNearbyDrivers,
  getNearByRides,
  getRide,
  getChatRoom
};
