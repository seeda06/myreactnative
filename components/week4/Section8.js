import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../week3/MyIcon";
export default function Section8() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -10,
        margin: 20,
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text>Price</Text>
        <Text style={{ fontSize: 20, color: "red" }}>$399.99</Text>
        <Text>AVG/Night</Text>
      </View>
      <View style={styles.container}>
        <Button title="Book Now" color="chocolate" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 40,
  },
});
