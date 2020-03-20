import { ChatMessageSubscription } from "./Subscriptions/ChatMessageSubscription";
import { RideStatusSubscription } from "./Subscriptions/RideStatusSubscription";
import { NearByRidesSubscription } from "./Subscriptions/NearByRidesSubscription";
import { DriversSubscriptions } from "./Subscriptions/User/User";

export const Subscription = {
  DriversSubscriptions,
  NearByRidesSubscription,
  RideStatusSubscription,
  ChatMessageSubscription
};
