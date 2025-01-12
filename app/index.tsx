import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ChampionsButton from "@/components/button";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")} // Imaginea locală
      style={styles.background}
      resizeMode="cover" // Ajustează cum se afișează imaginea
    >
      <View style={styles.overlay}>
        <ChampionsButton />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Strat transparent (opțional)
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
