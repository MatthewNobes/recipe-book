import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipesDev";

/**
 * Used to update an existing recipe
 * @param {number} idToUpdate The id of the recipe to update
 * @param {object} values The updated recipe values
 * @returns The id of the updated recipe
 */
export const updateRecipe = async (idToUpdate, values) => {
	const { data, error } = await supabase
		.from(table)
		.update(values)
		.eq("id", idToUpdate)
		.select();

	if (error) {
		return undefined;
	}
	if (data) {
		return data[0].id;
	}
};
