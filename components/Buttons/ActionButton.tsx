import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../../constants/DIMENSIONS";

export default function ActionButton({title, onPress, backgroundColor, color, underlayColor }){
    return(
        <TouchableHighlight activeOpacity={0.6} underlayColor={underlayColor} style={[styles.container, {backgroundColor}]} onPress={onPress}>
            <View>
            <Text style={[styles.title, {color}]}>{title}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container:{
        width: WINDOW_WIDTH /1.5,
        height: WINDOW_HEIGHT /18,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15
    },
    title:{
        fontWeight: 'bold'
    }
})