import { ViewIngredients } from "./ViewIngredients";
import { render, screen } from "@testing-library/react";

describe("ViewIngredients", () => {
  const ingredients = [
    {
      recipeIngredientID: 1,
      ingredient: "Egg",
      ingredientDescription: "A chickens egg",
      ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
      quantity: 2,
      measurement: "Whole",
    },
    {
      recipeIngredientID: 45,
      ingredient: "Milk",
      ingredientDescription: "A chickens egg",
      ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
      quantity: 1,
      measurement: "Liter",
    },
    {
      recipeIngredientID: 17,
      ingredient: "Sugar",
      ingredientDescription: "A chickens egg",
      ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
      quantity: 200,
      measurement: "Grams",
    },
    {
      recipeIngredientID: 18,
      ingredient: "Baking soda",
      ingredientDescription: "A chickens egg",
      ingredientInfoURL: "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEgg",
      quantity: 2,
      measurement: "Teaspoons",
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
        ingredient.quantity +
          " " +
          ingredient.measurement +
          " " +
          ingredient.ingredient
      );
      expect(ingredientText).toBeInTheDocument();
    });
  });

  it("should render `No ingredients exists for this recipe` if no ingredients are passed in", () => {
    render(<ViewIngredients />);

    const ingredientsTitle = screen.getByText("Ingredients");
    expect(ingredientsTitle).toBeInTheDocument();

    const noMethodMessage = screen.getByText(
      "No ingredients exists for this recipe"
    );
    expect(noMethodMessage).toBeInTheDocument();
  });
});
