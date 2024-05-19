import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Cards = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoColumn}>
          <Text>Status: {character.status}</Text>
          <Text>Species: {character.species}</Text>
          <Text>Gender: {character.gender}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text>Type: {character.type}</Text>
          <Text>Origin: {character.origin.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "45%",
    height: 350, 
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  infoColumn: {
    flex: 1,
  },
});

export default Cards;
