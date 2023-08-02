/**
 * Converts the passed in number of minutes to a formatted hours string
 * @param {integer} totalMinutes The number of minutes to be converted
 * @returns {string} A string formatted to show the number of hours
 */
export const minutesToHours = (totalMinutes) => {
	const minutes = totalMinutes % 60;
	const hours = Math.floor(totalMinutes / 60);

	const padTo2Digits = (num) => {
		return num.toString().padStart(2, "0");
	};

	return `${hours}:${padTo2Digits(minutes)}`;
};
