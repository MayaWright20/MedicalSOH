import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import Logo from "../../assets/logos/soh_light.svg";
import { COLORS } from "../../constants/COLORS";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/DIMENSIONS";
import { AntDesign } from '@expo/vector-icons';

export default function Header({ header, backText, onPress }) {
    return (
        <View style={styles.logo}>
            <StatusBar style="auto" />
            <Logo width={200} />
            {backText === true ?
                <Pressable onPress={onPress} style={styles.backButton}>
                    <AntDesign name="left" size={20} color={COLORS.WHITE} />
                </Pressable>
                :
                <View></View>
            }
            <Text style={styles.headerText}>{header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        backgroundColor: COLORS.DARK_PURPLE,
        justifyContent: 'center',
        height: WINDOW_HEIGHT / 10,
        paddingBottom: 20,
    },
    headerText: {
        fontSize: 18,
        color: COLORS.WHITE,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        top: '5%',
        left: '5%'
    },
    backButtonText: {
        color: COLORS.WHITE
    }
});