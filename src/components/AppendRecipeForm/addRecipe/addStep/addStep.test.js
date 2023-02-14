import { addStep } from "./addStep";
import { createServer } from "miragejs";

describe("addStep", () => {
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
			},
		});
	});

	it("should add the step", async () => {
		const step = { stepNumber: 1, stepText: "Hello World" };
		const recipeID = 1;

		const stepResponse = await addStep(step, recipeID);
		expect(typeof stepResponse).toBe("object");
		expect(stepResponse.status).toBe(201);
		expect(stepResponse._bodyText).toBe(
			'{"data":{"recipeStepID":1,"stepNumber":"1","stepText":"Hello World","recipeID":"1"}}',
		);
	});

	it("should return Invalid parameters if passed a string for the recipeID", async () => {
		const step = { stepNumber: 1, stepText: "Hello World" };
		const recipeID = "test";

		const stepResponse = await addStep(step, recipeID);
		expect(typeof stepResponse).toBe("string");
		expect(stepResponse).toBe("Invalid parameters");
	});

	it("should return Invalid parameters if passed a string for the stepNumber", async () => {
		const step = { stepNumber: "Test", stepText: "Hello World" };
		const recipeID = 2;

		const stepResponse = await addStep(step, recipeID);
		expect(typeof stepResponse).toBe("string");
		expect(stepResponse).toBe("Invalid parameters");
	});

	it("should return Invalid parameters if passed a number for the stepText", async () => {
		const step = { stepNumber: 1, stepText: 5 };
		const recipeID = 2;

		const stepResponse = await addStep(step, recipeID);
		expect(typeof stepResponse).toBe("string");
		expect(stepResponse).toBe("Invalid parameters");
	});

	it("should return Invalid parameters if the stepText is missing", async () => {
		const step = { stepNumber: 1 };
		const recipeID = 2;

		const stepResponse = await addStep(step, recipeID);
		expect(typeof stepResponse).toBe("string");
		expect(stepResponse).toBe("Invalid parameters");
	});

	it("should return Invalid parameters if the stepNumber is missing", async () => {
		const step = { stepText: "hello" };
		const recipeID = 2;

		const stepResponse = await addStep(step, recipeID);
		expect(typeof stepResponse).toBe("string");
		expect(stepResponse).toBe("Invalid parameters");
	});
});
