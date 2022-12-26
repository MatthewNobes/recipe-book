export const getDifficultyColour = (rating) => {
	if (rating <= 4) {
		return "success";
	} else if (rating <= 7) {
		return "warning";
	} else {
		return "error";
	}
};
