/**
 * Tests a passed in URL to check if it is in a valid format
 * @param {string} url A potential URL to be tests
 * @returns {boolean} True or false depending if the passed in value is a valid URL
 */
export const isURL = (url) => {
	const urlPattern = new RegExp(
		"^(https?:\\/\\/)?" + // validate protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
			"(\\#[-a-z\\d_]*)?$",
		"i",
	);
	return !!urlPattern.test(url);
};
