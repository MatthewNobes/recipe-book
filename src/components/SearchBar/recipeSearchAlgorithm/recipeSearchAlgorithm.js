export const recipeSearchAlgorithm = (searchTerm, recipesToSearch) => {
	let searchResults = [];
	const checkedSearchTerm = searchTermChecks(searchTerm);

	recipesToSearch.forEach((recipe) => {
		if (recipe.name.toLowerCase().match(checkedSearchTerm)) {
			searchResults.push(recipe);
		} else if (recipe.description.toLowerCase().match(checkedSearchTerm)) {
			searchResults.push(recipe);
		} else if (recipe.vegStatus.toLowerCase().match(checkedSearchTerm)) {
			searchResults.push(recipe);
		} else if (recipe.keywords.includes(checkedSearchTerm)) {
			searchResults.push(recipe);
		} else {
			recipe.ingredients.forEach((ingredient) => {
				if (
					JSON.parse(ingredient).name.toLowerCase().match(checkedSearchTerm)
				) {
					searchResults.push(recipe);
				}
			});
		}
	});

	return searchResults;
};

const searchTermChecks = (searchTerm) => {
	let updatedSearchTerm = searchTerm;

	if (searchTerm.endsWith(" ")) {
		updatedSearchTerm = updatedSearchTerm.slice(0, -1);
	}

	return updatedSearchTerm.toLowerCase();
};
