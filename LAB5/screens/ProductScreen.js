import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProductScreen({ navigation, selectedColor, selectedImage }) {
  const [rating, setRating] = useState(5);

  const handleIconPress = () => {
    Alert.alert('Thông tin đảm bảo giá!', 'Chúng tôi cam kết hoàn tiền nếu bạn tìm thấy nơi bán rẻ hơn!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: selectedImage }} style={styles.productImage} />
      </View>
      <Text style={styles.productTitle}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <View style={styles.productDetails}>
        <View style={styles.productRating}>
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              name="star"
              size={30}
              color={index < rating ? '#FFD700' : '#ccc'}
              onPress={() => setRating(index + 1)}
            />
          ))}
          <View style={styles.productReview}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>

        <View style={styles.productPrice}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.priceDiscount}>1.790.000 đ</Text>
        </View>

        <View style={styles.productNote}>
          <Text style={styles.productNoteText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <TouchableOpacity onPress={handleIconPress} style={styles.iconButton}>
            <Icon name="question-circle" size={20} color="#007BFF" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ColorSelectionScreen')}
      >
        <Text style={styles.buttonText}>4 MÀU - CHỌN MÀU</Text>
        <Icon name="chevron-right" size={20} color="#007BFF" style={styles.iconChev} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {

  },

  productImage: {
    width: 250,
    height: 350
  },

  productRating: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20
  },
  productDetails: {
  
  },
  productReview: {
    marginLeft: 20
  },
  productPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  priceDiscount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#A9A9A9',
    textDecorationLine: 'line-through',
    marginLeft: 60
  },
  productNote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  productNoteText: {
    color: "#DC143C",
    fontWeight: 'bold',
    fontSize: 14
  },
  iconButton: {
    marginLeft: 5
  },
  buyButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    marginTop: 100,

  },
  buyButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF'
  },
  button: {
    width: 300,
    height: 50,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10, // Góc bo tròn
    borderColor: '##000000',
    shadowColor: '#000', // Màu bóng đổ
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3, // Hiệu ứng bóng đổ trên Android
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    alignItems: 'center',
    fontSize: 16,
  },
  iconChev: {
    color: '#000000'
  }
});
