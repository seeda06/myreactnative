import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from "react-native";

export default function Section6() {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        borderBottomColor: "#A9A9A9",
        borderColor: "white",
        paddingBottom: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 20 }}>Location</Text>
      </View>
      <View>
        <Text style={{ color: "gray" }}>
          218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
          incididunt ut labore et…
        </Text>
      </View>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }}
          source={require("../../assets/week3/map.jpg")}
        />
      </View>
    </View>
  );
}
