import React from "react";
import {View, Text, StyleSheet} from "react-native";

import { COLORS } from "../../constants/COLORS";

export default function RectagularTwoLineCard({title, description, fontSize}){
    return(
        <View style={styles.container}>
            <Text style={[styles.title, {fontSize}]}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.LIGHT_PURPLE,
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        margin: 5
    },
    title: {
        color: COLORS.PURPLE,
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        textAlign: 'center'
    }
})