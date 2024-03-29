import supabase from "../../supabase";

/**
 * Removes a favorite
 * @param {object} recipeID The ID of the recipe to be remove from favorites
 * @param {object} userID The ID of the user who is removing the recipe from their favorites
 * @returns {Boolean} True if it succeeded, false if it failed
 */
export const removeFavorite = async (recipeID, userID) => {
	const { error } = await supabase
		.from("favorites")
		.delete()
		.eq("recipe", recipeID)
		.eq("user", userID);

	if (error) {
		return false;
	} else {
		return true;
	}
};
