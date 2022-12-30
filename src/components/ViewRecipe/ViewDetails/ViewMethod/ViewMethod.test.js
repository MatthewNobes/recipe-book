import { ViewMethod } from "./ViewMethod";
import { render, screen } from "@testing-library/react";

describe("ViewMethod", () => {
	const method = [
		{
			stepID: 1,
			stepText:
				"Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins, then pour over the rest and return to the oven for another 30 mins.",
			stepNumber: 1,
		},
		{
			stepID: 2,
			stepText:
				"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
			stepNumber: 2,
		},
		{
			stepID: 3,
			stepText: "Boil an egg",
			stepNumber: 3,
		},
		{
			stepID: 4,
			stepText: "Accelerate to 88mph",
			stepNumber: 4,
		},
		{
			stepID: 5,
			stepText:
				"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
			stepNumber: 5,
		},
		{
			stepID: 6,
			stepText: "Do something else",
			stepNumber: 6,
		},
	];

	it("should render the title `Method`", () => {
		render(<ViewMethod method={method} />);

		const methodTitle = screen.getByText("Method");
		expect(methodTitle).toBeInTheDocument();
	});
	it("should render the recipe method passed into it with the correct step numbers", () => {
		render(<ViewMethod method={method} />);

		const stepOneText = screen.getByText(method[0].stepText);
		expect(stepOneText).toBeInTheDocument();

		const stepOneNumber = screen.getByText(
			"Step " + method[0].stepNumber + ":",
		);
		expect(stepOneNumber).toBeInTheDocument();
	});

	it("should render `No method exists for this recipe` if no method is passed in", () => {
		render(<ViewMethod />);

		const methodTitle = screen.getByText("Method");
		expect(methodTitle).toBeInTheDocument();

		const noMethodMessage = screen.getByText(
			"No method exists for this recipe",
		);
		expect(noMethodMessage).toBeInTheDocument();
	});
});
