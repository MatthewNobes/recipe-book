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
});
