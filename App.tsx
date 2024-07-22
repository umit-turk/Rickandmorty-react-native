import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Character } from './src/types';
import { getCharacters } from './src/api';
import styles from './src/styles';

function App(): React.JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((character) => 
        (selectedStatus ? character.status === selectedStatus : true) &&
        (selectedLocations.length > 0 ? selectedLocations.includes(character.location.name) : true)
      )
    );
  }, [selectedStatus, selectedLocations, characters]);

  const toggleLocation = (location: string) => {
    setSelectedLocations((prevLocations) =>
      prevLocations.includes(location)
        ? prevLocations.filter((loc) => loc !== location)
        : [...prevLocations, location]
    );
  };

  const uniqueLocations = Array.from(new Set(characters.map((character) => character.location.name)));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        {['', 'Alive', 'Dead', 'unknown'].map(status => (
          <TouchableOpacity
            key={status}
            style={[styles.filterButton, selectedStatus === status && styles.selectedFilter]}
            onPress={() => setSelectedStatus(status)}
          >
            <Text style={styles.filterText}>{status || 'All'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView horizontal contentContainerStyle={styles.locationContainer} showsHorizontalScrollIndicator={false}>
        {uniqueLocations.map((location) => (
          <TouchableOpacity
            key={location}
            style={[styles.locationButton, selectedLocations.includes(location) && styles.selectedLocation]}
            onPress={() => toggleLocation(location)}
          >
            <Text style={styles.filterText}>{location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredCharacters}
        renderItem={({ item }: { item: Character }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.location}>{item.location.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default App;
