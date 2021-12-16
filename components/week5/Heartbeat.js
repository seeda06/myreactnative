import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
  const [count, setCount] = useState("0");

  const onPressButton = () => {
    console.log("PRESSED!");
    let newCount = Number(count) + 1;

    setCount(newCount);
  };
  return (
    <View>
      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          marginVertical: 20,
        }}
      >
        <TouchableOpacity onPress={onPressButton}>
          <FontAwesome name="heart" size={60} color={"maroon"} />
        </TouchableOpacity>

        <Text style={{ fontSize: 50 }}>{count}</Text>
      </View>
    </View>
  );
}
