import { render, screen } from "@testing-library/react";
import { RecipeChip } from "./RecipeChip";

describe("RecipeChip", () => {
	it("should render the chip for cook time", () => {
		const time = 120;
		const label = "Cook: ";
		render(<RecipeChip value={time} label={label} />);

		const cookTimeText = screen.getByText(label + "2:00");
		expect(cookTimeText).toBeInTheDocument();
	});

	it("should render the chip for prep time", () => {
		const time = 120;
		const label = "Prep: ";
		render(<RecipeChip value={time} label={label} />);

		const prepTimeText = screen.getByText(label + "2:00");
		expect(prepTimeText).toBeInTheDocument();
	});

	it("should render `label N/A` if the value passed is empty", () => {
		const time = 0;
		const label = "Prep: ";
		render(<RecipeChip value={time} label={label} />);

		const prepTimeText = screen.getByText(label + "N/A");
		expect(prepTimeText).toBeInTheDocument();
	});
});
