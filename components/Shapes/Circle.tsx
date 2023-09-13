import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/COLORS';

export default function Circle({width, height, backgroundColor}) {
    return (
        <View style={[styles.container, {width, height, backgroundColor}]}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
    }
})