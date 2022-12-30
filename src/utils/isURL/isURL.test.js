import { isURL } from "./isURL";

describe("isURL", () => {
	it("should return true as the URL is valid", () => {
		const url = "wwww.google.com";

		const isValid = isURL(url);
		expect(isValid).toBe(true);
	});

	it("should return false as the URL is invalid", () => {
		const url = "google";

		const isValid = isURL(url);
		expect(isValid).toBe(false);
	});
});
