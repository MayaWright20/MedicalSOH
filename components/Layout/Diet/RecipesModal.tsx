import axios from "axios";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";



export default function RecipesModal(){

    useEffect(()=>{
        let response = axios.get("https://api.spoonacular.com/recipes/complexSearch")
        console.log('response', response);
    },[])
    


    return(
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10, 
        backgroundColor: 'yellow',
        height: '100%'
    }
})