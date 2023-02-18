import { ViewIngredients } from "./ViewIngredients";
import { render, screen } from "@testing-library/react";

describe("ViewIngredients", () => {
	const ingredients = [
		{
			recipeIngredientsID: 1,
			recipeID: 1,
			ingredientMeasurements: {
				ingredientMeasurementID: 1,
				measurementSize: 500,
				measurementType: { measurementTypeID: 3, measurementType: "Grams" },
				Ingredients: {
					ingredientID: 1,
					ingredientName: "Diced Beef",
					ingredientDescription: "Beef cut into 2cm chunks",
					ingredientInfoURL: null,
				},
			},
		},
		{
			recipeIngredientsID: 2,
			recipeID: 1,
			ingredientMeasurements: {
				ingredientMeasurementID: 1,
				measurementSize: 250,
				measurementType: { measurementTypeID: 3, measurementType: "Grams" },
				Ingredients: {
					ingredientID: 2,
					ingredientName: "Tomatoes",
					ingredientDescription: "",
					ingredientInfoURL: null,
				},
			},
		},
	];

	it("should render the title `Ingredients`", () => {
		render(<ViewIngredients ingredients={ingredients} />);

		const ingredientsTitle = screen.getByText("Ingredients");
		expect(ingredientsTitle).toBeInTheDocument();
	});
	it("should render each ingredient and its quantity", () => {
		render(<ViewIngredients ingredients={ingredients} />);

		ingredients.forEach((ingredient) => {
			const ingredientText = screen.getByText(
				ingredient.ingredientMeasurements.measurementSize +
					" " +
					ingredient.ingredientMeasurements.measurementType.measurementType +
					" " +
					ingredient.ingredientMeasurements.Ingredients.ingredientName,
			);
			expect(ingredientText).toBeInTheDocument();
		});
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
