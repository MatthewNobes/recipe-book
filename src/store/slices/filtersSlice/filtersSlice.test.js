import filtersSlice, { initialState, setFilters } from "./filtersSlice";

describe("filtersSlice", () => {
	it("should initialise slice with initialValue", () => {
		const sliceInitialValue = filtersSlice(initialState, {
			type: "unknown",
		});
		expect(sliceInitialValue).toBe(initialState);
	});

	describe("setFilters", () => {
		it("should update the filters property when passed an updated object containing a new total time", () => {
			const newFilters = {
				country: "",
				difficulty: "",
				totalTime: "Less than 30 mins",
			};

			const updatedFilters = filtersSlice(initialState, setFilters(newFilters));

			expect(updatedFilters).toEqual({
				filters: newFilters,
			});
		});

		it("should update the filters property when passed an updated object containing a new difficulty", () => {
			const newFilters = {
				country: "",
				difficulty: "Medium 4-7",
				totalTime: "",
			};

			const updatedFilters = filtersSlice(initialState, setFilters(newFilters));

			expect(updatedFilters).toEqual({
				filters: newFilters,
			});
		});

		it("should update the filters property when passed an updated object containing a new country", () => {
			const newFilters = {
				country: "United Kingdom",
				difficulty: "",
				totalTime: "",
			};

			const updatedFilters = filtersSlice(initialState, setFilters(newFilters));

			expect(updatedFilters).toEqual({
				filters: newFilters,
			});
		});
	});
});
