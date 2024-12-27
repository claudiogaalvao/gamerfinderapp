import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";

import "@/styles/global.css";

export default function Layout() {
  return (
    // <View style={{ flex: 1 }}>
    //   <View
    //     style={{
    //       width: "100%",
    //       height: 70,
    //       backgroundColor: "#000",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text style={{ color: "white" }}>Header</Text>
    //   </View>
    //   <Slot />
    //   <View
    //     style={{
    //       width: "100%",
    //       height: 70,
    //       backgroundColor: "#000",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text style={{ color: "white" }}>Footer</Text>
    //   </View>
    // </View>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
        }}
      />
      <Stack.Screen name="signup" options={{ title: "Criar conta" }} />
    </Stack>
  );
}
