import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "../../../constants/COLORS";

export default function PharmacyShopModal(){
    return(
        <View style={{backgroundColor: COLORS.LIGHT_PURPLE, flex: 1}}>
            <View style={styles.container}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        backgroundColor: 'pink',
        height: '100%'
    }
})