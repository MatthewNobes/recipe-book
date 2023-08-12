import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipesDev";

/**
 * Adds a recipe to the recipe table
 * @param {object} values Object containing the recipe values to be added
 * @returns {number | undefined} the id of the created recipe or undefined
 */
export const addRecipe = async (values) => {
	const { data, error } = await supabase.from(table).insert([values]).select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};
