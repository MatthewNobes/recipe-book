import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";
import supabase from "../../supabase";

/**
 * Used to return the full details of users favorite recipes
 * @returns {Array } An array of the users favorite recipe ID's or null if there is not a logged in user
 */
export const getCurrentUsersFullFavorites = async () => {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		let { data, error } = await supabase
			.from("favorites")
			.select("recipes (*)")
			.eq("user", currentUser.id);

		if (error) {
			console.log(error);
			return [];
		}
		if (data) {
			const favorites = data.map((favorite) => {
				favorite.recipes.isFavorite = true;
				return favorite.recipes;
			});

			return favorites;
		}
	} else {
		return [];
	}
};
