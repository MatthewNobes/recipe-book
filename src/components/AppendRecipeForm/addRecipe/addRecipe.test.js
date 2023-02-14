import { addRecipe } from "./addRecipe";
import { createServer } from "miragejs";

describe("addRecipe", () => {
	beforeEach(() => {
		createServer({
			routes() {
				this.post(
					"/api/method/step/add/:recipeID/:stepNumber/:stepText",
					(schema, request) => {
						return {
							data: {
								recipeStepID: 1,
								stepNumber: request.params.stepNumber,
								stepText: request.params.stepText,
								recipeID: request.params.recipeID,
							},
						};
					},
				);
				this.post(
					"/api/ingredients/add/:ingredientName/:ingredientDescription/:ingredientInfoURL/:recipeID/:measurementTypeID/:measurementSize",
					(schema, request) => {
						return {
							data: {
								recipeIngredientID: 1,
								ingredientName: request.params.ingredientName,
								ingredientDescription: request.params.ingredientDescription,
								ingredientInfoURL: request.params.ingredientInfoURL,
								measurementTypeID: request.params.measurementTypeID,
								measurementSize: request.params.measurementSize,
								recipeID: request.params.recipeID,
							},
						};
					},
				);
				this.post(
					"/api/recipes/add/:recipeName/:recipeDescription/:recipeDifficultyRating/:recipePrepTime/:recipeCookTime/:servingNumber/:recipeSource/:catagoryID/:countryID/:regionID",
					(schema, request) => {
						return {
							data: {
								recipeID: 1,
								recipeName: request.params.recipeName,
								recipeDescription: request.params.RecipeDecsription,
								difficultyRating: request.params.recipeDifficultyRating,
								recipePrepTime: request.params.recipePrepTime,
								recipeCookTime: request.params.recipeCookTime,
								servingNumber: request.params.servingNumber,
								recipeSource: request.params.recipeSource,
								categoryID: request.params.catagoryID,
								countryID: request.params.countryID,
								regionID: request.params.regionID,
							},
						};
					},
				);
			},
		});
	});

	it("should add the recipe, its ingredients and method and return back a recipe id", async () => {
		const idOfAddedRecipe = await addRecipe(
			{
				recipeName: "Test",
				recipeDescription: "Testing",
				difficultyRating: 4,
				recipePrepTime: "0:12",
				recipeCookTime: "1:00",
				servingNumber: 4,
				recipeSource: "hello",
				categoryID: 2,
				countryID: 1,
				regionID: 2,
			},
			[
				{
					ingredientName: "world",
					ingredientDescription: "Testing",
					ingredientInfoURL: "Test",
					measurementTypeID: 1,
					measurementSize: 230,
				},
				{
					ingredientName: "world",
					ingredientDescription: "Testing",
					ingredientInfoURL: "Test",
					measurementTypeID: 1,
					measurementSize: 230,
				},
			],
			[
				{ stepText: "Hello", stepNumber: 1 },
				{ stepText: "Hello", stepNumber: 2 },
			],
		);

		expect(typeof idOfAddedRecipe).toBe("number");
	});
});
