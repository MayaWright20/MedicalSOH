import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { FavouritesContext } from "../../../store/context/favourties";
import { Item } from "../../cards/RecipeItem";
import { getRandomRecipes } from "../../../utils/getRandomRecipes";
import { fetchMeals } from "../../../utils/database";
import { COLORS } from "../../../constants/COLORS";

export default function FavouriteRecipesModal() {
    const favCtx = useContext(FavouritesContext);
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        async function getRecipes() {
            const data = await getRandomRecipes();
            const favouriteRecipes = [];
            const mealsdb = await fetchMeals();

            
            data.map((item) => {
                if (favCtx.ids.includes(item.value.id)) {
                    favouriteRecipes.push(item)
                }
            })
            setRecipes(favouriteRecipes);
            

            // const finalFavs = [];

            // mealsdb.map((item)=>{
            //     if(recipes.includes(mealsdb.mealId)){
            //         finalFavs.push(item)
            //     }
            // })
            // setRecipes(finalFavs);
        }
        getRecipes()
    }, [favCtx.ids])

    console.log("res",recipes)

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <Item
                        key={item.value.id}
                        title={item.value.title}
                        imgUrl={item.value.image}
                        index={index}
                        id={item.value.id}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
});