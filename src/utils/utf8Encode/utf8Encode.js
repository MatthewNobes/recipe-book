/**
 * A function to UTF8 encode strings
 * @param {String} valueToEncode The value to encode
 * @returns {String} The encoded value
 */
export const utf8Encode = (valueToEncode) => {
	return encodeURIComponent(valueToEncode);
};
