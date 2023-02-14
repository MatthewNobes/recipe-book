import { render, screen } from "@testing-library/react";
import { RecipeChip } from "./RecipeChip";

describe("RecipeChip", () => {
	it("should render the chip for cook time", () => {
		const time = "120";
		const label = "Cook: ";
		render(<RecipeChip value={time} label={label} />);

		const cookTimeText = screen.getByText(label + "02:00");
		expect(cookTimeText).toBeInTheDocument();
	});

	it("should render the chip for prep time", () => {
		const time = "120";
		const label = "Prep: ";
		render(<RecipeChip value={time} label={label} />);

		const prepTimeText = screen.getByText(label + "02:00");
		expect(prepTimeText).toBeInTheDocument();
	});

	it("should render `label 0:00` if the value passed is empty", () => {
		const time = "";
		const label = "Prep: ";
		render(<RecipeChip value={time} label={label} />);

		const prepTimeText = screen.getByText(label + "0:00");
		expect(prepTimeText).toBeInTheDocument();
	});
});
