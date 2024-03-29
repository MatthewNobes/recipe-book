import supabase from "../../supabase";

/**
 * Adds a favorite
 * @param {object} recipeID The ID of the recipe to be added to favorites
 * @param {object} userID The ID of the user who adds the favorite
 * @returns {number | undefined} the id of the created favorite or undefined
 */
export const addFavorite = async (recipeID, userID) => {
	const values = { recipe: recipeID, user: userID };
	const { data, error } = await supabase
		.from("favorites")
		.insert([values])
		.select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};
