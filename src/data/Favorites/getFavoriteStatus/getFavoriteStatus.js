import supabase from "../../supabase";

const table =
	process.env.NODE_ENV === "production" ? "favorites" : "favoritesDev";

/**
 * Gets the favorite status for a particular recipe and user
 * @param {integer} recipeID The ID of the recipe you are looking for
 * @param {integer} userID The ID of the user you are looking for
 * @returns {Boolean} Either true or false for the value of the favorite status or undefined if the function fails
 */
export const getFavoriteStatus = async (recipeID, userID) => {
	const { data, error } = await supabase
		.from(table)
		.select()
		.eq("recipe", recipeID)
		.eq("user", userID);

	if (error) {
		return false;
	} else {
		if (data.length > 0) {
			return { data: true };
		} else {
			return { data: false };
		}
	}
};
