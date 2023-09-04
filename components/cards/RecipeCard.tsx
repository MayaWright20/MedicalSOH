import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { WINDOW_WIDTH } from "../../constants/DIMENSIONS";
import { COLORS } from "../../constants/COLORS";

export default function RecipeCard({ title, key, imgUrl, index }) {
    return (
        <View key={key} style={[styles.container, { borderColor: index % 2 === 0 ? COLORS.LIGHT_GREEN : COLORS.LIGHTEST_PURPLE },{ backgroundColor: index % 2 === 0 ? COLORS.LIGHT_GREEN : COLORS.LIGHTEST_PURPLE }]}>
            
            <Image source={{ uri: imgUrl }} style={{ width: WINDOW_WIDTH / 3, height: WINDOW_WIDTH / 3 }} />
            <Text style={[styles.title, { color: index % 2 === 0 ? COLORS.LIGHT_GREEN : COLORS.LIGHTEST_PURPLE }]}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: WINDOW_WIDTH / 3.25,
        height: WINDOW_WIDTH / 3.25,
        backgroundColor: 'green',
        borderRadius: 15,
        margin: 2,
        overflow: 'hidden',
        borderWidth: 4,
    },
    overlay: {
        // position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        position: 'absolute',
        fontWeight: 'bold'
    }

});