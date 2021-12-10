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

export default function Section3() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius:25 ,
            backgroundColor: "peru",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
        </View>

        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, color: "red" }}>Excellent</Text>
          <Text style={{ color: "black" }}>See 801 reviews</Text>
        </View>
      </View>
    </View>
  );
}
