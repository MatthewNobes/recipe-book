/**
 * Filters a passed in array of recipes to test if their total prep and cook times are within the provided range values.
 * @param {Array} results An array of recipes
 * @param {int} minTime The minimum amount of time for recipe prep and cook
 * @param {int} maxTime The maximum amount of time for recipe prep and cook
 * @returns {Array} A set of recipes which fit the time range for prep and cook combined
 */
export const filterRecipesForTimeRange = (results, minTime, maxTime) => {
	// filter results by cook and prep time added together
	const timeFilteredRecipes = results.data.filter((recipe) => {
		const combinedTime = recipe.cook_time + recipe.prep_time;
		if (combinedTime >= minTime && combinedTime <= maxTime) {
			return recipe;
		}
	});
	return timeFilteredRecipes;
};
