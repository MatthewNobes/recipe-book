import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

/**
 * Gets a recipe by its id
 * @param {number} id The id of the recipe to get
 * @returns {object | array} Either the found recipe object or an empty array
 */
export const getRecipeByID = async (id) => {
	let { data, error } = await supabase.from(table).select().eq("id", id);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data[0];
	}
};
