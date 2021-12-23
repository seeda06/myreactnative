import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View, Dimensions } from "react-native";

export default function TourItem(props) {
  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, marginVertical: 5 }}>
        Tour with FlatList
      </Text>
      <Text style={{ color: "gray" }}>
        Let find out what most interesting things
      </Text>
      <FlatList
        horizontal={true}
        data={tours}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10 }}>
              <Image
                style={{
                  width: Dimensions.get("screen").width / 2.0,
                  height: 150,
                  borderRadius: 10,
                }}
                source={{ uri: props.item.uri }}
              />

              <View
                style={{
                  marginTop: -30,
                  height: 30,
                  width: Dimensions.get("screen").width / 2.0,
                  paddingHorizontal: 10,
                  backgroundColor: "black",
                  opacity: 0.5,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <Text style={{ fontSize: 15, color: "white" }}>
                  {props.item.title}
                </Text>
              </View>
            </View>
            // <TourItem item={item} index={index} />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
