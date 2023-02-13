import { utf8Encode } from "../../../../utils";

/**
 *
 * @param {object} ingredient
 * @param {number} recipeID
 * @param {number} measurementTypeID
 * @param {number} measurementSize
 * @returns
 */
export const addIngredient = async (
	ingredient,
	recipeID,
	measurementTypeID,
	measurementSize,
) => {
	if (
		typeof ingredient.ingredientName === "string" &&
		(typeof ingredient.ingredientDescription === "string" ||
			ingredient.ingredientDescription === null) &&
		typeof ingredient.ingredientInfoURL === "string" &&
		typeof recipeID === "number" &&
		typeof measurementTypeID === "number" &&
		typeof measurementSize === "number"
	) {
		let apiURL;
		if (process.env.NODE_ENV === "test") {
			apiURL = "/api/ingredients/add/";
		} else {
			apiURL = process.env.REACT_APP_API_URL + "/ingredients/add/";
		}

		const fullURL =
			apiURL +
			utf8Encode(ingredient.ingredientName) +
			"/" +
			utf8Encode(ingredient.ingredientDescription) +
			"/" +
			utf8Encode(ingredient.ingredientInfoURL) +
			"/" +
			utf8Encode(recipeID) +
			"/" +
			utf8Encode(measurementTypeID) +
			"/" +
			utf8Encode(measurementSize);

		const response = await fetch(fullURL, { method: "POST" });

		return response;
	}
	return "Invalid parameters";
};
