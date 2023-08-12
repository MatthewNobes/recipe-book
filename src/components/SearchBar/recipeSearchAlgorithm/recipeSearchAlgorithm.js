export const recipeSearchAlgorithm = (searchTerm, recipesToSearch) => {
	let searchResults = [];
	const checkedSearchTerm = searchTermChecks(searchTerm);

	console.log(recipesToSearch);
	recipesToSearch.forEach((recipe) => {
		if (
			recipe.name.toLowerCase().match(checkedSearchTerm) ||
			recipe.description.toLowerCase().match(checkedSearchTerm) ||
			recipe.vegStatus.toLowerCase().match(checkedSearchTerm) ||
			recipe.keywords.includes(checkedSearchTerm)
		) {
			searchResults.push(recipe);
		} else {
			for (const ingredient of recipe.ingredients) {
				if (
					JSON.parse(ingredient).name.toLowerCase().match(checkedSearchTerm)
				) {
					searchResults.push(recipe);
					return;
				}
			}
		}
	});

	return searchResults;
};

export const searchTermChecks = (searchTerm) => {
	let updatedSearchTerm = searchTerm;

	if (searchTerm.endsWith(" ")) {
		updatedSearchTerm = updatedSearchTerm.slice(0, -1);
	}

	return updatedSearchTerm.toLowerCase();
};
