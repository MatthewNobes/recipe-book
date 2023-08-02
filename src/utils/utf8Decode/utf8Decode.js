/**
 * A function to decode UTF8 strings
 * @param {string} valueToDecode The UTF8 encoded value to decode
 * @returns {string} The decoded value
 */
export const utf8Decode = (valueToDecode) => {
	return decodeURIComponent(valueToDecode);
};
