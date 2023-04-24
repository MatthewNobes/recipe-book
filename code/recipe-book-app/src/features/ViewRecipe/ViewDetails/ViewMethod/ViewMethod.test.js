import { ViewMethod } from "./ViewMethod";
import { render, screen } from "@testing-library/react";

describe("ViewMethod", () => {
	const method = [
		"Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins, then pour over the rest and return to the oven for another 30 mins.",
		"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
		"Boil an egg",
		"Accelerate to 88mph",
		"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
		"Do something else",
	];

	it("should render the title `Method`", () => {
		render(<ViewMethod method={method} />);

		const methodTitle = screen.getByText("Method");
		expect(methodTitle).toBeInTheDocument();
	});
	it("should render the recipe method passed into it with the correct step numbers", () => {
		render(<ViewMethod method={method} />);

		const stepOneText = screen.getByText(method[0]);
		expect(stepOneText).toBeInTheDocument();
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
