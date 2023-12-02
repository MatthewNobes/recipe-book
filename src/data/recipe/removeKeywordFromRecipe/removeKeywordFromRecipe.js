import supabase from "../../supabase";

/**
 * Removes a keyword from a recipe by updating the recipe with a new keywords array.
 * @param {*} recipeID the id of the recipe to remove the keyword from
 * @param {*} keywordPosition the number in the keywords array to remove
 */
export const removeKeywordFromRecipe = async (
	recipeID,
	currentKeywords,
	keywordPosition,
) => {
	// remove target keyword from array
	currentKeywords.splice(keywordPosition, 1);

	// push the change as an update
	const { data, error } = await supabase
		.from("recipes")
		.update({ keywords: currentKeywords })
		.eq("id", recipeID)
		.select();

	if (error) {
		console.log(error);
		return { result: "failed", error: error };
	} else {
		return { result: "success", value: data[0] };
	}
};
