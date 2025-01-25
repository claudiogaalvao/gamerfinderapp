import {
  RoomsCount,
  SubscriptionsCounter,
} from "@/components/gameStatusIndicator";
import { Feather } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";

type GameBannerProps = {
  imageUri: string;
  locked: boolean;
};

export function GameBanner({ imageUri, locked }: GameBannerProps) {
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
        <SubscriptionsCounter currentSubscriptions={25} minSubscriptions={40} />
      ) : (
        <RoomsCount roomsCount={2} />
      )}

      {locked ? (
        <Feather className="absolute" name="lock" size={40} color="white" />
      ) : null}
    </View>
  );
}
