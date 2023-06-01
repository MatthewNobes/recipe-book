export const makeSecondaryText = (text) => {
	if (text.length > 70) {
		return text.slice(0, 70) + "...";
	} else {
		return text;
	}
};
