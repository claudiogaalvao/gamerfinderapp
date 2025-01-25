import {
  RoomsCount,
  SubscriptionsCounter,
} from "@/components/gameStatusIndicator";
import { Feather } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";

type GameBannerProps = {
  imageUri: string;
  locked: boolean;
  subscriptions: number;
  minSubscriptions: number;
  openRooms: number;
};

export function GameBanner({
  imageUri,
  locked,
  openRooms,
  subscriptions,
  minSubscriptions,
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
          subscriptions={subscriptions}
          minSubscriptions={minSubscriptions}
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
