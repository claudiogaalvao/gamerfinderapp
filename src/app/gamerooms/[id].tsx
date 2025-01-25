import { RoomCard } from "@/components/cards/room";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function GameRooms() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView className="bg-customized-blue-900 p-4">
      <View className="flex-1 gap-2">
        <RoomCard
          playerName="Claudio Galvão"
          roomDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque, libero eu fringilla molestie, mi ligula fermentum
                justo, at volutpat."
          slots={2}
          gameMode="Competitivo"
          ranked={["Ferro I", "Ferro II", "Ferro III"]}
        />
        <RoomCard
          playerName="Jadson Barbosa"
          roomDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque."
          slots={1}
          gameMode="Sem classificação"
          ranked={["Diamante"]}
        />
      </View>
    </ScrollView>
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
