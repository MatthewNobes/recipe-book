import { ImageGallery } from "./ImageGallery";
import { render, screen } from "@testing-library/react";
import { utf8Decode } from "../../utils";
import { BrowserRouter } from "react-router-dom";

describe("Image gallery", () => {
	const recipes = [
		{
			id: 1,
			description: "This is a test description",
			images: [
				"https://www.sainsburysmagazine.co.uk/uploads/media/2400x1800/04/6624-Toffee-apple-pie.jpg",
			],
		},
	];
	it("should load the gallery with the supplied images", () => {
		render(
			<BrowserRouter>
				<ImageGallery recipes={recipes} howManyToDisplay={8} />
			</BrowserRouter>,
		);

		recipes.forEach((recipe) => {
			const image = screen.getByAltText(utf8Decode(recipe.description));
			expect(image).toBeInTheDocument();
		});
	});

	it("should only load the first two images from the recipe array", () => {
		render(
			<BrowserRouter>
				<ImageGallery recipes={recipes} howManyToDisplay={2} />
			</BrowserRouter>,
		);

		const imageOne = screen.getByAltText(utf8Decode(recipes[0].description));
		expect(imageOne).toBeInTheDocument();
	});
});
