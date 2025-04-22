import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import React from "react";

type Props = {
  name: string;
};

const Icon = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name={name} size={24} color="white" />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8264ff",
  },
});
