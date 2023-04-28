import { render, screen } from "@testing-library/react";
import { RecipeFooter } from "./RecipeFooter";

describe("RecipeFooter", () => {
	it("should return a footer containing a button for the recipe source", () => {
		const source = "www.google.com";
		render(<RecipeFooter recipeSource={source} />);

		const sourceButton = screen.getByText("View Recipe Source");
		expect(sourceButton).toBeInTheDocument();
	});

	it("should return an empty <> tag if no source is passed in", () => {
		render(<RecipeFooter />);

		const sourceButton = screen.getByTestId("empty-footer");
		expect(sourceButton).toBeInTheDocument();
	});

	it("should return an empty <> tag if the source is not a valid url", () => {
		const source = "hello world";
		render(<RecipeFooter recipeSource={source} />);

		const sourceButton = screen.getByTestId("empty-footer");
		expect(sourceButton).toBeInTheDocument();
	});
});
