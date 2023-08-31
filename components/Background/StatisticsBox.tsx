import React from "react";
import {View, Text, StyleSheet} from "react-native";

import { COLORS } from "../../constants/COLORS";

export default function StatisticsBox({title, description}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
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
        fontSize: 40,
        color: COLORS.PURPLE,
    },
    description: {
        fontSize: 18
    }
})