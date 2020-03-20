import { sendChatMessage } from "./Mutations/Chat/SendChatMessage";
import { updateRideStatus } from "./Mutations/Ride/UpdateRideStatus";
import { requestRide } from "./Mutations/Ride/RequestRide";
import { editPlace } from "./Mutations/Places/Editplace";
import { reportOrientation } from "./Mutations/User/Movement/ReportMovement";
import { toggleDrivingMode } from "./Mutations/User/ToggleDrivingMode/ToggleDrivingMode";
import { requestReset } from "./Mutations/User/RequestResetPasswordMutation";
import { resetPassword } from "./Mutations/User/ResetPasswordMutation";
import { updateMyprofile } from "./Mutations/User/UpdateUserProfile";
import { verifyEmail } from "./Mutations/User/VerifyEmail";
import { requestEmailVerification } from "./Mutations/User/RequestEmailVerification";
import { StartPhoneVerification } from "./Mutations/User/PhoneVerification";
import { loginUser } from "./Mutations/User/LoginUserMutation";
import { FBConnect } from "./Mutations/User/FBConnect";
import { createUser } from "./Mutations/User/CreateUserMutation";
import { logoutUser } from "./UserMutations";
import { CompletePhoneVerification } from "./Mutations/User/CompletePhoneVerification";
import { MutationResolvers } from "../../types/graph";
import { addPlace } from "./Mutations/Places/CreatePlaces";
import { deletePlace } from "./Mutations/Places/DeletePlace";

export const Mutation: MutationResolvers = {
  createUser,
  loginUser,
  logoutUser,
  requestReset,
  resetPassword,
  FBConnect,
  StartPhoneVerification,
  CompletePhoneVerification,
  requestEmailVerification,
  verifyEmail,
  updateMyprofile,
  toggleDrivingMode,
  reportOrientation,
  addPlace,
  editPlace,
  deletePlace,
  requestRide,
  updateRideStatus,
  sendChatMessage
};
