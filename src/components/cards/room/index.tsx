import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Tag } from "@/components/tag";
import i18next from "@/i18n";

export function RoomCard() {
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
          <Text className="text-lg font-bold text-white">Claudio Galvão</Text>
          <Text className="text-white flex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            scelerisque, libero eu fringilla molestie, mi ligula fermentum
            justo, at volutpat.
          </Text>
        </View>
      </View>
      <View className="flex-row flex-wrap pt-4 gap-2">
        <Tag name={i18next.t("slots", { count: 2 })} iconName="users" />
        <Tag name="Sem classificação" iconName="layers" />
        <Tag name="Diamante I, +2" iconName="award" />
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
