import { getDifficultyColour } from "./getDifficultyColour";

describe("getDifficultyColour", () => {
	it("should return `success` for a rating under 4", () => {
		const colourValue = getDifficultyColour(3);

		expect(colourValue).toBe("success");
	});

	it("should return `warning` for a rating greater than 4 but less than 7", () => {
		const colourValue = getDifficultyColour(6);

		expect(colourValue).toBe("warning");
	});

	it("should return `error` for a rating greater than 7", () => {
		const colourValue = getDifficultyColour(8);

		expect(colourValue).toBe("error");
	});
});
