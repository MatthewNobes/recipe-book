import supabase from "../../supabase";
import { getCurrentUsersFavorites } from "data/Favorites";

/**
 * Gets a recipe by its id
 * @param {number} id The id of the recipe to get
 * @returns {object | array} Either the found recipe object or an empty array
 */
export const getRecipeByID = async (id) => {
	let { data, error } = await supabase.from("recipes").select().eq("id", id);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		const favorites = await getCurrentUsersFavorites();

		if (favorites) {
			const recipeWithFavoriteMark = data[0];
			recipeWithFavoriteMark.isFavorite = false;
			if (favorites.includes(recipeWithFavoriteMark.id)) {
				recipeWithFavoriteMark.isFavorite = true;
			}
			return recipeWithFavoriteMark;
		} else {
			return data[0];
		}
	}
};
