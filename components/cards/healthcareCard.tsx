import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/COLORS";

export default function HealthcareCard({ children, text}){
    return(
        <View style={styles.container}>
            {children}
            <Text style={styles.text}>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        margin: 10,
        borderRadius: 15,
        padding: 15,
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 18
    }
});