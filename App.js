import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/modules/home/HomeScreen";
import ContactUs from "./src/modules/contactUs/contactUs";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
