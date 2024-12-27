import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
      }}
    >
      <Text>Id do produto: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
  },
  label: { fontSize: 16, color: "#FFF" },
});
