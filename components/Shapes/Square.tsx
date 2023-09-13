import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Square({width, height, backgroundColor}){
    return(
        <View style={[{width, height, backgroundColor}]}>

        </View>
    )
}

// const styles = StyleSheet.create({
//     container:{
        
//     }
// })