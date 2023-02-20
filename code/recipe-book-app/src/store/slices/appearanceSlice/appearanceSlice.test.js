import appearanceSlice, {
	initialState,
	setFontSize,
	setIsDarkMode,
} from "./appearanceSlice";

describe("appearanceSlice", () => {
	it("should initialise slice with initialValue", () => {
		const sliceInitialValue = appearanceSlice(initialState, {
			type: "unknown",
		});
		expect(sliceInitialValue).toBe(initialState);
	});

	describe("setFontSize", () => {
		it("should update the fontSize property when passed an integer", () => {
			const newFontSize = 16;

			const updatedAppearance = appearanceSlice(
				initialState,
				setFontSize(newFontSize),
			);

			expect(updatedAppearance).toEqual({
				appearance: {
					fontSize: newFontSize,
					isDarkMode: initialState.appearance.isDarkMode,
				},
			});
		});

		it("should keep the fontSize property the same if passed a string", () => {
			const newFontSize = "hello";

			const updatedAppearance = appearanceSlice(
				initialState,
				setFontSize(newFontSize),
			);

			expect(updatedAppearance).toEqual(initialState);
		});

		it("should keep the fontSize property the same if passed a boolean", () => {
			const newFontSize = false;

			const updatedAppearance = appearanceSlice(
				initialState,
				setFontSize(newFontSize),
			);

			expect(updatedAppearance).toEqual(initialState);
		});

		it("should keep the fontSize property the same if passed a decimal", () => {
			const newFontSize = 14.6;

			const updatedAppearance = appearanceSlice(
				initialState,
				setFontSize(newFontSize),
			);

			expect(updatedAppearance).toEqual(initialState);
		});
	});

	describe("setIsDarkMode", () => {
		it("should update the isDarkMode property when passed a valid boolean", () => {
			const newIsDarkMode = false;

			const updatedAppearance = appearanceSlice(
				initialState,
				setIsDarkMode(newIsDarkMode),
			);

			expect(updatedAppearance).toEqual({
				appearance: {
					fontSize: initialState.appearance.fontSize,
					isDarkMode: newIsDarkMode,
				},
			});
		});

		it("should keep the isDarkMode property the same when passed a string", () => {
			const newIsDarkMode = "hello";

			const updatedAppearance = appearanceSlice(
				initialState,
				setIsDarkMode(newIsDarkMode),
			);

			expect(updatedAppearance).toEqual(initialState);
		});

		it("should keep the isDarkMode property the same when passed a number", () => {
			const newIsDarkMode = 54;

			const updatedAppearance = appearanceSlice(
				initialState,
				setIsDarkMode(newIsDarkMode),
			);

			expect(updatedAppearance).toEqual(initialState);
		});
	});
});
