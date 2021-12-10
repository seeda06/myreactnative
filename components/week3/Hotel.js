import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Image, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function Hotel() {
    return (
        <View style={{ flex: 1 , padding: 10 }}>
            {/* View 1 */}
            <View style={{flexDirection : "row"}}>
                <Image style={{flex : 1 , resizeMode  : "cover" , aspectRatio : 5/2 , borderRadius : 20}} source={require('../../assets/week3/room-1.jpg')} />
            </View>

            {/* View 2 */}
            <View style={{flexDirection : "row" , marginTop : 10}}>
                <FontAwesome name="map-marker" size={32} color="orange" />
                <Text style={{fontSize : 20 , color :'gray'}}> 553 Cislason Radial</Text>
            </View>
            
            {/* View 3 */}
            <View style={{marginTop : 10}}>
                <Text style={{fontSize : 20}}>Boston Hotel
                </Text>
            </View>

            {/* View 4 */}
            <View style={{flexDirection : "row" , justifyContent : 'space-between'}} >
                <View style={{flexDirection : "row"}}>
                <FontAwesome name="star" size={32} color="orange" />
                <FontAwesome name="star" size={32} color="orange" />
                <FontAwesome name="star" size={32} color="orange" />
                <FontAwesome name="star" size={32} color="orange" />
                <FontAwesome name="star-half" size={32} color="orange" />
                </View>
                <View>
                    <Text style={{fontSize : 20 , color :'gray'}}>100 Reviews</Text>
                </View>
            </View>

            {/* View 5 */}
            <View style={{marginTop : 10}}>
                <Text style={{fontSize : 20 , color :'red'}} >$125</Text>
            </View>
        </View>
    );
}