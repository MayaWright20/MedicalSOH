import React, {useState, useContext} from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { WINDOW_WIDTH } from "../../constants/DIMENSIONS";
import { COLORS } from "../../constants/COLORS";


export default function RecipeCard({ title, imgUrl, index, id, onFavouriteToggle, iconName }) {

    return (
        <View id={id}  style={[styles.container, { borderColor: index % 2 === 0 ? COLORS.LIGHT_GREEN : COLORS.LIGHTEST_PURPLE },{ backgroundColor: index % 2 === 0 ? COLORS.LIGHT_GREEN : COLORS.LIGHTEST_PURPLE }]}>
            <Image source={{ uri: imgUrl }} style={{ width: WINDOW_WIDTH / 3, height: WINDOW_WIDTH / 3 }} />
            <Text style={[styles.title, { color: index % 2 === 0 ? COLORS.LIGHT_GREEN : COLORS.LIGHTEST_PURPLE }]}>{title}</Text>
            <Pressable style={styles.iconContainer} onPress={onFavouriteToggle}>
                <MaterialCommunityIcons name={iconName} color={index % 2 === 0 ? COLORS.LIGHT_GREEN : COLORS.LIGHTEST_PURPLE} size={35} />
            </Pressable>
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
    iconContainer:{
        position: 'absolute',
        top: 0,
        right: 0
    },
    title: {
        textAlign: 'center',
        position: 'absolute',
        fontWeight: 'bold'
    }

});