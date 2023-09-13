import React, { useContext, useState } from "react";
import { FavouritesContext } from "../../store/context/favourties";
import RecipeCard from "./RecipeCard";
import { insertMeal, deleteMeal, fetchMeals } from "../../utils/database";

export const Item = ({ title, key, imgUrl, index, id, iconName }) => {
    const favouriteMealsCtx = useContext(FavouritesContext);
    // this is not pure because id is changing recipe item and is called after - its changing the favourites heart name
    
    const mealId = id;


    const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);


    function changeFavouriteStatusHandler() {
        if (mealIsFavourite) {
            favouriteMealsCtx.removeFavourite(mealId);
            deleteMeal(mealId)
        } else {
            favouriteMealsCtx.addFavourite(mealId);
            console.log("mealId", mealId);
            insertMeal(mealId);
        }
    }

    return (
        <RecipeCard iconName={iconName} id={mealId} key={key} title={title} imgUrl={imgUrl} index={index} onFavouriteToggle={changeFavouriteStatusHandler} />
    );
};