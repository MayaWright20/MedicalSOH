import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../../constants/DIMENSIONS";

export default function ActionButton({title, onPress, backgroundColor, color}){
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor}]} onPress={onPress}>
            <Text style={[styles.title, {color}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: WINDOW_WIDTH /1.5,
        backgroundColor: 'pink',
        height: WINDOW_HEIGHT /18,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15
    },
    title:{
        fontWeight: 'bold'
    }
})