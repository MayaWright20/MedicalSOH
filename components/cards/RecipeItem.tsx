import React, { useContext } from "react";
import { FavouritesContext } from "../../store/context/favourties";
import RecipeCard from "./RecipeCard";
import { insertMeal, deleteMeal } from "../../utils/database";

export const Item = ({ title, key, imgUrl, index, id }) => {
    const favouriteMealsCtx = useContext(FavouritesContext);
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
        <RecipeCard iconName={mealIsFavourite ? 'heart' : 'heart-outline'} id={mealId} key={key} title={title} imgUrl={imgUrl} index={index} onFavouriteToggle={changeFavouriteStatusHandler} />
    );
};