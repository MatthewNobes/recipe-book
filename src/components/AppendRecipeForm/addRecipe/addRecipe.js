import { addStep } from "./addStep/addStep";
import { addIngredient } from "./addIngredient/addIngredient";
import { utf8Encode } from "../../../utils";

export const addRecipe = async (recipe, ingredients, method) => {
	let apiURL;

	if (process.env.NODE_ENV === "test") {
		apiURL = "/api";
	} else {
		apiURL = process.env.REACT_APP_API_URL;
	}

	try {
		const url =
			apiURL +
			"/recipes/add/" +
			(utf8Encode(recipe.recipeName) === ""
				? "null"
				: utf8Encode(recipe.recipeName)) +
			"/" +
			utf8Encode(recipe.recipeDescription) +
			"/" +
			(utf8Encode(recipe.difficultyRating) === ""
				? "0"
				: utf8Encode(recipe.difficultyRating)) +
			"/" +
			utf8Encode(recipe.recipePrepTime) +
			"/" +
			utf8Encode(recipe.recipeCookTime) +
			"/" +
			recipe.servingNumber +
			"/" +
			(utf8Encode(recipe.recipeSource) === ""
				? "null"
				: utf8Encode(recipe.recipeSource)) +
			"/" +
			(utf8Encode(recipe.categoryID) === ""
				? "null"
				: utf8Encode(recipe.categoryID)) +
			"/" +
			(utf8Encode(recipe.countryID) === ""
				? "null"
				: utf8Encode(recipe.countryID)) +
			"/" +
			(utf8Encode(recipe.regionID) === ""
				? "null"
				: utf8Encode(recipe.regionID));

		const addedRecipeID = await fetch(url, { method: "POST" })
			.then((response) => response.json())
			.then((data) => {
				return data.data.recipeID;
			})
			.catch(() => {
				throw "Recipe could not be added";
			});

		if (Number.isInteger(addedRecipeID) === false) {
			throw "Recipe could not be added";
		}

		try {
			ingredients.forEach(async (ingredient) => {
				try {
					const basicDetails = {
						ingredientName: ingredient.ingredientName,
						ingredientDescription: ingredient.ingredientDescription,
						ingredientInfoURL: ingredient.ingredientInfoURL,
					};
					// if the measurement does not exist then it needs to be created, if it exists then it needs to be linked
					const ingredientResponse = await addIngredient(
						basicDetails,
						addedRecipeID,
						ingredient.measurementTypeID,
						parseInt(ingredient.measurementSize),
					);
					if (ingredientResponse.status !== 201) {
						throw "Unable to add ingredient";
					}
				} catch (error) {
					return error;
				}
			});
		} catch (error) {
			return error;
		}

		try {
			method.forEach(async (step) => {
				try {
					const stepResponse = await addStep(step, addedRecipeID);
					if (stepResponse.status !== 201) {
						throw "Unable to add step";
					}
				} catch (error) {
					return error;
				}
			});
		} catch (error) {
			return error;
		}

		return addedRecipeID;
	} catch (error) {
		return error;
	}
};
