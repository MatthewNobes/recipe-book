import { addIngredient } from "./addIngredient";
import { createServer } from "miragejs";

//need a new route that can add an ingredient and link it to a recipe, while also taking in its quantities
describe("addIngredient", () => {
	beforeEach(() => {
		createServer({
			routes() {
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
			},
		});
	});

	it("should add the ingredient", async () => {
		const ingredient = {
			ingredientName: "Hello",
			ingredientDescription: "Hello World",
			ingredientInfoURL:
				"https://www.javascripttutorial.net/javascript-fetch-api/",
		};
		const recipeID = 1;
		const measurementTypeID = 2;
		const measurementSize = 250;

		const ingredientResponse = await addIngredient(
			ingredient,
			recipeID,
			measurementTypeID,
			measurementSize,
		);
		expect(typeof ingredientResponse).toBe("object");
		expect(ingredientResponse.status).toBe(201);
		expect(ingredientResponse._bodyText).toBe(
			'{"data":{"recipeIngredientID":1,"ingredientName":"Hello","ingredientDescription":"Hello World","ingredientInfoURL":"https://www.javascripttutorial.net/javascript-fetch-api/","measurementTypeID":"2","measurementSize":"250","recipeID":"1"}}',
		);
	});

	it("should add the ingredient, even if the description is an empty string", async () => {
		const ingredient = {
			ingredientName: "Hello",
			ingredientDescription: null,
			ingredientInfoURL:
				"https://www.javascripttutorial.net/javascript-fetch-api/",
		};
		const recipeID = 1;
		const measurementTypeID = 2;
		const measurementSize = 250;

		const ingredientResponse = await addIngredient(
			ingredient,
			recipeID,
			measurementTypeID,
			measurementSize,
		);
		expect(typeof ingredientResponse).toBe("object");
		expect(ingredientResponse.status).toBe(201);
		expect(ingredientResponse._bodyText).toBe(
			'{"data":{"recipeIngredientID":1,"ingredientName":"Hello","ingredientDescription":"null","ingredientInfoURL":"https://www.javascripttutorial.net/javascript-fetch-api/","measurementTypeID":"2","measurementSize":"250","recipeID":"1"}}',
		);
	});

	it("should return Invalid parameters if not passed an ingredient name", async () => {
		const ingredient = {
			ingredientDescription: "Hello World",
			ingredientInfoURL:
				"https://www.javascripttutorial.net/javascript-fetch-api/",
		};
		const recipeID = 1;
		const measurementTypeID = 2;
		const measurementSize = 250;

		const ingredientResponse = await addIngredient(
			ingredient,
			recipeID,
			measurementTypeID,
			measurementSize,
		);

		expect(typeof ingredientResponse).toBe("string");
		expect(ingredientResponse).toBe("Invalid parameters");
	});

	it("should return Invalid parameters if not passed an ingredient name of type number", async () => {
		const ingredient = {
			ingredientName: 3,
			ingredientDescription: "Hello World",
			ingredientInfoURL:
				"https://www.javascripttutorial.net/javascript-fetch-api/",
		};
		const recipeID = 1;
		const measurementTypeID = 2;
		const measurementSize = 250;

		const ingredientResponse = await addIngredient(
			ingredient,
			recipeID,
			measurementTypeID,
			measurementSize,
		);

		expect(typeof ingredientResponse).toBe("string");
		expect(ingredientResponse).toBe("Invalid parameters");
	});
});
