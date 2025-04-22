import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import ChatBar from "./components/chat-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efebfe",
    alignItems: "center",
    justifyContent: "center",
  },
});
