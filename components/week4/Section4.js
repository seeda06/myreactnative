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

export default function Section4() {
  return (
    <View
      style={{
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        borderBottomColor: "#A9A9A9",
        borderColor: "white",
        paddingBottom: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 20 }}>Hotel Description</Text>
      </View>
      <View>
        <Text style={{ color: "gray" }}>
          218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor
          incididunt ut labore et dolore
        </Text>
      </View>
    </View>
  );
}
