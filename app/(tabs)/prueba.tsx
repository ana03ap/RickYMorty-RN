import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Cards from '../../components/Cards';

// Define el tipo de los datos que esperas recibir de la API
interface Character {
  id: number;
  name: string;
  image: string;
  age: number;
  profession: string;
  nationality: {
    name: string;
  };
}

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Character[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://api-psicologos.vercel.app/');
      const json: Character[] = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Cards character={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Para renderizar en dos columnas
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loaderContainer: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
