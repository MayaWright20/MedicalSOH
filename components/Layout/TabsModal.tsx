import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import { COLORS } from "../../constants/COLORS";

export default function TabsModal({ tab1Text, tab2Text,modalView1, modalView2, textColor1, textColor2, tab1underlayColor,tab2underlayColor, tabBackgroundColor1, tabBackgroundColor2}) {
    const [modalView1Visible, setModalView1Visible] = useState(false);


    return (
        <View style={[{ backgroundColor: COLORS.WHITE, flex: 1 }]}>
            <View style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: COLORS.DARK_PURPLE }]}>
                <TouchableHighlight underlayColor={tab1underlayColor} activeOpacity={0.1} style={[styles.modalButton, { backgroundColor: !modalView1Visible ? tabBackgroundColor1 : tabBackgroundColor2 }]} onPress={() => setModalView1Visible(false)}>
                    <Text style={[styles.modalTitle, { color: modalView1Visible ? textColor1 : textColor2 }]}>{tab1Text}</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={tab2underlayColor} activeOpacity={0.5} style={[styles.modalButton, { backgroundColor: modalView1Visible ? tabBackgroundColor1 : tabBackgroundColor2 }]} onPress={() => setModalView1Visible(true)}>
                    <Text style={[styles.modalTitle, { color: !modalView1Visible ? textColor1 : textColor2 }]}>{tab2Text}</Text>
                </TouchableHighlight>
            </View>

            <View style={[{ display: !modalView1Visible ? 'flex' : 'none' }, styles.modalView]}>
                {modalView1}
            </View>
            <View style={[{ display: modalView1Visible ? 'flex' : 'none' }, styles.modalView]}>
                {modalView2}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    modalButton: {
        padding: 25,
        width: '50%',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopStartRadius: 15,
        borderStartEndRadius: 15
    },
    modalTitle: {
        fontSize: 20
    },
    modalView: {
        flex: 1
    }
})