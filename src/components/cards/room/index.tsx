import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Tag } from "@/components/tag";
import i18next from "@/i18n";

type RoomCardProps = {
  playerName: string;
  roomDescription: string;
  slots: number;
  gameMode: string;
  ranked?: string[];
};

export function RoomCard({
  playerName,
  roomDescription,
  slots,
  gameMode,
  ranked,
}: RoomCardProps) {
  return (
    <View className="rounded-lg bg-customized-blue-100 p-4">
      <View className="flex-row gap-4">
        <LinearGradient
          colors={["#FD1210", "#FF7101"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <Image
            className="rounded-full size-16"
            source={require("@/assets/examples/face-example.jpg")}
          />
        </LinearGradient>

        <View className="flex-1">
          <Text className="text-lg font-bold text-white">{playerName}</Text>
          <Text className="text-white flex">{roomDescription}</Text>
        </View>
      </View>
      <View className="flex-row flex-wrap pt-4 gap-2">
        <Tag name={i18next.t("slots", { count: slots })} iconName="users" />
        <Tag name={gameMode} iconName="layers" />
        {ranked &&
          (ranked.length > 1 ? (
            <Tag
              name={`${ranked[0]}, +${ranked?.length - 1}`}
              iconName="award"
            />
          ) : (
            <Tag name={`${ranked[0]}`} iconName="award" />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: 62,
    height: 62,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999, // <-- Outer Border Radius
  },
});
