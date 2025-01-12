import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ChampionsButton() {
  const router = useRouter();
  const handlePress = () => {
    router.push("/champions");
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Champions</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0A1428", // Culoarea de fundal
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 170,
    borderColor: "#A09B8C",
    borderWidth: 2,
  },
  text: {
    color: "#C89B3C", // Culoarea textului
    fontSize: 16,
    fontWeight: "bold",
  },
});
