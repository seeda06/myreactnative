import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "./MyIcon";

export default function Menu() {
  return (
    <View style={{flex:1, margin:50 ,padding:10 , borderWidth : 1 , borderColor : 'gray' , borderRadius : 20 }}>
      
        <View >
            <TextInput style={{fontSize:20}} placeholder="What're you looking for?" />
        </View>
        <View style={{flexDirection : "row", marginTop : 10 }}>
            <MyIcon title='Hotel' name='building' size={30} color='orange' />
            <MyIcon title='Tour' name='map-marker' size={30} color='orange' />
            <MyIcon title='Car' name='car' size={30} color='orange' />
            <MyIcon title='Flight' name='plane' size={30} color='orange' />

        </View>
        <View style={{flexDirection : "row", marginTop : 10 }}>
        <MyIcon title='Cruise' name='ship' size={30} color='orange' />
        <MyIcon title='Bus' name='bus' size={30} color='orange' />
        <MyIcon title='Event' name='star' size={30} color='orange' />
        <MyIcon title='More' name='ellipsis-h' size={30} color='orange' />

        </View>

     
    </View>
  );
}