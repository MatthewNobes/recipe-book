/* 
import { render, screen } from "@testing-library/react";
import { BasicDetailsForm } from "./BasicDetailsForm";

describe("BasicDetailsForm", () => {
	it("render the form with the correct fields", () => {
		let recipeValues = {
			name: "",
			description: "",
			difficultyRating: 0,
			prepTime: 0,
			cookTime: 0,
			source: "",
			servingNumber: 4,
			country: "",
			category: "",
			region: "",
			keywords: [],
			steps: [],
			ingredients: [],
			images: [],
		};
		const setRecipeFn = (values) => {
			recipeValues = values;
		};
		const handleNext = () => {
			console.log("handle next");
		};

		render(
			<BasicDetailsForm
				recipeValues={recipeValues}
				setRecipeFn={setRecipeFn}
				handleNext={handleNext}
				keywords={[]}
			/>,
		);

		expect(screen.getByRole("textbox", { name: /Name/i })).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", {
				name: /Description/i,
			}),
		).toBeInTheDocument();
		expect(screen.getByLabelText("Category")).toBeInTheDocument();
		expect(
			screen.getByRole("spinbutton", { name: /Difficulty Rating/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("spinbutton", {
				name: "Preparation time (in minutes)",
			}),
		).toBeInTheDocument();
		expect(
			screen.getByRole("spinbutton", { name: "Cooking time (in minutes)" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("spinbutton", { name: "Serving number" }),
		).toBeInTheDocument();
		expect(screen.getByLabelText("Country")).toBeInTheDocument();
		expect(screen.getByLabelText("Region")).toBeInTheDocument();
		expect(screen.getByLabelText("Vegetarian or Vegan")).toBeInTheDocument();
	});

	it("should render with a submit button labeled next", () => {
		let recipeValues = {
			name: "",
			description: "",
			difficultyRating: 0,
			prepTime: 0,
			cookTime: 0,
			source: "",
			servingNumber: 4,
			country: "",
			category: "",
			region: "",
			keywords: [],
			steps: [],
			ingredients: [],
			images: [],
		};
		const setRecipeFn = (values) => {
			recipeValues = values;
		};
		const handleNext = () => {
			console.log("handle next");
		};

		render(
			<BasicDetailsForm
				recipeValues={recipeValues}
				setRecipeFn={setRecipeFn}
				handleNext={handleNext}
				keywords={[]}
			/>,
		);

		expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
	});
});
*/
