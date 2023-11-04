import supabase from "../../supabase";
import { getCurrentUsersFavorites } from "data/Favorites";

/**
 * Gets all the recipes in the recipe table
 * @returns {Array} Either full of recipes or empty
 */
export const getAllRecipes = async (
	lowerRangeIndex = 0,
	upperRangeIndex = 100,
) => {
	let { data, error, count } = await supabase
		.from("recipes")
		.select("*", { count: "exact" })
		.range(lowerRangeIndex, upperRangeIndex);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		const favorites = await getCurrentUsersFavorites();

		if (favorites) {
			const recipesWithFavorites = data.map((recipe) => {
				const updatedRecipe = recipe;
				updatedRecipe.isFavorite = false;
				if (favorites.includes(recipe.id)) {
					updatedRecipe.isFavorite = true;
				}
				return updatedRecipe;
			});
			return { data: recipesWithFavorites, count: count };
		} else {
			return { data: data, count: count };
		}
	}
};
