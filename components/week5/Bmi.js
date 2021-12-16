import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  console.log("STATE : ", weight, height, bmi);
  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let output = weight / (((height / 100) * height) / 100);
    setBmi(output.toFixed(2));
    let description = "";
    if (output < 18.5) description = "Underweight";
    else if (output >= 18.5 && output <= 24.99)
      description = "Normal";
    else if (output >= 25 && output <= 29.99)
      description = "Overweight";
    else if (output >= 30 && output <= 39.99)
      description = "Obese";
    else description = "Morbidly Obese";
    
    setThisBMI(description);
  };

  return (
    //  ก้อน 1
    <View>
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          height: 150,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 10 }}>Weight (kg.)</Text>
        <TextInput
          style={{ fontSize: 20, marginTop: 10 }}
          placeholder="Input your Weight …"
          keyboardType="numeric"
          onChangeText={(newWeight) => setWeight(newWeight)}
          value={weight}
        />
      </View>
      {/* // ก้อน 2 */}
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          height: 150,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 10 }}>Height (cm.)</Text>
        <TextInput
          style={{ fontSize: 20, marginTop: 10 }}
          placeholder="Input your Height …"
          keyboardType="numeric"
          onChangeText={(newHeight) => setHeight(newHeight)}
          value={height}
        />
      </View>
      {/* ก้อน 3 */}
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            height: 150,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 25 }}>{bmi}</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            height: 150,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 25 }}>Normal</Text>
        </View>
      </View>
      {/* <Button title="Calculate" onPress={onPressButton} /> */}
      <TouchableOpacity onPress={onPressButton}>
    <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
        <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            Calculate
        </Text>
    </View>
</TouchableOpacity>

    </View>
  );
}
