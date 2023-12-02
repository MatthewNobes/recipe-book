import supabase from "../../supabase";

/**
 * Adds a keyword to a recipe
 * @param {integer} recipeID the id of the recipe to remove the keyword from
 * @param {Array} currentKeywords the current keywords
 * @param {string} newKeyword the new keyword to add
 */
export const addKeyword = async (recipeID, currentKeywords, newKeyword) => {
	// adds new keyword to a new keyword array
	const newKeywords = currentKeywords.concat(newKeyword);

	// push the change as an update
	const { data, error } = await supabase
		.from("recipes")
		.update({ keywords: newKeywords })
		.eq("id", recipeID)
		.select();

	if (error) {
		console.log(error);
		return { result: "failed", error: error };
	} else {
		return { result: "success", value: data[0] };
	}
};
