import supabase from "../../supabase";

const table = process.env.NODE_ENV === "production" ? "recipes" : "recipes-dev";

/**
 * Gets all the recipes in the recipe table
 * @returns {Array} Either full of recipes or empty
 */
export const getAllRecipes = async (
	lowerRangeIndex = 0,
	upperRangeIndex = 100,
) => {
	let { data, error, count } = await supabase
		.from(table)
		.select("*", { count: "exact" })
		.range(lowerRangeIndex, upperRangeIndex);

	if (error) {
		console.log(error);
		return [];
	}
	if (data) {
		return { data: data, count: count };
	}
};
