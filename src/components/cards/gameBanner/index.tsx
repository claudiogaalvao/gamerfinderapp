import {
  RoomsCount,
  SubscriptionsCounter,
} from "@/components/gameStatusIndicator";
import { Feather } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";

type GameBannerProps = {
  imageUri: string;
  locked: boolean;
  subscribed: boolean;
  subscriptions: number;
  minSubscriptions: number;
  rooms: number;
  onSubscriptionPressed: (subscribe: boolean) => void;
};

export function GameBanner({
  imageUri,
  locked,
  rooms: openRooms,
  subscribed,
  subscriptions,
  minSubscriptions,
  onSubscriptionPressed,
}: GameBannerProps) {
  return (
    <View className="relative items-center justify-center">
      <Image
        className={`w-full h-64 rounded-md ${locked ? "opacity-40" : ""}`}
        source={{
          uri: imageUri,
          cache: "force-cache",
        }}
      />

      {locked ? (
        <SubscriptionsCounter
          subscribed={subscribed}
          subscriptions={subscriptions}
          minSubscriptions={minSubscriptions}
          onPress={onSubscriptionPressed}
        />
      ) : (
        <RoomsCount roomsCount={openRooms} />
      )}

      {locked ? (
        <Feather className="absolute" name="lock" size={40} color="white" />
      ) : null}
    </View>
  );
}
