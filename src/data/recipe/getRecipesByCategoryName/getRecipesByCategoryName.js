import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

/**
 * Gets the all the recipes for a certain category
 * @param {string} categoryName the category name to look for
 * @returns {Array} Either an array of recipes or an empty array
 */
export const getRecipesByCategoryName = async (categoryName) => {
	let { data, error } = await supabase
		.from(table)
		.select()
		.eq("category", categoryName);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return data;
	}
};
