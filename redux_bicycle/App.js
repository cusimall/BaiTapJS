// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BicycleList from './components/BicycleList';
import BicycleDetail from './components/BicycleDetail';
import BicycleHome from './components/BicycleHome';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BicycleHome">
          <Stack.Screen name="BicycleHome" component={BicycleHome} options={{ headerShown: false }} />
          <Stack.Screen name="BicycleList" component={BicycleList} options={{ headerShown: false }} />
          <Stack.Screen name="BicycleDetail" component={BicycleDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
