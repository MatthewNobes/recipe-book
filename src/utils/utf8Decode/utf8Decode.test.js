import { utf8Decode } from "./utf8Decode";

describe("utf8Decode", () => {
	it("should return the decoded parameter passed", () => {
		const valueToDecode =
			"https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FencodeURIComponent";

		expect(utf8Decode(valueToDecode)).toBe(
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent",
		);
	});

	it("should return the string unaffected if there are no characters that require encoding/decoding", () => {
		const valueToDecode = "Hello";

		expect(utf8Decode(valueToDecode)).toBe(valueToDecode);
	});
});
