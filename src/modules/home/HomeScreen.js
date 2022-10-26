import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button
        title="Contact Us"
        onPress={() => navigation.navigate("Contact Us")}
      />
    </View>
  );
}
