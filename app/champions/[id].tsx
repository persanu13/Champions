import { useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { fetchChampion } from "@/lib/actions";
import { Champion } from "@/lib/definition";
import BackArrow from "@/components/backArrow";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [champion, setChampion] = useState<Champion | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChampion(id as string);
        if (data) {
          setChampion(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0397AB" />
      </View>
    );
  }

  if (!champion) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Champion not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackArrow />
        <Text style={styles.title}>{champion.name}</Text>
        <Text style={styles.subtitle}>{champion.title}</Text>
      </View>

      <Image
        source={{
          uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
        }}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Champion Stats:</Text>
        <Text style={styles.text}>
          Health: {champion.stats.hp} (+{champion.stats.hpperlevel} per level)
        </Text>
        <Text style={styles.text}>
          Attack Damage: {champion.stats.attackdamage} (+
          {champion.stats.attackdamageperlevel} per level)
        </Text>
        <Text style={styles.text}>
          Armor: {champion.stats.armor} (+{champion.stats.armorperlevel} per
          level)
        </Text>
        <Text style={styles.text}>
          Magic Resist: {champion.stats.spellblock} (+
          {champion.stats.spellblockperlevel} per level)
        </Text>
        <Text style={styles.text}>
          Attack Speed: {champion.stats.attackspeed.toFixed(2)}
        </Text>

        <Text style={styles.sectionTitle}>Info:</Text>
        <Text style={styles.text}>Attack: {champion.info.attack}</Text>
        <Text style={styles.text}>Defense: {champion.info.defense}</Text>
        <Text style={styles.text}>Magic: {champion.info.magic}</Text>
        <Text style={styles.text}>Difficulty: {champion.info.difficulty}</Text>

        <Text style={styles.sectionTitle}>Tags:</Text>
        <Text style={styles.text}>{champion.tags.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#091428",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0A323C",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F0E6D2",
  },
  subtitle: {
    fontSize: 18,
    color: "#C8AA6E",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#0A1428",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F0E6D2",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#CDFAFA",
    marginBottom: 5,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#C89B3C",
  },
  arrowBack: {
    position: "absolute",
    left: 10,
    top: 10,
  },
});
