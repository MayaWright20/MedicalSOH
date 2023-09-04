import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

import Screen from "../../components/Layout/Screen";
import { COLORS } from "../../constants/COLORS";
import TabsModal from "../../components/Layout/TabsModal";

import RecipesModal from "../../components/Layout/Diet/RecipesModal";
import FavouriteRecipesModal from "../../components/Layout/Diet/FavouriteRecipesModal";



export default function DietScreen(){

    return (
        <Screen childBackgroundColor={COLORS.WHITE} header="Diet" backText={undefined} onBackBtnPress={undefined}>
            <TabsModal 
            tab1Text={"Recipes"}
            tab2Text={"Favourties"} 
            modalView1={<RecipesModal/>} 
            modalView2={<FavouriteRecipesModal/>} 
            textColor1={COLORS.WHITE} 
            textColor2={COLORS.BLACK} 
            tab1underlayColor={COLORS.LIGHTEST_PURPLE} 
            tab2underlayColor={COLORS.LIGHTEST_PURPLE} 
            tabBackgroundColor1={COLORS.WHITE} 
            tabBackgroundColor2={COLORS.PURPLE}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})