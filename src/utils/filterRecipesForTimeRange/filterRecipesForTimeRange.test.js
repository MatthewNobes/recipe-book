/* eslint-disable camelcase */
import { filterRecipesForTimeRange } from "./filterRecipesForTimeRange";

describe("filterRecipesForTimeRange", () => {
	const testDataSet = [
		{ id: 101, prep_time: 5, cook_time: 12 },
		{ id: 405, prep_time: 10, cook_time: 7 },
		{ id: 375, prep_time: 10, cook_time: 20 },
		{ id: 411, prep_time: 20, cook_time: 20 },
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
		expect(filteredRecipes[0].prep_time + filteredRecipes[0].cook_time).toBe(
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
		expect(filteredRecipes[0].prep_time + filteredRecipes[0].cook_time).toBe(
			maxTime,
		);
	});
});
