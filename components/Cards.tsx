import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Define el tipo de las props que recibe el componente Cards
interface CardsProps {
  character: {
    id: number;
    name: string;
    image: string;
    age: number;
    profession: string;
    nationality: {
      name: string;
    };
  };
}

const Cards: React.FC<CardsProps> = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoColumn}>
          <Text>age: {character.age}</Text>
          <Text>profession: {character.profession}</Text>
          <Text>nationality: {character.nationality.name}</Text>
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
    height: 500, 
  },
  image: {
    width: "100%",
    height: 200,
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
