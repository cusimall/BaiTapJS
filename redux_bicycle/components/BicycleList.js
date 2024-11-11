import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchBicycles, setCategory } from '../slices/bicycleSlice';

const BicycleList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, selectedCategory, loading, error } = useSelector((state) => state.bicycle);

  useEffect(() => {
    dispatch(fetchBicycles(selectedCategory));
  }, [selectedCategory]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BicycleDetail', { bicycle: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `${item.image}.jpg` }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
        <Text>Loading Bicycles...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text>Error loading bicycles: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', color: 'gray' }}>The world’s Best Bike</Text>
      <View style={styles.filterContainer}>
        {['', 'RoadBike', 'Moutain'].map((category) => ( // Adjusted spelling to "Moutain"
          <TouchableOpacity
            key={category}
            style={[styles.filterButton, selectedCategory === category && styles.selectedButton]}
            onPress={() => dispatch(setCategory(category))}>
            <Text style={styles.filterText}>{category || 'All'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#f5a623',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BicycleList;
