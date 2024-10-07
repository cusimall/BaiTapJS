import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon từ thư viện


const data = [
  {
    id: '1',
    image: require('./assets/ca.png'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
  },
  {
    id: '2',
    image: require('./assets/ga.png'),
    title: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: 'Shop LTD Food',
  },
  {
    id: '3',
    image: require('./assets/xacancau.png'),
    title: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '4',
    image: require('./assets/doxe.png'),
    title: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '5',
    image: require('./assets/lanhdao.png'),
    title: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
  },
  {
    id: '6',
    image: require('./assets/hieu.png'),
    title: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
  },
  {
    id: '7',
    image: require('./assets/trump.png'),
    title: 'Anh Trump',
    shop: 'Minh Long Book',
  },
  {
    id: '8',
    image: require('./assets/ga.png'),
    title: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
  },
  {
    id: '9',
    image: require('./assets/ca.png'),
    title: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
  },
];


const ShopItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={ item.image } style={styles.itemImage} />
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemShop}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);


const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Chat</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* Gọi Header */}
      <Header />

      {/* Gọi FlatList để hiển thị danh sách sản phẩm */}
      <FlatList
        data={data}
        renderItem={({ item }) => <ShopItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Các style của ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2196F3', 
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemShop: {
    fontSize: 12,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
