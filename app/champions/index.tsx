import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChampionsList from "@/components/champions-list";
import BackArrow from "@/components/backArrow";

export default function ChampionsScreen() {
  return (
    <View style={styles.content}>
      <BackArrow />
      <Text style={styles.text}>Champions List</Text>
      <ChampionsList />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#091428", // Strat transparent (opțional)
  },
  text: {
    color: "#A09B8C",
    fontSize: 26,
    fontWeight: "bold",
  },
  arrowBack: {
    position: "absolute",
    left: 10,
    top: 10,
  },
});
