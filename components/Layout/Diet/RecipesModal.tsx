import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { getRandomRecipes } from "../../../utils/getRandomRecipes";
import { Item } from "../../cards/RecipeItem";

const RecipesModal = () => {
    const [randomRecipes, setRandomRecipes] = useState([]);

    useEffect(() => {
        async function getRecipes() {
            const data = await getRandomRecipes();
            setRandomRecipes(data)
        }
        getRecipes()
    }, []);

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

export default RecipesModal;