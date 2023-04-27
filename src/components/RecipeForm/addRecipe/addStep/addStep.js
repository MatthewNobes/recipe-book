/**
 * Adds a step and links it to a recipe
 * @param {object} step The step object containing the stepText and stepNumber
 * @param {int} recipeID The ID the recipe will be attached to
 * @returns The post request return object
 */
export const addStep = async (step, recipeID) => {
	if (
		typeof step.stepText === "string" &&
		typeof step.stepNumber === "number" &&
		typeof recipeID === "number"
	) {
		let apiURL;
		if (process.env.NODE_ENV === "test") {
			apiURL = "/api/method/step/add/";
		} else {
			apiURL = process.env.REACT_APP_API_URL + "/method/step/add/";
		}

		const fullURL =
			apiURL + recipeID + "/" + step.stepNumber + "/" + step.stepText;

		const response = await fetch(fullURL, { method: "POST" });

		return response;
	}
	return "Invalid parameters";
};
