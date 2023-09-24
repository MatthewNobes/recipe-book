import { filterRecipesForTimeRange } from "./filterRecipesForTimeRange";

describe("filterRecipesForTimeRange", () => {
	const testDataSet = [
		{ id: 101, prepTime: 5, cookTime: 12 },
		{ id: 405, prepTime: 10, cookTime: 7 },
		{ id: 375, prepTime: 10, cookTime: 20 },
		{ id: 411, prepTime: 20, cookTime: 20 },
	];

	it("should return 2 recipes when looking for ones between 15 and 20 minutes", () => {
		const minTime = 15;
		const maxTime = 20;
		const filteredRecipes = filterRecipesForTimeRange(
			testDataSet,
			minTime,
			maxTime,
		);

		expect(filteredRecipes.length).toBe(2);
		expect(filteredRecipes[0].id).toBe(101);
		expect(filteredRecipes[1].id).toBe(405);
	});

	it("should test the edge case on when a recipes total time is exactly equal to the minimum time", () => {
		const minTime = 30;
		const maxTime = 35;
		const filteredRecipes = filterRecipesForTimeRange(
			testDataSet,
			minTime,
			maxTime,
		);

		expect(filteredRecipes.length).toBe(1);
		expect(filteredRecipes[0].id).toBe(375);
		expect(filteredRecipes[0].prepTime + filteredRecipes[0].cookTime).toBe(
			minTime,
		);
	});

	it("should test the edge case on when a recipes total time is exactly equal to the maximum time", () => {
		const minTime = 35;
		const maxTime = 40;
		const filteredRecipes = filterRecipesForTimeRange(
			testDataSet,
			minTime,
			maxTime,
		);

		expect(filteredRecipes.length).toBe(1);
		expect(filteredRecipes[0].id).toBe(411);
		expect(filteredRecipes[0].prepTime + filteredRecipes[0].cookTime).toBe(
			maxTime,
		);
	});
});
