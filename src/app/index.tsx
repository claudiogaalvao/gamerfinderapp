import { GameBanner } from "@/components/cards/gameBanner";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="bg-customized-blue-900 p-4">
      <View className="flex-1 gap-2">
        <GameBanner
          imageUri="https://assets.altarofgaming.com/wp-content/uploads/2021/11/valorant-game-cover-altar-of-gaming.jpg"
          locked={false}
        />
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
