import { render, screen } from "@testing-library/react";
import { RecipeImage } from "./RecipeImage";

describe("recipe image testing", () => {
	it("should have the alt tag of the recipe passed in", () => {
		const recipeName = "Ravioli";
		const imageSource =
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg/1200px-Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg";

		render(<RecipeImage imageSource={imageSource} recipeName={recipeName} />);

		const recipeImage = screen.getByRole("img");
		expect(recipeImage).toHaveAttribute("alt", recipeName);
	});

	it("should display the correct source image", () => {
		const recipeName = "Ravioli";
		const imageSource =
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg/1200px-Flickr_-_cyclonebill_-_Ravioli_med_skinke_og_asparges_i_mascarponecreme.jpg";

		render(<RecipeImage imageSource={imageSource} recipeName={recipeName} />);

		const recipeImage = screen.getByRole("img");
		expect(recipeImage).toHaveAttribute("src", `${imageSource}?webp=true`);
	});
});
