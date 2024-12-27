import { Link, router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function SignUp() {
  const { name } = useLocalSearchParams();

  function onBack() {
    router.back();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 34,
      }}
    >
      <Text>Criar conta screen</Text>
      <Link href="/">Voltar</Link>
      <TouchableOpacity onPress={onBack}>
        <Text>Voltar (navegacao imperativa)</Text>
      </TouchableOpacity>
      <Text>Parametro recebido: {name}</Text>
    </View>
  );
}
