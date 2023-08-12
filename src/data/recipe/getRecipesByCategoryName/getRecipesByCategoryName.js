import supabase from "../../supabase";
import { getCurrentUsersFavorites } from "data/Favorites";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipesDev";

/**
 * Gets the all the recipes for a certain category
 * @param {string} categoryName the category name to look for
 * @returns {Array} Either an array of recipes or an empty array
 */
export const getRecipesByCategoryName = async (categoryName) => {
	let { data, error } = await supabase
		.from(table)
		.select()
		.eq("category", categoryName);

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
			return { data: recipesWithFavorites };
		} else {
			return { data: data };
		}
	}
};
