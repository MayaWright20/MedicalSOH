import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import Screen from "../../components/Layout/Screen";
import { COLORS } from "../../constants/COLORS";
import TabsModal from "../../components/Layout/TabsModal";

import PharmacyShopModal from "../../components/Layout/Pharmacy/PharmacyShopModal";
import PharmacyFavouritesModal from "../../components/Layout/Pharmacy/PharmacyFavouritesModal";


export default function PharmacyShopScreen(){

    return (
        <Screen childBackgroundColor={COLORS.WHITE} header="Pharmacy" backText={undefined} onBackBtnPress={undefined}>
            <TabsModal 
            tab1Text={"Shop"}
            tab2Text={"Favourties"} 
            modalView1={<PharmacyShopModal/>} 
            modalView2={<PharmacyFavouritesModal/>} 
            textColor1={COLORS.WHITE} 
            textColor2={COLORS.BLACK} 
            tab1underlayColor={COLORS.LIGHTEST_PURPLE} 
            tab2underlayColor={COLORS.LIGHTEST_PURPLE} 
            tabBackgroundColor1={COLORS.LIGHT_PURPLE} 
            tabBackgroundColor2={COLORS.PURPLE}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})