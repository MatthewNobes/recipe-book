export const addRecipe = (recipe, ingredients, method) => {
	fetch(
		process.env.REACT_APP_API_URL +
			"/recipes/add/" +
			recipe.recipeName +
			"/" +
			recipe.recipeDescription +
			"/" +
			recipe.recipeDifficultyRating +
			"/" +
			recipe.recipePrepTime +
			"/" +
			recipe.recipeCookTime +
			"/" +
			recipe.servingNumber +
			"/" +
			recipe.recipeSource +
			"/" +
			recipe.catagoryID +
			"/" +
			recipe.countryID +
			"/" +
			recipe.regionID,
	)
		.then((response) => response.json())
		.then((data) => console.log(data));

	ingredients.forEach((ingredient) => {
		console.log(
			ingredient.stepNumber,
			ingredient.quantity,
			ingredient.measurementType,
		);
		// if the measurement does not exist then it needs to be created, if it exists then it needs to be linked
		fetch(
			process.env.REACT_APP_API_URL +
				"/ingredients/add/" +
				ingredient.ingredientName +
				"/" +
				ingredient.ingredientDescription +
				"/" +
				recipe.ingredientInfoURL,
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	});

	method.forEach((step) => {
		fetch(
			process.env.REACT_APP_API_URL +
				"/method/step/add/" +
				recipe.recipeID +
				"/" +
				step.stepNumber +
				"/" +
				step.stepText,
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	});
};
