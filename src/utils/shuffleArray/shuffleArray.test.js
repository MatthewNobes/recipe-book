import { shuffleArray } from "./shuffleArray";

describe("shuffleArray", () => {
	it("should return an array", () => {
		const arrayOfItems = [120, 6, 54];
		const shuffledArray = shuffleArray(arrayOfItems);
		expect(Array.isArray(shuffledArray)).toBe(true);
	});

	it("should contain all the items in the original array", () => {
		const arrayOfItems = [120, 6, 54];
		const shuffledArray = shuffleArray(arrayOfItems);
		expect(shuffledArray.includes(arrayOfItems[0])).toBe(true);
		expect(shuffledArray.includes(arrayOfItems[1])).toBe(true);
		expect(shuffledArray.includes(arrayOfItems[2])).toBe(true);
	});
});
