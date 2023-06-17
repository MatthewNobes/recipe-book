/**
 * Gets the welcome message based on the current time
 * @param {number} currentTime The current time
 * @returns {string} The welcome message
 */
export const getWelcomeMessage = (currentTime) => {
	if (currentTime < 12) {
		return "Good Morning!";
	} else if (currentTime < 17) {
		return "Good Afternoon!";
	} else {
		return "Good Evening!";
	}
};
