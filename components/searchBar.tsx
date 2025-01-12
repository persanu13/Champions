import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search champions..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FontAwesome size={28} name="search" color={"#000"} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "100%",
    maxWidth: 250,
    height: 40,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
