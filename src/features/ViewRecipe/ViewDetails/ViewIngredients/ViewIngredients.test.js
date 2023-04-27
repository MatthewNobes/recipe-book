import { ViewIngredients } from "./ViewIngredients";
import { render, screen } from "@testing-library/react";

describe("ViewIngredients", () => {
	const ingredients = [
		'{"name":"Diced chicken","description":"Its chicken","quantity":200,"measurement":"g"}',
		'{"name": "Chopped leek","description":"Its leek","quantity":2,"measurement":""}',
		'{"name":"chicken stock","description":"Its chicken stock","quantity":400,"measurement":"ml"}',
	];

	it("should render the title `Ingredients`", () => {
		render(<ViewIngredients ingredients={ingredients} />);

		const ingredientsTitle = screen.getByText("Ingredients");
		expect(ingredientsTitle).toBeInTheDocument();
	});
	it("should render each ingredient and its quantity", () => {
		render(<ViewIngredients ingredients={ingredients} />);

		const ingredientText = screen.getByText(
			"200" + "g" + " " + "Diced chicken",
		);
		expect(ingredientText).toBeInTheDocument();
	});

	it("should render `No ingredients exists for this recipe` if no ingredients are passed in", () => {
		render(<ViewIngredients />);

		const ingredientsTitle = screen.getByText("Ingredients");
		expect(ingredientsTitle).toBeInTheDocument();

		const noMethodMessage = screen.getByText(
			"No ingredients exists for this recipe",
		);
		expect(noMethodMessage).toBeInTheDocument();
	});
});
