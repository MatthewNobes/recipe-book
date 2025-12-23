import { isValidJSON } from "./isValidJSON";

describe("isValidJSON", () => {
	it("should return true as the string is parsable as JSON", () => {
		const potentialJSON =
			'{"step":"Pour the gin, vermouth and Campari into a mixing glass or jug with ice. Stir well until the outside of the glass feels cold.","optional":true}';

		const isValid = isValidJSON(potentialJSON);
		expect(isValid).toBe(true);
	});

	it("should return false as the string is not parsable as JSON due to lacking a closing curly bracket", () => {
		const potentialJSON =
			'{"step":"Pour the gin, vermouth and Campari into a mixing glass or jug with ice. Stir well until the outside of the glass feels cold.","optional":true';

		const isValid = isValidJSON(potentialJSON);
		expect(isValid).toBe(false);
	});

	it("should return false as the string is parsable as JSON", () => {
		const potentialJSON = "google";

		const isValid = isValidJSON(potentialJSON);
		expect(isValid).toBe(false);
	});
});
