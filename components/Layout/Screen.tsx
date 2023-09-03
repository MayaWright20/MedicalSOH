import React from "react";
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from "./Header";
import { COLORS } from "../../constants/COLORS";
import { WINDOW_WIDTH } from "../../constants/DIMENSIONS";


export default function Screen({ children, header, backText, onBackBtnPress, childBackgroundColor }) {
    return (
        <View style={[styles.container]}>
            <SafeAreaView>
                <Header header={header} backText={backText} onPress={onBackBtnPress} />
                <View style={[{flex: 1, backgroundColor: {childBackgroundColor}, width: WINDOW_WIDTH}]}>
                {children}
                </View>
                
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.DARK_PURPLE,
        
    },
    logo: {
        alignItems: 'center'
    },

});