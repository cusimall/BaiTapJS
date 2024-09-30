import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorSelectionScreen({ navigation, setSelectedColor, setSelectedImage }) {
  const colors = [
    { color: '#ADD8E6', image: 'https://cdn.tgdd.vn/Products/Images/42/209553/vsmart-live-6gb-white-600x600.jpg' },
    { color: '#FF0000', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/v/s/vsmart-star-3_3_.png' },
    { color: '#000000', image: 'https://khohangdienmay.vn/public/uploads/products/2020-02/vsmart-star-3.jpg' },
    { color: '#0000FF', image: 'https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-600x600.jpg' }
  ];

  const handleColorSelection = (color, image) => {
    setSelectedColor(color);
    setSelectedImage(image);
    // navigation.goBack(); // Quay lại màn hình ProductScreen sau khi chọn
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chọn một màu bên dưới:</Text>
      {colors.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.colorBox, { backgroundColor: item.color }]}
          onPress={() => handleColorSelection(item.color, item.image)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  colorBox: {
    width: 100,
    height: 100,
    marginBottom: 20,
  }
});
