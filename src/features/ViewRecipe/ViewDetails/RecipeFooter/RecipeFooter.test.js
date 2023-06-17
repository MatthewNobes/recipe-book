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

	it("should return a footer containing a button for the recipe source and a created date", () => {
		const source = "www.google.com";
		const stringDate =
			"Sat Sep 13 275760 01:00:00 GMT+0100 (British Summer Time)";
		const createdDate = new Date(stringDate);
		render(<RecipeFooter recipeSource={source} createdDate={createdDate} />);

		const sourceButton = screen.getByText("View Recipe Source");
		expect(sourceButton).toBeInTheDocument();

		const dateSection = screen.getByText("Added: " + stringDate);
		expect(dateSection).toBeInTheDocument();
	});

	it("should return a normal footer with source button but no created date if only passed a source", () => {
		const source = "www.google.com";
		render(<RecipeFooter recipeSource={source} />);

		const sourceButton = screen.getByText("View Recipe Source");
		expect(sourceButton).toBeInTheDocument();

		const dateSection = screen.getByTestId("no-created-date");
		expect(dateSection).toBeInTheDocument();
	});
});
