import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipesDev";

/**
 * Used to delete a recipe from the recipe table
 * @param {number} id The Id of the recipe to delete
 * @returns {string} Either 'success' or 'failure'
 */
export const deleteRecipe = async (id) => {
	const { error } = await supabase.from(table).delete().eq("id", id);

	if (error) {
		console.log(error);
		return "failed";
	} else {
		return "success";
	}
};
