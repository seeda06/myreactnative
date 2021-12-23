import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import TourItem from "./TourItem";

export default function Event(props) {
  const [upcoming, setupcoming] = useState([]);
  const Upcoming = async () => {
    try {
      let promise = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      let data = await promise.json();
      console.log("Load Data : ", data);
      //SET STATE
      setupcoming(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    Upcoming();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, marginVertical: 5 }}>Up Coming Event</Text>
      <Text style={{ color: "gray" }}>What's the Worst That Could Happend</Text>
      <FlatList
        horizontal={true}
        // data={tours}
        data={upcoming}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10 }}>
              <Image
                style={{
                  width: Dimensions.get("screen").width / 1.4,
                  height: 150,
                  borderRadius: 10,
                }}
                source={{ uri: item.uri }}
              />

              <View
                style={{
                  flexDirection: "row",
                  marginTop: -10,
                  height: 90,
                  width: Dimensions.get("screen").width / 1.4,
                  paddingHorizontal: 10,
                  backgroundColor: "lightyellow",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderColor: "gray",
                  borderWidth:1
                }}
              >
                <View style={{ alignItems: "center", padding: 10 }}>
                  <Text style={{ fontSize: 20, color: "red" }}>
                    {item.month}
                  </Text>
                  <Text style={{ fontSize: 20, color: "gray" }}>
                    {item.date}
                  </Text>
                </View>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 20, color: "black" }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: "gray" }}>{item.datetime}</Text>
                  <Text style={{ color: "gray" }}>{item.place}</Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
