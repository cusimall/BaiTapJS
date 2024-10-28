import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Import NavigationContainer
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen02 from "./components/Screen02"; // Ensure correct path

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen02">
        <Stack.Screen name="Screen02" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
