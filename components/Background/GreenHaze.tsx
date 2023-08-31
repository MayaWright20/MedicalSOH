import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const image = { uri: "https://uploads-ssl.webflow.com/6201fc98dd25fefcb19294c6/625e16e11f23944d75d332c9_Morning%20Mint.jpg" };

export default function GreenHaze({ children }) {
    return (
        <ImageBackground source={image} resizeMode="cover"style={styles.image}>
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})