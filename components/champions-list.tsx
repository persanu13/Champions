import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";

import { fetchAllChampions } from "@/lib/actions";
import { Champion } from "@/lib/definition";
import ChampionCard from "./champion-card";
import SearchBar from "./searchBar";

export default function ChampionsList() {
  const [champions, setChampions] = useState<Champion[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllChampions();
        if (data) {
          setChampions(data);
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
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!champions || champions.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No champions found.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Champion }) => (
    <ChampionCard champion={item} />
  );

  const filteredChampions = champions.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={filteredChampions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 16,
    width: 250,
  },
});
