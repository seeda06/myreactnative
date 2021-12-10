import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Crad from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import Menu from '../../components/week3/Menu';
import MyIcon from '../../components/week3/MyIcon';
import Signup from '../../components/week3/Signup';

export default function Travel() {
    return (  
        <ScrollView>      
        <View style={{ flex: 1, flexDirection: 'column' ,paddingTop : 50  }}>
            {/* <Text> Week 3 </Text> */}
            {/* <Signup />
            <Crad/> */}
            {/* <Hotel/> */}
            {/* <MyIcon/> */}
            {/* <MyIcon title='หัวใจ' name='heart' size={30} color='orange'  /> */}
            <Menu/>
        </View>
        </ScrollView>
    );
}


