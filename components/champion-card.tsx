import { Champion } from "@/lib/definition";
import React from "react";
import CardButton from "./card-button";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

export default function ChampionCard({ champion }: { champion: Champion }) {
  const handlePress = (name: string) => {
    console.log(name);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.championName}>{champion.name}</Text>
      <Image
        source={{
          uri: `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${champion.image.full}`,
        }}
        style={styles.image}
      />

      <Text style={styles.championTitle}> {champion.title}</Text>
      <CardButton championName={champion.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#1E282D",
    padding: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 2,
    borderColor: "#C8AA6E",
    alignItems: "center",
    width: 250,
  },
  image: { width: 200, height: 200 },
  championName: {
    color: "#F0E6D2",
    fontSize: 26,
    marginBottom: 8,
    fontWeight: "bold",
  },
  championTitle: {
    color: "#F0E6D2",
    fontSize: 22,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
