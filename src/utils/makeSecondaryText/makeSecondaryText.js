/**
 * Used to cap a passed in string at 70 characters and end it with ... if it goes over 70 characters.
 * @param {String} text The value to be capped at 70v characters
 * @returns The capped version of the string
 */
export const makeSecondaryText = (text) => {
	if (text.length > 70) {
		return text.slice(0, 70) + "...";
	} else {
		return text;
	}
};
