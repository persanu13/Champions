import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CardButton({ championName }: { championName: string }) {
  const router = useRouter();
  const handlePress = () => {
    router.push({
      pathname: "/champions/[id]",
      params: { id: championName }, // Exemplu cu ID-ul unui campion
    });
  };
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Details...</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0A1428", // Culoarea de fundal
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#A09B8C",
    borderWidth: 2,
    marginBottom: 10,
  },
  text: {
    color: "#C89B3C", // Culoarea textului
    fontSize: 16,
    fontWeight: "bold",
  },
});
