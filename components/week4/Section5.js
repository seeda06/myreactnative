import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../week3/MyIcon";
export default function Section5() {
  return (
    <View
      style={{
        margin: 20,
        marginTop: -10,
        borderWidth: 1,
        borderBottomColor: "#A9A9A9",
        borderColor: "white",
        paddingBottom: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-around",
        }}
      >
        <MyIcon title="wifi" name="wifi" size={30} color="#6495ED" />
        <MyIcon title="coffee" name="coffee" size={30} color="#6495ED" />
        <MyIcon title="bath" name="bath" size={30} color="#6495ED" />
        <MyIcon title="car" name="car" size={30} color="#6495ED" />
        <MyIcon title="paw" name="paw" size={30} color="#6495ED" />
      </View>
    </View>
  );
}
