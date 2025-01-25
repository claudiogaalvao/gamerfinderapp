import gamesService, { Game } from "@/api/services/gamesService";
import { GameBanner } from "@/components/cards/gameBanner";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export default function Index() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await gamesService.getGames();
        setGames(data);
      } catch (error) {
        setError("Erro ao carregar usuários");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView className="bg-customized-blue-900 p-4">
      <View className="flex-1 gap-2">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            imageUri={game.bannerUrl}
            locked={game.locked}
            subscriptions={game.subscriptions}
            minSubscriptions={game.minSubscriptions}
            openRooms={game.rooms}
          />
        ))}
      </View>
    </ScrollView>
  );
}

// export default function Index() {
//   function signUp() {
//     router.navigate("/signup");
//   }
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 32,
//       }}
//     >
//       <Text>Tela inicial</Text>
//       <Link href="/signup">Criar conta</Link>
//       <Link href="/signup" asChild>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.label}>Criar conta</Text>
//         </TouchableOpacity>
//       </Link>
//       <TouchableOpacity style={styles.button} onPress={signUp}>
//         <Text style={styles.label}>Criar conta (navegacao imperativa)</Text>
//       </TouchableOpacity>
//       <Link href={{ pathname: "/signup", params: { name: "Claudio" } }}>
//         Enviar parametro
//       </Link>
//       <Link href="/product/7">Abrir produto</Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "#000",
//     paddingHorizontal: 32,
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   label: { fontSize: 16, color: "#FFF" },
// });
