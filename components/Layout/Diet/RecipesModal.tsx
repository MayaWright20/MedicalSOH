import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import RecipeCard from "../../cards/RecipeCard";

const Item = ({ title, key, imgUrl, index }) => (
    <RecipeCard key={key} title={title} imgUrl={imgUrl} index={index}/>
);


const RecipesModal = () => {
    const SPOONACULAR_API = process.env.SPOONACULAR_API;
    const [randomRecipes, setRandomRecipes] = useState([]);

    useEffect(() => {
        async function getRandomRecipes() {
            try {
                const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API}&query=healthy&number=100`);
                
                const recipesData = [];
                for (const [key, value] of Object.entries(data.results)) {
                    const recipeObj = {
                        key, value
                    }
                    recipesData.push(recipeObj)
                }
                setRandomRecipes(recipesData)
                return

            } catch (error) {
                console.log("ERROR!", error)
            }
        }
        getRandomRecipes()
    }, []);

    console.log("REA",randomRecipes)
    return (
        <View style={styles.container}>
            <FlatList
                data={randomRecipes}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <Item 
                    key={item.value.id} 
                    title={item.value.title} 
                    imgUrl={item.value.image}
                    index={index}
                    />
                )}
            />
        </View>
    )
}

export default RecipesModal;
const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
})