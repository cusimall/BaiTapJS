import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './screens/ProductScreen';
import ColorSelectionScreen from './screens/ColorSelectionScreen';

const Stack = createStackNavigator();

export default function App() {
  const [selectedColor, setSelectedColor] = useState('#ADD8E6'); // Mặc định là màu xanh nhạt
  const [selectedImage, setSelectedImage] = useState('https://cdnmedia.baotintuc.vn/Upload/XjfgEPYM30O8z6jY3MHxSw/files/2019/09/1409/8_%20%20xanh%20den.jpg'); // Ảnh mặc định

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductScreen">
          {props => (
            <ProductScreen
              {...props}
              selectedColor={selectedColor}
              selectedImage={selectedImage}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ColorSelectionScreen">
          {props => (
            <ColorSelectionScreen
              {...props}
              setSelectedColor={setSelectedColor}
              setSelectedImage={setSelectedImage}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
