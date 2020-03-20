import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type AddPlaceResponse = {
   __typename?: 'addPlaceResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type Chat = Node & {
   __typename?: 'Chat',
  id: Scalars['ID'],
  ride?: Maybe<Ride>,
  message?: Maybe<Array<ChatMessage>>,
  chatAsDriver?: Maybe<User>,
  ChatAsPassenger?: Maybe<User>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type ChatMessageArgs = {
  where?: Maybe<ChatMessageWhereInput>,
  orderBy?: Maybe<ChatMessageOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ChatMessage = Node & {
   __typename?: 'ChatMessage',
  id: Scalars['ID'],
  text: Scalars['String'],
  chat?: Maybe<Chat>,
  user: User,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export enum ChatMessageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ChatMessageWhereInput = {
  AND?: Maybe<Array<ChatMessageWhereInput>>,
  OR?: Maybe<Array<ChatMessageWhereInput>>,
  NOT?: Maybe<Array<ChatMessageWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  text?: Maybe<Scalars['String']>,
  text_not?: Maybe<Scalars['String']>,
  text_in?: Maybe<Array<Scalars['String']>>,
  text_not_in?: Maybe<Array<Scalars['String']>>,
  text_lt?: Maybe<Scalars['String']>,
  text_lte?: Maybe<Scalars['String']>,
  text_gt?: Maybe<Scalars['String']>,
  text_gte?: Maybe<Scalars['String']>,
  text_contains?: Maybe<Scalars['String']>,
  text_not_contains?: Maybe<Scalars['String']>,
  text_starts_with?: Maybe<Scalars['String']>,
  text_not_starts_with?: Maybe<Scalars['String']>,
  text_ends_with?: Maybe<Scalars['String']>,
  text_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  chat?: Maybe<ChatWhereInput>,
  user?: Maybe<UserWhereInput>,
};

export type ChatWhereInput = {
  AND?: Maybe<Array<ChatWhereInput>>,
  OR?: Maybe<Array<ChatWhereInput>>,
  NOT?: Maybe<Array<ChatWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  ride?: Maybe<RideWhereInput>,
  message_every?: Maybe<ChatMessageWhereInput>,
  message_some?: Maybe<ChatMessageWhereInput>,
  message_none?: Maybe<ChatMessageWhereInput>,
  chatAsDriver?: Maybe<UserWhereInput>,
  ChatAsPassenger?: Maybe<UserWhereInput>,
};

export type CompletePhoneVericationResponse = {
   __typename?: 'CompletePhoneVericationResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};

export type CreateUser = {
   __typename?: 'CreateUser',
  firstName: Scalars['String'],
  lastName?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  password: Scalars['String'],
};

export type CreateUserResponse = {
   __typename?: 'CreateUserResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};


export type DeletePlaceResponse = {
   __typename?: 'deletePlaceResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type DriversSubscriptionPayload = {
   __typename?: 'DriversSubscriptionPayload',
  mutation?: Maybe<MutationType>,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type EditPlaceResponse = {
   __typename?: 'editPlaceResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type FbConnectResponse = {
   __typename?: 'FBConnectResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};

export type GetChatRoomResponse = {
   __typename?: 'getChatRoomResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  Chat?: Maybe<Chat>,
};

export type GetMyPlacesResponse = {
   __typename?: 'GetMyPlacesResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  places?: Maybe<Array<Maybe<Places>>>,
};

export type GetMyProfileResponse = {
   __typename?: 'getMyProfileResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};

export type GetNearbyDriversRespones = {
   __typename?: 'getNearbyDriversRespones',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  drivers: Array<Maybe<User>>,
};

export type GetNearByRidesResponse = {
   __typename?: 'getNearByRidesResponse',
  ok?: Maybe<Scalars['Boolean']>,
  error?: Maybe<Scalars['String']>,
  Ride: Array<Maybe<Ride>>,
};

export type GetRideResponse = {
   __typename?: 'getRideResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  Ride?: Maybe<Ride>,
};

export type LoginUser = {
   __typename?: 'LoginUser',
  email: Scalars['String'],
  password: Scalars['String'],
};

export type LoginUserResponse = {
   __typename?: 'LoginUserResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};

export type LogoutUser = {
   __typename?: 'LogoutUser',
  Message?: Maybe<Message>,
};

export type Message = {
   __typename?: 'Message',
  message?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createUser: CreateUserResponse,
  FBConnect: FbConnectResponse,
  loginUser: LoginUserResponse,
  logoutUser?: Maybe<Message>,
  requestReset: RequestResetResponse,
  resetPassword: ResetPasswordResponse,
  StartPhoneVerification: PhoneVerificationResponse,
  CompletePhoneVerification: CompletePhoneVericationResponse,
  requestEmailVerification: RequestEmailVerificationResponse,
  verifyEmail: VerifyEmailResponse,
  updateMyprofile: UpdateMyprofileResponse,
  toggleDrivingMode: ToggleDrivingModeResponse,
  reportOrientation: ReportOrientationResponse,
  addPlace: AddPlaceResponse,
  editPlace: EditPlaceResponse,
  deletePlace: DeletePlaceResponse,
  requestRide: RequestRideResponse,
  updateRideStatus: UpdateRideStatusResponse,
  sendChatMessage: SendChatMessageResponse,
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'],
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  age?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['String']>
};


export type MutationFbConnectArgs = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  fbId: Scalars['String']
};


export type MutationLoginUserArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationRequestResetArgs = {
  email: Scalars['String']
};


export type MutationResetPasswordArgs = {
  token: Scalars['String'],
  password: Scalars['String'],
  confirmPassword: Scalars['String']
};


export type MutationStartPhoneVerificationArgs = {
  phone: Scalars['String']
};


export type MutationCompletePhoneVerificationArgs = {
  phone: Scalars['String'],
  key: Scalars['String']
};


export type MutationRequestEmailVerificationArgs = {
  email: Scalars['String']
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String'],
  key: Scalars['String']
};


export type MutationUpdateMyprofileArgs = {
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['String']>
};


export type MutationReportOrientationArgs = {
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  orientation?: Maybe<Scalars['Float']>
};


export type MutationAddPlaceArgs = {
  name: Scalars['String'],
  address: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isFav?: Maybe<Scalars['Boolean']>,
  Lat?: Maybe<Scalars['Float']>,
  Lng?: Maybe<Scalars['Float']>
};


export type MutationEditPlaceArgs = {
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  isFav?: Maybe<Scalars['Boolean']>,
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>
};


export type MutationDeletePlaceArgs = {
  id: Scalars['String']
};


export type MutationRequestRideArgs = {
  status?: Maybe<Status>,
  pickUpLat?: Maybe<Scalars['Float']>,
  pickUpLng?: Maybe<Scalars['Float']>,
  pickUpAddress: Scalars['String'],
  dropOffLat?: Maybe<Scalars['Float']>,
  dropOffLng?: Maybe<Scalars['Float']>,
  dropOffAddress: Scalars['String'],
  price: Scalars['Float'],
  duration: Scalars['String'],
  distance: Scalars['String']
};


export type MutationUpdateRideStatusArgs = {
  id: Scalars['ID'],
  status: Status
};


export type MutationSendChatMessageArgs = {
  text: Scalars['String'],
  chatId: Scalars['ID']
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type PhoneVerificationResponse = {
   __typename?: 'PhoneVerificationResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type Places = Node & {
   __typename?: 'Places',
  id: Scalars['ID'],
  name: Scalars['String'],
  address: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  user: User,
  isFav: Scalars['Boolean'],
  Lat?: Maybe<Scalars['Float']>,
  Lng?: Maybe<Scalars['Float']>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type PlacesWhereInput = {
  AND?: Maybe<Array<PlacesWhereInput>>,
  OR?: Maybe<Array<PlacesWhereInput>>,
  NOT?: Maybe<Array<PlacesWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  image_not?: Maybe<Scalars['String']>,
  image_in?: Maybe<Array<Scalars['String']>>,
  image_not_in?: Maybe<Array<Scalars['String']>>,
  image_lt?: Maybe<Scalars['String']>,
  image_lte?: Maybe<Scalars['String']>,
  image_gt?: Maybe<Scalars['String']>,
  image_gte?: Maybe<Scalars['String']>,
  image_contains?: Maybe<Scalars['String']>,
  image_not_contains?: Maybe<Scalars['String']>,
  image_starts_with?: Maybe<Scalars['String']>,
  image_not_starts_with?: Maybe<Scalars['String']>,
  image_ends_with?: Maybe<Scalars['String']>,
  image_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  isFav?: Maybe<Scalars['Boolean']>,
  isFav_not?: Maybe<Scalars['Boolean']>,
  Lat?: Maybe<Scalars['Float']>,
  Lat_not?: Maybe<Scalars['Float']>,
  Lat_in?: Maybe<Array<Scalars['Float']>>,
  Lat_not_in?: Maybe<Array<Scalars['Float']>>,
  Lat_lt?: Maybe<Scalars['Float']>,
  Lat_lte?: Maybe<Scalars['Float']>,
  Lat_gt?: Maybe<Scalars['Float']>,
  Lat_gte?: Maybe<Scalars['Float']>,
  Lng?: Maybe<Scalars['Float']>,
  Lng_not?: Maybe<Scalars['Float']>,
  Lng_in?: Maybe<Array<Scalars['Float']>>,
  Lng_not_in?: Maybe<Array<Scalars['Float']>>,
  Lng_lt?: Maybe<Scalars['Float']>,
  Lng_lte?: Maybe<Scalars['Float']>,
  Lng_gt?: Maybe<Scalars['Float']>,
  Lng_gte?: Maybe<Scalars['Float']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  user?: Maybe<UserWhereInput>,
};

export type Query = {
   __typename?: 'Query',
  getMyProfile: GetMyProfileResponse,
  getMyplaces: GetMyPlacesResponse,
  getNearbyDrivers: GetNearbyDriversRespones,
  getNearByRides: GetNearByRidesResponse,
  getRide: GetRideResponse,
  getChatRoom: GetChatRoomResponse,
};


export type QueryGetRideArgs = {
  id: Scalars['ID']
};


export type QueryGetChatRoomArgs = {
  id: Scalars['ID']
};

export type ReportOrientationResponse = {
   __typename?: 'reportOrientationResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type RequestEmailVerificationResponse = {
   __typename?: 'RequestEmailVerificationResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type RequestReset = {
   __typename?: 'RequestReset',
  email?: Maybe<Scalars['String']>,
};

export type RequestResetResponse = {
   __typename?: 'requestResetResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
};

export type RequestRideResponse = {
   __typename?: 'requestRideResponse',
  ok?: Maybe<Scalars['Boolean']>,
  error?: Maybe<Scalars['String']>,
  Ride?: Maybe<Ride>,
};

export type ResetPassword = {
   __typename?: 'ResetPassword',
  token: Scalars['String'],
  password: Scalars['String'],
  confirmPassword: Scalars['String'],
};

export type ResetPasswordResponse = {
   __typename?: 'resetPasswordResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  successMessage?: Maybe<Scalars['String']>,
};

export type Ride = Node & {
   __typename?: 'Ride',
  id: Scalars['ID'],
  status?: Maybe<Status>,
  pickUpLat?: Maybe<Scalars['Float']>,
  pickUpLng?: Maybe<Scalars['Float']>,
  pickUpAddress: Scalars['String'],
  dropOffLat?: Maybe<Scalars['Float']>,
  dropOffLng?: Maybe<Scalars['Float']>,
  dropOffAddress: Scalars['String'],
  price: Scalars['Float'],
  duration: Scalars['String'],
  distance: Scalars['String'],
  chat?: Maybe<Chat>,
  driver?: Maybe<User>,
  passenger?: Maybe<User>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type RidePreviousValues = {
   __typename?: 'RidePreviousValues',
  id: Scalars['ID'],
  status?: Maybe<Status>,
  pickUpLat?: Maybe<Scalars['Float']>,
  pickUpLng?: Maybe<Scalars['Float']>,
  pickUpAddress: Scalars['String'],
  dropOffLat?: Maybe<Scalars['Float']>,
  dropOffLng?: Maybe<Scalars['Float']>,
  dropOffAddress: Scalars['String'],
  price: Scalars['Float'],
  duration: Scalars['String'],
  distance: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type RideSubscriptionPayload = {
   __typename?: 'RideSubscriptionPayload',
  mutation?: Maybe<MutationType>,
  node?: Maybe<Ride>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<RidePreviousValues>,
};

export type RideWhereInput = {
  AND?: Maybe<Array<RideWhereInput>>,
  OR?: Maybe<Array<RideWhereInput>>,
  NOT?: Maybe<Array<RideWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  status?: Maybe<Status>,
  status_not?: Maybe<Status>,
  status_in?: Maybe<Array<Status>>,
  status_not_in?: Maybe<Array<Status>>,
  pickUpLat?: Maybe<Scalars['Float']>,
  pickUpLat_not?: Maybe<Scalars['Float']>,
  pickUpLat_in?: Maybe<Array<Scalars['Float']>>,
  pickUpLat_not_in?: Maybe<Array<Scalars['Float']>>,
  pickUpLat_lt?: Maybe<Scalars['Float']>,
  pickUpLat_lte?: Maybe<Scalars['Float']>,
  pickUpLat_gt?: Maybe<Scalars['Float']>,
  pickUpLat_gte?: Maybe<Scalars['Float']>,
  pickUpLng?: Maybe<Scalars['Float']>,
  pickUpLng_not?: Maybe<Scalars['Float']>,
  pickUpLng_in?: Maybe<Array<Scalars['Float']>>,
  pickUpLng_not_in?: Maybe<Array<Scalars['Float']>>,
  pickUpLng_lt?: Maybe<Scalars['Float']>,
  pickUpLng_lte?: Maybe<Scalars['Float']>,
  pickUpLng_gt?: Maybe<Scalars['Float']>,
  pickUpLng_gte?: Maybe<Scalars['Float']>,
  pickUpAddress?: Maybe<Scalars['String']>,
  pickUpAddress_not?: Maybe<Scalars['String']>,
  pickUpAddress_in?: Maybe<Array<Scalars['String']>>,
  pickUpAddress_not_in?: Maybe<Array<Scalars['String']>>,
  pickUpAddress_lt?: Maybe<Scalars['String']>,
  pickUpAddress_lte?: Maybe<Scalars['String']>,
  pickUpAddress_gt?: Maybe<Scalars['String']>,
  pickUpAddress_gte?: Maybe<Scalars['String']>,
  pickUpAddress_contains?: Maybe<Scalars['String']>,
  pickUpAddress_not_contains?: Maybe<Scalars['String']>,
  pickUpAddress_starts_with?: Maybe<Scalars['String']>,
  pickUpAddress_not_starts_with?: Maybe<Scalars['String']>,
  pickUpAddress_ends_with?: Maybe<Scalars['String']>,
  pickUpAddress_not_ends_with?: Maybe<Scalars['String']>,
  dropOffLat?: Maybe<Scalars['Float']>,
  dropOffLat_not?: Maybe<Scalars['Float']>,
  dropOffLat_in?: Maybe<Array<Scalars['Float']>>,
  dropOffLat_not_in?: Maybe<Array<Scalars['Float']>>,
  dropOffLat_lt?: Maybe<Scalars['Float']>,
  dropOffLat_lte?: Maybe<Scalars['Float']>,
  dropOffLat_gt?: Maybe<Scalars['Float']>,
  dropOffLat_gte?: Maybe<Scalars['Float']>,
  dropOffLng?: Maybe<Scalars['Float']>,
  dropOffLng_not?: Maybe<Scalars['Float']>,
  dropOffLng_in?: Maybe<Array<Scalars['Float']>>,
  dropOffLng_not_in?: Maybe<Array<Scalars['Float']>>,
  dropOffLng_lt?: Maybe<Scalars['Float']>,
  dropOffLng_lte?: Maybe<Scalars['Float']>,
  dropOffLng_gt?: Maybe<Scalars['Float']>,
  dropOffLng_gte?: Maybe<Scalars['Float']>,
  dropOffAddress?: Maybe<Scalars['String']>,
  dropOffAddress_not?: Maybe<Scalars['String']>,
  dropOffAddress_in?: Maybe<Array<Scalars['String']>>,
  dropOffAddress_not_in?: Maybe<Array<Scalars['String']>>,
  dropOffAddress_lt?: Maybe<Scalars['String']>,
  dropOffAddress_lte?: Maybe<Scalars['String']>,
  dropOffAddress_gt?: Maybe<Scalars['String']>,
  dropOffAddress_gte?: Maybe<Scalars['String']>,
  dropOffAddress_contains?: Maybe<Scalars['String']>,
  dropOffAddress_not_contains?: Maybe<Scalars['String']>,
  dropOffAddress_starts_with?: Maybe<Scalars['String']>,
  dropOffAddress_not_starts_with?: Maybe<Scalars['String']>,
  dropOffAddress_ends_with?: Maybe<Scalars['String']>,
  dropOffAddress_not_ends_with?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  price_not?: Maybe<Scalars['Float']>,
  price_in?: Maybe<Array<Scalars['Float']>>,
  price_not_in?: Maybe<Array<Scalars['Float']>>,
  price_lt?: Maybe<Scalars['Float']>,
  price_lte?: Maybe<Scalars['Float']>,
  price_gt?: Maybe<Scalars['Float']>,
  price_gte?: Maybe<Scalars['Float']>,
  duration?: Maybe<Scalars['String']>,
  duration_not?: Maybe<Scalars['String']>,
  duration_in?: Maybe<Array<Scalars['String']>>,
  duration_not_in?: Maybe<Array<Scalars['String']>>,
  duration_lt?: Maybe<Scalars['String']>,
  duration_lte?: Maybe<Scalars['String']>,
  duration_gt?: Maybe<Scalars['String']>,
  duration_gte?: Maybe<Scalars['String']>,
  duration_contains?: Maybe<Scalars['String']>,
  duration_not_contains?: Maybe<Scalars['String']>,
  duration_starts_with?: Maybe<Scalars['String']>,
  duration_not_starts_with?: Maybe<Scalars['String']>,
  duration_ends_with?: Maybe<Scalars['String']>,
  duration_not_ends_with?: Maybe<Scalars['String']>,
  distance?: Maybe<Scalars['String']>,
  distance_not?: Maybe<Scalars['String']>,
  distance_in?: Maybe<Array<Scalars['String']>>,
  distance_not_in?: Maybe<Array<Scalars['String']>>,
  distance_lt?: Maybe<Scalars['String']>,
  distance_lte?: Maybe<Scalars['String']>,
  distance_gt?: Maybe<Scalars['String']>,
  distance_gte?: Maybe<Scalars['String']>,
  distance_contains?: Maybe<Scalars['String']>,
  distance_not_contains?: Maybe<Scalars['String']>,
  distance_starts_with?: Maybe<Scalars['String']>,
  distance_not_starts_with?: Maybe<Scalars['String']>,
  distance_ends_with?: Maybe<Scalars['String']>,
  distance_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  chat?: Maybe<ChatWhereInput>,
  driver?: Maybe<UserWhereInput>,
  passenger?: Maybe<UserWhereInput>,
};

export type SendChatMessageResponse = {
   __typename?: 'sendChatMessageResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  message?: Maybe<ChatMessage>,
};

export enum Status {
  Accepted = 'ACCEPTED',
  Finished = 'FINISHED',
  Canceled = 'CANCELED',
  Requesting = 'REQUESTING',
  OnRoute = 'ON_ROUTE'
}

export type Subscription = {
   __typename?: 'Subscription',
  DriversSubscriptions?: Maybe<DriversSubscriptionPayload>,
  NearByRidesSubscription?: Maybe<RideSubscriptionPayload>,
  RideStatusSubscription?: Maybe<RideSubscriptionPayload>,
};

export enum Target {
  Phone = 'PHONE',
  Email = 'EMAIL'
}

export type ToggleDrivingModeResponse = {
   __typename?: 'toggleDrivingModeResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type UpdateMyprofileResponse = {
   __typename?: 'updateMyprofileResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};

export type UpdateRideStatusResponse = {
   __typename?: 'updateRideStatusResponse',
  ok?: Maybe<Scalars['Boolean']>,
  error?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName?: Maybe<Scalars['String']>,
  fullName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  varyfication?: Maybe<Varify>,
  varyfiedEmail: Scalars['Boolean'],
  age?: Maybe<Scalars['Int']>,
  phone?: Maybe<Scalars['String']>,
  varyfiedPhone: Scalars['Boolean'],
  avatar?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['Float']>,
  lastLat?: Maybe<Scalars['Float']>,
  lastLng?: Maybe<Scalars['Float']>,
  lastOrientation?: Maybe<Scalars['Float']>,
  isDriving?: Maybe<Scalars['Boolean']>,
  isRiding?: Maybe<Scalars['Boolean']>,
  isTaken?: Maybe<Scalars['Boolean']>,
  isVerified?: Maybe<Scalars['Boolean']>,
};

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName?: Maybe<Scalars['String']>,
  fullName?: Maybe<Scalars['String']>,
  fbId?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  varyfiedEmail: Scalars['Boolean'],
  age?: Maybe<Scalars['Int']>,
  varyfiedPhone: Scalars['Boolean'],
  password?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['Float']>,
  lastLat: Scalars['Float'],
  lastLng: Scalars['Float'],
  lastOrientation: Scalars['Float'],
  isDriving: Scalars['Boolean'],
  isRiding: Scalars['Boolean'],
  isTaken: Scalars['Boolean'],
  isVerified: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  fullName?: Maybe<Scalars['String']>,
  fullName_not?: Maybe<Scalars['String']>,
  fullName_in?: Maybe<Array<Scalars['String']>>,
  fullName_not_in?: Maybe<Array<Scalars['String']>>,
  fullName_lt?: Maybe<Scalars['String']>,
  fullName_lte?: Maybe<Scalars['String']>,
  fullName_gt?: Maybe<Scalars['String']>,
  fullName_gte?: Maybe<Scalars['String']>,
  fullName_contains?: Maybe<Scalars['String']>,
  fullName_not_contains?: Maybe<Scalars['String']>,
  fullName_starts_with?: Maybe<Scalars['String']>,
  fullName_not_starts_with?: Maybe<Scalars['String']>,
  fullName_ends_with?: Maybe<Scalars['String']>,
  fullName_not_ends_with?: Maybe<Scalars['String']>,
  fbId?: Maybe<Scalars['String']>,
  fbId_not?: Maybe<Scalars['String']>,
  fbId_in?: Maybe<Array<Scalars['String']>>,
  fbId_not_in?: Maybe<Array<Scalars['String']>>,
  fbId_lt?: Maybe<Scalars['String']>,
  fbId_lte?: Maybe<Scalars['String']>,
  fbId_gt?: Maybe<Scalars['String']>,
  fbId_gte?: Maybe<Scalars['String']>,
  fbId_contains?: Maybe<Scalars['String']>,
  fbId_not_contains?: Maybe<Scalars['String']>,
  fbId_starts_with?: Maybe<Scalars['String']>,
  fbId_not_starts_with?: Maybe<Scalars['String']>,
  fbId_ends_with?: Maybe<Scalars['String']>,
  fbId_not_ends_with?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  phone_not?: Maybe<Scalars['String']>,
  phone_in?: Maybe<Array<Scalars['String']>>,
  phone_not_in?: Maybe<Array<Scalars['String']>>,
  phone_lt?: Maybe<Scalars['String']>,
  phone_lte?: Maybe<Scalars['String']>,
  phone_gt?: Maybe<Scalars['String']>,
  phone_gte?: Maybe<Scalars['String']>,
  phone_contains?: Maybe<Scalars['String']>,
  phone_not_contains?: Maybe<Scalars['String']>,
  phone_starts_with?: Maybe<Scalars['String']>,
  phone_not_starts_with?: Maybe<Scalars['String']>,
  phone_ends_with?: Maybe<Scalars['String']>,
  phone_not_ends_with?: Maybe<Scalars['String']>,
  varyfiedEmail?: Maybe<Scalars['Boolean']>,
  varyfiedEmail_not?: Maybe<Scalars['Boolean']>,
  age?: Maybe<Scalars['Int']>,
  age_not?: Maybe<Scalars['Int']>,
  age_in?: Maybe<Array<Scalars['Int']>>,
  age_not_in?: Maybe<Array<Scalars['Int']>>,
  age_lt?: Maybe<Scalars['Int']>,
  age_lte?: Maybe<Scalars['Int']>,
  age_gt?: Maybe<Scalars['Int']>,
  age_gte?: Maybe<Scalars['Int']>,
  varyfiedPhone?: Maybe<Scalars['Boolean']>,
  varyfiedPhone_not?: Maybe<Scalars['Boolean']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  avatar_not?: Maybe<Scalars['String']>,
  avatar_in?: Maybe<Array<Scalars['String']>>,
  avatar_not_in?: Maybe<Array<Scalars['String']>>,
  avatar_lt?: Maybe<Scalars['String']>,
  avatar_lte?: Maybe<Scalars['String']>,
  avatar_gt?: Maybe<Scalars['String']>,
  avatar_gte?: Maybe<Scalars['String']>,
  avatar_contains?: Maybe<Scalars['String']>,
  avatar_not_contains?: Maybe<Scalars['String']>,
  avatar_starts_with?: Maybe<Scalars['String']>,
  avatar_not_starts_with?: Maybe<Scalars['String']>,
  avatar_ends_with?: Maybe<Scalars['String']>,
  avatar_not_ends_with?: Maybe<Scalars['String']>,
  resetToken?: Maybe<Scalars['String']>,
  resetToken_not?: Maybe<Scalars['String']>,
  resetToken_in?: Maybe<Array<Scalars['String']>>,
  resetToken_not_in?: Maybe<Array<Scalars['String']>>,
  resetToken_lt?: Maybe<Scalars['String']>,
  resetToken_lte?: Maybe<Scalars['String']>,
  resetToken_gt?: Maybe<Scalars['String']>,
  resetToken_gte?: Maybe<Scalars['String']>,
  resetToken_contains?: Maybe<Scalars['String']>,
  resetToken_not_contains?: Maybe<Scalars['String']>,
  resetToken_starts_with?: Maybe<Scalars['String']>,
  resetToken_not_starts_with?: Maybe<Scalars['String']>,
  resetToken_ends_with?: Maybe<Scalars['String']>,
  resetToken_not_ends_with?: Maybe<Scalars['String']>,
  resetTokenExpiry?: Maybe<Scalars['Float']>,
  resetTokenExpiry_not?: Maybe<Scalars['Float']>,
  resetTokenExpiry_in?: Maybe<Array<Scalars['Float']>>,
  resetTokenExpiry_not_in?: Maybe<Array<Scalars['Float']>>,
  resetTokenExpiry_lt?: Maybe<Scalars['Float']>,
  resetTokenExpiry_lte?: Maybe<Scalars['Float']>,
  resetTokenExpiry_gt?: Maybe<Scalars['Float']>,
  resetTokenExpiry_gte?: Maybe<Scalars['Float']>,
  lastLat?: Maybe<Scalars['Float']>,
  lastLat_not?: Maybe<Scalars['Float']>,
  lastLat_in?: Maybe<Array<Scalars['Float']>>,
  lastLat_not_in?: Maybe<Array<Scalars['Float']>>,
  lastLat_lt?: Maybe<Scalars['Float']>,
  lastLat_lte?: Maybe<Scalars['Float']>,
  lastLat_gt?: Maybe<Scalars['Float']>,
  lastLat_gte?: Maybe<Scalars['Float']>,
  lastLng?: Maybe<Scalars['Float']>,
  lastLng_not?: Maybe<Scalars['Float']>,
  lastLng_in?: Maybe<Array<Scalars['Float']>>,
  lastLng_not_in?: Maybe<Array<Scalars['Float']>>,
  lastLng_lt?: Maybe<Scalars['Float']>,
  lastLng_lte?: Maybe<Scalars['Float']>,
  lastLng_gt?: Maybe<Scalars['Float']>,
  lastLng_gte?: Maybe<Scalars['Float']>,
  lastOrientation?: Maybe<Scalars['Float']>,
  lastOrientation_not?: Maybe<Scalars['Float']>,
  lastOrientation_in?: Maybe<Array<Scalars['Float']>>,
  lastOrientation_not_in?: Maybe<Array<Scalars['Float']>>,
  lastOrientation_lt?: Maybe<Scalars['Float']>,
  lastOrientation_lte?: Maybe<Scalars['Float']>,
  lastOrientation_gt?: Maybe<Scalars['Float']>,
  lastOrientation_gte?: Maybe<Scalars['Float']>,
  isDriving?: Maybe<Scalars['Boolean']>,
  isDriving_not?: Maybe<Scalars['Boolean']>,
  isRiding?: Maybe<Scalars['Boolean']>,
  isRiding_not?: Maybe<Scalars['Boolean']>,
  isTaken?: Maybe<Scalars['Boolean']>,
  isTaken_not?: Maybe<Scalars['Boolean']>,
  isVerified?: Maybe<Scalars['Boolean']>,
  isVerified_not?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  places_every?: Maybe<PlacesWhereInput>,
  places_some?: Maybe<PlacesWhereInput>,
  places_none?: Maybe<PlacesWhereInput>,
  varyfication_every?: Maybe<VaryficationWhereInput>,
  varyfication_some?: Maybe<VaryficationWhereInput>,
  varyfication_none?: Maybe<VaryficationWhereInput>,
  DriverChat?: Maybe<ChatWhereInput>,
  PassengerChat?: Maybe<ChatWhereInput>,
  chatMessage_every?: Maybe<ChatMessageWhereInput>,
  chatMessage_some?: Maybe<ChatMessageWhereInput>,
  chatMessage_none?: Maybe<ChatMessageWhereInput>,
  asDriver?: Maybe<RideWhereInput>,
  asPassenger?: Maybe<RideWhereInput>,
};

export type Varify = {
   __typename?: 'Varify',
  id: Scalars['ID'],
  payload?: Maybe<Scalars['String']>,
  target?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
};

export type Varyfication = Node & {
   __typename?: 'Varyfication',
  id: Scalars['ID'],
  target?: Maybe<Target>,
  payload: Scalars['String'],
  key: Scalars['String'],
  user?: Maybe<User>,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type VaryficationWhereInput = {
  AND?: Maybe<Array<VaryficationWhereInput>>,
  OR?: Maybe<Array<VaryficationWhereInput>>,
  NOT?: Maybe<Array<VaryficationWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  target?: Maybe<Target>,
  target_not?: Maybe<Target>,
  target_in?: Maybe<Array<Target>>,
  target_not_in?: Maybe<Array<Target>>,
  payload?: Maybe<Scalars['String']>,
  payload_not?: Maybe<Scalars['String']>,
  payload_in?: Maybe<Array<Scalars['String']>>,
  payload_not_in?: Maybe<Array<Scalars['String']>>,
  payload_lt?: Maybe<Scalars['String']>,
  payload_lte?: Maybe<Scalars['String']>,
  payload_gt?: Maybe<Scalars['String']>,
  payload_gte?: Maybe<Scalars['String']>,
  payload_contains?: Maybe<Scalars['String']>,
  payload_not_contains?: Maybe<Scalars['String']>,
  payload_starts_with?: Maybe<Scalars['String']>,
  payload_not_starts_with?: Maybe<Scalars['String']>,
  payload_ends_with?: Maybe<Scalars['String']>,
  payload_not_ends_with?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  key_not?: Maybe<Scalars['String']>,
  key_in?: Maybe<Array<Scalars['String']>>,
  key_not_in?: Maybe<Array<Scalars['String']>>,
  key_lt?: Maybe<Scalars['String']>,
  key_lte?: Maybe<Scalars['String']>,
  key_gt?: Maybe<Scalars['String']>,
  key_gte?: Maybe<Scalars['String']>,
  key_contains?: Maybe<Scalars['String']>,
  key_not_contains?: Maybe<Scalars['String']>,
  key_starts_with?: Maybe<Scalars['String']>,
  key_not_starts_with?: Maybe<Scalars['String']>,
  key_ends_with?: Maybe<Scalars['String']>,
  key_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  user?: Maybe<UserWhereInput>,
};

export type VerifyEmailResponse = {
   __typename?: 'verifyEmailResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  getMyProfileResponse: ResolverTypeWrapper<GetMyProfileResponse>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Varify: ResolverTypeWrapper<Varify>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  GetMyPlacesResponse: ResolverTypeWrapper<GetMyPlacesResponse>,
  Places: ResolverTypeWrapper<Places>,
  Node: ResolverTypeWrapper<Node>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  getNearbyDriversRespones: ResolverTypeWrapper<GetNearbyDriversRespones>,
  getNearByRidesResponse: ResolverTypeWrapper<GetNearByRidesResponse>,
  Ride: ResolverTypeWrapper<Ride>,
  STATUS: Status,
  Chat: ResolverTypeWrapper<Chat>,
  ChatMessageWhereInput: ChatMessageWhereInput,
  ChatWhereInput: ChatWhereInput,
  RideWhereInput: RideWhereInput,
  UserWhereInput: UserWhereInput,
  PlacesWhereInput: PlacesWhereInput,
  VaryficationWhereInput: VaryficationWhereInput,
  TARGET: Target,
  ChatMessageOrderByInput: ChatMessageOrderByInput,
  ChatMessage: ResolverTypeWrapper<ChatMessage>,
  getRideResponse: ResolverTypeWrapper<GetRideResponse>,
  getChatRoomResponse: ResolverTypeWrapper<GetChatRoomResponse>,
  Mutation: ResolverTypeWrapper<{}>,
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>,
  FBConnectResponse: ResolverTypeWrapper<FbConnectResponse>,
  LoginUserResponse: ResolverTypeWrapper<LoginUserResponse>,
  Message: ResolverTypeWrapper<Message>,
  requestResetResponse: ResolverTypeWrapper<RequestResetResponse>,
  resetPasswordResponse: ResolverTypeWrapper<ResetPasswordResponse>,
  PhoneVerificationResponse: ResolverTypeWrapper<PhoneVerificationResponse>,
  CompletePhoneVericationResponse: ResolverTypeWrapper<CompletePhoneVericationResponse>,
  RequestEmailVerificationResponse: ResolverTypeWrapper<RequestEmailVerificationResponse>,
  verifyEmailResponse: ResolverTypeWrapper<VerifyEmailResponse>,
  updateMyprofileResponse: ResolverTypeWrapper<UpdateMyprofileResponse>,
  toggleDrivingModeResponse: ResolverTypeWrapper<ToggleDrivingModeResponse>,
  reportOrientationResponse: ResolverTypeWrapper<ReportOrientationResponse>,
  addPlaceResponse: ResolverTypeWrapper<AddPlaceResponse>,
  editPlaceResponse: ResolverTypeWrapper<EditPlaceResponse>,
  deletePlaceResponse: ResolverTypeWrapper<DeletePlaceResponse>,
  requestRideResponse: ResolverTypeWrapper<RequestRideResponse>,
  updateRideStatusResponse: ResolverTypeWrapper<UpdateRideStatusResponse>,
  sendChatMessageResponse: ResolverTypeWrapper<SendChatMessageResponse>,
  Subscription: ResolverTypeWrapper<{}>,
  DriversSubscriptionPayload: ResolverTypeWrapper<DriversSubscriptionPayload>,
  MutationType: MutationType,
  UserPreviousValues: ResolverTypeWrapper<UserPreviousValues>,
  RideSubscriptionPayload: ResolverTypeWrapper<RideSubscriptionPayload>,
  RidePreviousValues: ResolverTypeWrapper<RidePreviousValues>,
  CreateUser: ResolverTypeWrapper<CreateUser>,
  LoginUser: ResolverTypeWrapper<LoginUser>,
  LogoutUser: ResolverTypeWrapper<LogoutUser>,
  RequestReset: ResolverTypeWrapper<RequestReset>,
  ResetPassword: ResolverTypeWrapper<ResetPassword>,
  Varyfication: ResolverTypeWrapper<Varyfication>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  getMyProfileResponse: GetMyProfileResponse,
  Boolean: Scalars['Boolean'],
  String: Scalars['String'],
  User: User,
  ID: Scalars['ID'],
  Varify: Varify,
  Int: Scalars['Int'],
  Float: Scalars['Float'],
  GetMyPlacesResponse: GetMyPlacesResponse,
  Places: Places,
  Node: Node,
  DateTime: Scalars['DateTime'],
  getNearbyDriversRespones: GetNearbyDriversRespones,
  getNearByRidesResponse: GetNearByRidesResponse,
  Ride: Ride,
  STATUS: Status,
  Chat: Chat,
  ChatMessageWhereInput: ChatMessageWhereInput,
  ChatWhereInput: ChatWhereInput,
  RideWhereInput: RideWhereInput,
  UserWhereInput: UserWhereInput,
  PlacesWhereInput: PlacesWhereInput,
  VaryficationWhereInput: VaryficationWhereInput,
  TARGET: Target,
  ChatMessageOrderByInput: ChatMessageOrderByInput,
  ChatMessage: ChatMessage,
  getRideResponse: GetRideResponse,
  getChatRoomResponse: GetChatRoomResponse,
  Mutation: {},
  CreateUserResponse: CreateUserResponse,
  FBConnectResponse: FbConnectResponse,
  LoginUserResponse: LoginUserResponse,
  Message: Message,
  requestResetResponse: RequestResetResponse,
  resetPasswordResponse: ResetPasswordResponse,
  PhoneVerificationResponse: PhoneVerificationResponse,
  CompletePhoneVericationResponse: CompletePhoneVericationResponse,
  RequestEmailVerificationResponse: RequestEmailVerificationResponse,
  verifyEmailResponse: VerifyEmailResponse,
  updateMyprofileResponse: UpdateMyprofileResponse,
  toggleDrivingModeResponse: ToggleDrivingModeResponse,
  reportOrientationResponse: ReportOrientationResponse,
  addPlaceResponse: AddPlaceResponse,
  editPlaceResponse: EditPlaceResponse,
  deletePlaceResponse: DeletePlaceResponse,
  requestRideResponse: RequestRideResponse,
  updateRideStatusResponse: UpdateRideStatusResponse,
  sendChatMessageResponse: SendChatMessageResponse,
  Subscription: {},
  DriversSubscriptionPayload: DriversSubscriptionPayload,
  MutationType: MutationType,
  UserPreviousValues: UserPreviousValues,
  RideSubscriptionPayload: RideSubscriptionPayload,
  RidePreviousValues: RidePreviousValues,
  CreateUser: CreateUser,
  LoginUser: LoginUser,
  LogoutUser: LogoutUser,
  RequestReset: RequestReset,
  ResetPassword: ResetPassword,
  Varyfication: Varyfication,
};

export type AddPlaceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['addPlaceResponse'] = ResolversParentTypes['addPlaceResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ChatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  message?: Resolver<Maybe<Array<ResolversTypes['ChatMessage']>>, ParentType, ContextType, ChatMessageArgs>,
  chatAsDriver?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  ChatAsPassenger?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ChatMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChatMessage'] = ResolversParentTypes['ChatMessage']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CompletePhoneVericationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompletePhoneVericationResponse'] = ResolversParentTypes['CompletePhoneVericationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUser'] = ResolversParentTypes['CreateUser']> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CreateUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DeletePlaceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['deletePlaceResponse'] = ResolversParentTypes['deletePlaceResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type DriversSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DriversSubscriptionPayload'] = ResolversParentTypes['DriversSubscriptionPayload']> = {
  mutation?: Resolver<Maybe<ResolversTypes['MutationType']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['UserPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type EditPlaceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['editPlaceResponse'] = ResolversParentTypes['editPlaceResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FbConnectResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FBConnectResponse'] = ResolversParentTypes['FBConnectResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetChatRoomResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['getChatRoomResponse'] = ResolversParentTypes['getChatRoomResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  Chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetMyPlacesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetMyPlacesResponse'] = ResolversParentTypes['GetMyPlacesResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  places?: Resolver<Maybe<Array<Maybe<ResolversTypes['Places']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetMyProfileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['getMyProfileResponse'] = ResolversParentTypes['getMyProfileResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetNearbyDriversResponesResolvers<ContextType = any, ParentType extends ResolversParentTypes['getNearbyDriversRespones'] = ResolversParentTypes['getNearbyDriversRespones']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  drivers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetNearByRidesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['getNearByRidesResponse'] = ResolversParentTypes['getNearByRidesResponse']> = {
  ok?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  Ride?: Resolver<Array<Maybe<ResolversTypes['Ride']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetRideResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['getRideResponse'] = ResolversParentTypes['getRideResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  Ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LoginUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginUser'] = ResolversParentTypes['LoginUser']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LoginUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginUserResponse'] = ResolversParentTypes['LoginUserResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LogoutUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogoutUser'] = ResolversParentTypes['LogoutUser']> = {
  Message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'firstName' | 'password'>>,
  FBConnect?: Resolver<ResolversTypes['FBConnectResponse'], ParentType, ContextType, RequireFields<MutationFbConnectArgs, 'fbId'>>,
  loginUser?: Resolver<ResolversTypes['LoginUserResponse'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'email' | 'password'>>,
  logoutUser?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>,
  requestReset?: Resolver<ResolversTypes['requestResetResponse'], ParentType, ContextType, RequireFields<MutationRequestResetArgs, 'email'>>,
  resetPassword?: Resolver<ResolversTypes['resetPasswordResponse'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'token' | 'password' | 'confirmPassword'>>,
  StartPhoneVerification?: Resolver<ResolversTypes['PhoneVerificationResponse'], ParentType, ContextType, RequireFields<MutationStartPhoneVerificationArgs, 'phone'>>,
  CompletePhoneVerification?: Resolver<ResolversTypes['CompletePhoneVericationResponse'], ParentType, ContextType, RequireFields<MutationCompletePhoneVerificationArgs, 'phone' | 'key'>>,
  requestEmailVerification?: Resolver<ResolversTypes['RequestEmailVerificationResponse'], ParentType, ContextType, RequireFields<MutationRequestEmailVerificationArgs, 'email'>>,
  verifyEmail?: Resolver<ResolversTypes['verifyEmailResponse'], ParentType, ContextType, RequireFields<MutationVerifyEmailArgs, 'email' | 'key'>>,
  updateMyprofile?: Resolver<ResolversTypes['updateMyprofileResponse'], ParentType, ContextType, MutationUpdateMyprofileArgs>,
  toggleDrivingMode?: Resolver<ResolversTypes['toggleDrivingModeResponse'], ParentType, ContextType>,
  reportOrientation?: Resolver<ResolversTypes['reportOrientationResponse'], ParentType, ContextType, MutationReportOrientationArgs>,
  addPlace?: Resolver<ResolversTypes['addPlaceResponse'], ParentType, ContextType, RequireFields<MutationAddPlaceArgs, 'name' | 'address'>>,
  editPlace?: Resolver<ResolversTypes['editPlaceResponse'], ParentType, ContextType, RequireFields<MutationEditPlaceArgs, 'id'>>,
  deletePlace?: Resolver<ResolversTypes['deletePlaceResponse'], ParentType, ContextType, RequireFields<MutationDeletePlaceArgs, 'id'>>,
  requestRide?: Resolver<ResolversTypes['requestRideResponse'], ParentType, ContextType, RequireFields<MutationRequestRideArgs, 'pickUpAddress' | 'dropOffAddress' | 'price' | 'duration' | 'distance'>>,
  updateRideStatus?: Resolver<ResolversTypes['updateRideStatusResponse'], ParentType, ContextType, RequireFields<MutationUpdateRideStatusArgs, 'id' | 'status'>>,
  sendChatMessage?: Resolver<ResolversTypes['sendChatMessageResponse'], ParentType, ContextType, RequireFields<MutationSendChatMessageArgs, 'text' | 'chatId'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Places' | 'Ride' | 'Chat' | 'ChatMessage' | 'Varyfication', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type PhoneVerificationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PhoneVerificationResponse'] = ResolversParentTypes['PhoneVerificationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PlacesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Places'] = ResolversParentTypes['Places']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  isFav?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  Lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  Lng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getMyProfile?: Resolver<ResolversTypes['getMyProfileResponse'], ParentType, ContextType>,
  getMyplaces?: Resolver<ResolversTypes['GetMyPlacesResponse'], ParentType, ContextType>,
  getNearbyDrivers?: Resolver<ResolversTypes['getNearbyDriversRespones'], ParentType, ContextType>,
  getNearByRides?: Resolver<ResolversTypes['getNearByRidesResponse'], ParentType, ContextType>,
  getRide?: Resolver<ResolversTypes['getRideResponse'], ParentType, ContextType, RequireFields<QueryGetRideArgs, 'id'>>,
  getChatRoom?: Resolver<ResolversTypes['getChatRoomResponse'], ParentType, ContextType, RequireFields<QueryGetChatRoomArgs, 'id'>>,
};

export type ReportOrientationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['reportOrientationResponse'] = ResolversParentTypes['reportOrientationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RequestEmailVerificationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestEmailVerificationResponse'] = ResolversParentTypes['RequestEmailVerificationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RequestResetResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestReset'] = ResolversParentTypes['RequestReset']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RequestResetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['requestResetResponse'] = ResolversParentTypes['requestResetResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RequestRideResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['requestRideResponse'] = ResolversParentTypes['requestRideResponse']> = {
  ok?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  Ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ResetPasswordResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetPassword'] = ResolversParentTypes['ResetPassword']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  confirmPassword?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ResetPasswordResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['resetPasswordResponse'] = ResolversParentTypes['resetPasswordResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  successMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ride'] = ResolversParentTypes['Ride']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['STATUS']>, ParentType, ContextType>,
  pickUpLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  pickUpLng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  pickUpAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  dropOffLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  dropOffLng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  dropOffAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  distance?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>,
  driver?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  passenger?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RidePreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['RidePreviousValues'] = ResolversParentTypes['RidePreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['STATUS']>, ParentType, ContextType>,
  pickUpLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  pickUpLng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  pickUpAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  dropOffLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  dropOffLng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  dropOffAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  distance?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type RideSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RideSubscriptionPayload'] = ResolversParentTypes['RideSubscriptionPayload']> = {
  mutation?: Resolver<Maybe<ResolversTypes['MutationType']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['RidePreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SendChatMessageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['sendChatMessageResponse'] = ResolversParentTypes['sendChatMessageResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  message?: Resolver<Maybe<ResolversTypes['ChatMessage']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  DriversSubscriptions?: SubscriptionResolver<Maybe<ResolversTypes['DriversSubscriptionPayload']>, "DriversSubscriptions", ParentType, ContextType>,
  NearByRidesSubscription?: SubscriptionResolver<Maybe<ResolversTypes['RideSubscriptionPayload']>, "NearByRidesSubscription", ParentType, ContextType>,
  RideStatusSubscription?: SubscriptionResolver<Maybe<ResolversTypes['RideSubscriptionPayload']>, "RideStatusSubscription", ParentType, ContextType>,
};

export type ToggleDrivingModeResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['toggleDrivingModeResponse'] = ResolversParentTypes['toggleDrivingModeResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateMyprofileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateMyprofileResponse'] = ResolversParentTypes['updateMyprofileResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UpdateRideStatusResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateRideStatusResponse'] = ResolversParentTypes['updateRideStatusResponse']> = {
  ok?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  varyfication?: Resolver<Maybe<ResolversTypes['Varify']>, ParentType, ContextType>,
  varyfiedEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  varyfiedPhone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resetToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resetTokenExpiry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastLng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastOrientation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  isDriving?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isRiding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isTaken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreviousValues'] = ResolversParentTypes['UserPreviousValues']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  fbId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  varyfiedEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  varyfiedPhone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resetToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resetTokenExpiry?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastLat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  lastLng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  lastOrientation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  isDriving?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isRiding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isTaken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type VarifyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Varify'] = ResolversParentTypes['Varify']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  payload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  target?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type VaryficationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Varyfication'] = ResolversParentTypes['Varyfication']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  target?: Resolver<Maybe<ResolversTypes['TARGET']>, ParentType, ContextType>,
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type VerifyEmailResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['verifyEmailResponse'] = ResolversParentTypes['verifyEmailResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  addPlaceResponse?: AddPlaceResponseResolvers<ContextType>,
  Chat?: ChatResolvers<ContextType>,
  ChatMessage?: ChatMessageResolvers<ContextType>,
  CompletePhoneVericationResponse?: CompletePhoneVericationResponseResolvers<ContextType>,
  CreateUser?: CreateUserResolvers<ContextType>,
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>,
  DateTime?: GraphQLScalarType,
  deletePlaceResponse?: DeletePlaceResponseResolvers<ContextType>,
  DriversSubscriptionPayload?: DriversSubscriptionPayloadResolvers<ContextType>,
  editPlaceResponse?: EditPlaceResponseResolvers<ContextType>,
  FBConnectResponse?: FbConnectResponseResolvers<ContextType>,
  getChatRoomResponse?: GetChatRoomResponseResolvers<ContextType>,
  GetMyPlacesResponse?: GetMyPlacesResponseResolvers<ContextType>,
  getMyProfileResponse?: GetMyProfileResponseResolvers<ContextType>,
  getNearbyDriversRespones?: GetNearbyDriversResponesResolvers<ContextType>,
  getNearByRidesResponse?: GetNearByRidesResponseResolvers<ContextType>,
  getRideResponse?: GetRideResponseResolvers<ContextType>,
  LoginUser?: LoginUserResolvers<ContextType>,
  LoginUserResponse?: LoginUserResponseResolvers<ContextType>,
  LogoutUser?: LogoutUserResolvers<ContextType>,
  Message?: MessageResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  PhoneVerificationResponse?: PhoneVerificationResponseResolvers<ContextType>,
  Places?: PlacesResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  reportOrientationResponse?: ReportOrientationResponseResolvers<ContextType>,
  RequestEmailVerificationResponse?: RequestEmailVerificationResponseResolvers<ContextType>,
  RequestReset?: RequestResetResolvers<ContextType>,
  requestResetResponse?: RequestResetResponseResolvers<ContextType>,
  requestRideResponse?: RequestRideResponseResolvers<ContextType>,
  ResetPassword?: ResetPasswordResolvers<ContextType>,
  resetPasswordResponse?: ResetPasswordResponseResolvers<ContextType>,
  Ride?: RideResolvers<ContextType>,
  RidePreviousValues?: RidePreviousValuesResolvers<ContextType>,
  RideSubscriptionPayload?: RideSubscriptionPayloadResolvers<ContextType>,
  sendChatMessageResponse?: SendChatMessageResponseResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  toggleDrivingModeResponse?: ToggleDrivingModeResponseResolvers<ContextType>,
  updateMyprofileResponse?: UpdateMyprofileResponseResolvers<ContextType>,
  updateRideStatusResponse?: UpdateRideStatusResponseResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserPreviousValues?: UserPreviousValuesResolvers<ContextType>,
  Varify?: VarifyResolvers<ContextType>,
  Varyfication?: VaryficationResolvers<ContextType>,
  verifyEmailResponse?: VerifyEmailResponseResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
