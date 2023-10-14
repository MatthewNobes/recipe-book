import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";
import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "" : "Dev";

/**
 * Used to return the full details of users favorite recipes
 * @returns {Array } An array of the users favorite recipe ID's or null if there is not a logged in user
 */
export const getCurrentUsersFullFavorites = async () => {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		let { data, error } = await supabase
			.from("favorites" + table)
			.select(`recipes${table} (*)`)
			.eq("user", currentUser.id);

		if (error) {
			console.log(error);
			return [];
		}
		if (data) {
			if (process.env.NODE_ENV === "production") {
				const favorites = data.map((favorite) => {
					favorite.recipes.isFavorite = true;
					return favorite.recipe;
				});
				console.log(favorites);
				return favorites;
			} else {
				const favorites = data.map((favorite) => {
					favorite.recipesDev.isFavorite = true;
					return favorite.recipesDev;
				});
				return favorites;
			}
		}
	} else {
		return [];
	}
};
