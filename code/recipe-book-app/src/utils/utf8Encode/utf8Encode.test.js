import { utf8Encode } from "./utf8Encode";

describe("utf8Encode", () => {
	it("should return the decoded parameter passed", () => {
		const valueToEncode =
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent";
		expect(utf8Encode(valueToEncode)).toBe(
			"https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FencodeURIComponent",
		);
	});

	it("should return the string unaffected if there are no characters that require encoding", () => {
		const valueToEncode = "Hello";

		expect(utf8Encode(valueToEncode)).toBe(valueToEncode);
	});
});
