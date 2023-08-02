/**
 * Used to generate the type of MUI colouring used for a recipes difficulty
 * @param {integer} rating The difficulty rating of the recipe
 * @returns {String} The text MUI colour to be used for this difficulty
 */
export const getDifficultyColour = (rating) => {
	if (rating <= 4) {
		return "success";
	} else if (rating <= 7) {
		return "warning";
	} else {
		return "error";
	}
};
