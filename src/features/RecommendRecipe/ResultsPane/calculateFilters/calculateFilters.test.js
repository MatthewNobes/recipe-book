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

		expect(filterResult.minTime).toBe(0);
		expect(filterResult.maxTime).toBe(30);
		expect(filterResult.vegStatus).toBe("");
		expect(filterResult.region).toBe("Mediterranean");
		expect(filterResult.category).toStrictEqual(["Soup", "Appetiser"]);
	});

	const questionsArray = questions.questions;

	describe("should test all categories available", () => {
		questionsArray[0].options.forEach((option) => {
			it(`will test the category option ${option}`, () => {
				const answers = [
					option,
					"Quick meal (Less than 30 mins)",
					"Mediterranean",
					"None",
				];

				const filterResult = calculateFilters(answers);

				let resultantCategory = [];
				if (option === "Dinner") {
					resultantCategory = ["Entrée"];
				} else if (option === "Drink") {
					resultantCategory = ["Drink"];
				} else if (option === "Snack") {
					resultantCategory = ["Cake", "Biscuit", "Patisserie", "Dessert"];
				} else if (option === "Small dish") {
					resultantCategory = ["Soup", "Appetiser"];
				}

				expect(filterResult.minTime).toBe(0);
				expect(filterResult.maxTime).toBe(30);
				expect(filterResult.category).toStrictEqual(resultantCategory);
				expect(filterResult.region).toBe("Mediterranean");
				expect(filterResult.vegStatus).toBe("");
			});
		});
	});

	describe("should test all time ranges available", () => {
		questionsArray[1].options.forEach((option) => {
			it(`will test the time range option ${option}`, () => {
				const answers = ["Small dish", option, "Mediterranean", "None"];

				const filterResult = calculateFilters(answers);

				let resultantMinTime = 0;
				let resultantMaxTime = 0;
				if (option === "Quick meal (Less than 30 mins)") {
					resultantMinTime = 0;
					resultantMaxTime = 30;
				} else if (option === "More time (Less than 1hr)") {
					resultantMinTime = 30;
					resultantMaxTime = 60;
				} else if (option === "Longer meal (Less than 1:30hr)") {
					resultantMinTime = 60;
					resultantMaxTime = 90;
				} else if (option === "More effort (More than 1:30hr)") {
					resultantMinTime = 90;
					resultantMaxTime = 1000;
				} else {
					resultantMinTime = 0;
					resultantMaxTime = 1000;
				}

				expect(filterResult.minTime).toBe(resultantMinTime);
				expect(filterResult.maxTime).toBe(resultantMaxTime);
				expect(filterResult.vegStatus).toBe("");
				expect(filterResult.region).toBe("Mediterranean");
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
					expect(filterResult.vegStatus).toBe("");
				} else {
					expect(filterResult.vegStatus).toBe(option);
				}

				expect(filterResult.minTime).toBe(0);
				expect(filterResult.maxTime).toBe(30);
				expect(filterResult.region).toBe("Mediterranean");
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

				expect(filterResult.minTime).toBe(0);
				expect(filterResult.maxTime).toBe(30);
				expect(filterResult.vegStatus).toBe("");
				expect(filterResult.category).toStrictEqual(["Soup", "Appetiser"]);
			});
		});
	});
});
