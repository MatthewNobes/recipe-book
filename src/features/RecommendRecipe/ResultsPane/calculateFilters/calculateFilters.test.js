import { calculateFilters } from "./calculateFilters";
import questions from "../../RecommendRecipeForm/questions.json";

describe("calculateFilters", () => {
	it("should test the function behaves normally", () => {
		const answers = [
			"Small dish",
			"Quick meal (Less than 30 mins)",
			"Mediterranean",
			"None",
		];

		const filterResult = calculateFilters(answers);
		expect(filterResult.vegStatus).toBe("N/A");
		expect(filterResult.region).toBe("Mediterranean");
		expect(filterResult.category).toStrictEqual(["Soup", "Appetiser"]);
	});

	const questionsArray = questions.questions;

	describe("should test all regions available", () => {
		questionsArray[3].options.forEach((option) => {
			it(`will test the region option ${option}`, () => {
				const answers = [
					"Small dish",
					"Quick meal (Less than 30 mins)",
					option,
					"None",
				];

				const filterResult = calculateFilters(answers);
				if (option === "Any") {
					expect(filterResult.region).toBe("");
				} else {
					expect(filterResult.region).toBe(option);
				}

				expect(filterResult.vegStatus).toBe("N/A");
				expect(filterResult.category).toStrictEqual(["Soup", "Appetiser"]);
			});
		});
	});

	describe("should test all regions available", () => {
		questionsArray[3].options.forEach((option) => {
			it(`will test the region option ${option}`, () => {
				const answers = [
					"Small dish",
					"Quick meal (Less than 30 mins)",
					option,
					"None",
				];

				const filterResult = calculateFilters(answers);
				if (option === "Any") {
					expect(filterResult.region).toBe("");
				} else {
					expect(filterResult.region).toBe(option);
				}

				expect(filterResult.vegStatus).toBe("N/A");
				expect(filterResult.category).toStrictEqual(["Soup", "Appetiser"]);
			});
		});
	});

	describe("should test all veg options available", () => {
		questionsArray[2].options.forEach((option) => {
			it(`will test the veg option ${option}`, () => {
				const answers = [
					"Small dish",
					"Quick meal (Less than 30 mins)",
					"Mediterranean",
					option,
				];

				const filterResult = calculateFilters(answers);
				if (option === "None") {
					expect(filterResult.vegStatus).toBe("N/A");
				} else {
					expect(filterResult.vegStatus).toBe(option);
				}

				expect(filterResult.region).toBe("Mediterranean");
				expect(filterResult.category).toStrictEqual(["Soup", "Appetiser"]);
			});
		});
	});
});
