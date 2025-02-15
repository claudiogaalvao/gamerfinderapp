import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

type RoomsCountProps = {
  roomsCount: number;
};

export function RoomsCount({ roomsCount }: RoomsCountProps) {
  return (
    <View className="absolute top-3 right-3 flex-row gap-3 items-center justify-center bg-customized-blue-100 py-3 px-5 rounded-full">
      <View className="w-3 h-3 rounded-full ml-2 bg-green-500" />
      <Text className="text-white text-lg">{roomsCount} ROOMS</Text>
    </View>
  );
}

type SubscriptionsCounterProps = {
  subscribed: boolean;
  subscriptions: number;
  minSubscriptions: number;
  onPress: (subscribe: boolean) => void;
};

export function SubscriptionsCounter({
  subscribed,
  subscriptions,
  minSubscriptions,
  onPress,
}: SubscriptionsCounterProps) {
  return (
    <Pressable
      className="absolute top-3 right-3 flex-row gap-2 items-center justify-center bg-customized-blue-100 py-3 px-5 rounded-full"
      onPress={() => onPress(!subscribed)}
    >
      {subscribed ? (
        <Feather name="check" size={18} color="green" />
      ) : (
        <Feather name="plus" size={18} color="white" />
      )}
      <Text className="text-white text-lg">
        {subscriptions}/{minSubscriptions}
      </Text>
    </Pressable>
  );
}
