/**
 * Checks if a string can be parsed as JSON or not
 * @param {string} potentialJSON  The potentially JSON parsable string
 * @returns {boolean} True if it can be parsed, false if not
 */
export const isValidJSON = (potentialJSON) => {
	if (typeof potentialJSON !== "string") return false;

	try {
		JSON.parse(potentialJSON);
		return true;
	} catch {
		return false;
	}
};
