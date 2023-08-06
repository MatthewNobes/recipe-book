import { getCurrentUser } from "data/authentication/getCurrentUser/getCurrentUser";
import supabase from "../../supabase";

const table =
	process.env.NODE_ENV === "production" ? "favorites" : "favorites-dev";

/**
 * Used to find a list of all the users favorite recipes
 * @returns {Array | null} An array of the users favorite recipe ID's or null if there is not a logged in user
 */
export const getCurrentUsersFavorites = async () => {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		let { data, error } = await supabase
			.from(table)
			.select("*")
			.eq("user", currentUser.id);

		if (error) {
			console.log(error);
			return [];
		}
		if (data) {
			const favorites = data.map((favorite) => {
				return favorite.recipe;
			});
			return favorites;
		}
	} else {
		return null;
	}
};
