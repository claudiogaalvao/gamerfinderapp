import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type TagProps = {
  name: string;
  iconName: "users" | "award" | "layers";
};

export function Tag({ name, iconName }: TagProps) {
  return (
    <View className="flex-row border-2 border-white rounded-lg gap-2 py-1 px-2 justify-center items-center">
      <Feather name={iconName} size={12} color="white" />
      <Text className="text-white">{name}</Text>
    </View>
  );
}
