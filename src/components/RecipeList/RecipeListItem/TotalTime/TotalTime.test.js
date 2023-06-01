import { render, screen } from "@testing-library/react";
import { TotalTime } from "./TotalTime";

describe("RecipeChip", () => {
	it("should render the chip showing the combined cook and prep times", () => {
		const cookTime = 120;
		const prepTime = 60;
		render(<TotalTime cookTime={cookTime} prepTime={prepTime} />);

		const timeChipText = screen.getByText("3:00");
		expect(timeChipText).toBeInTheDocument();
	});

	it("should render the chip showing the combined cook and prep times, even if prep time is null", () => {
		const cookTime = 120;
		const prepTime = 0;
		render(<TotalTime cookTime={cookTime} prepTime={prepTime} />);

		const timeChipText = screen.getByText("2:00");
		expect(timeChipText).toBeInTheDocument();
	});

	it("should render the chip showing the combined cook and prep times, even if cook time is null", () => {
		const cookTime = 0;
		const prepTime = 120;
		render(<TotalTime cookTime={cookTime} prepTime={prepTime} />);

		const timeChipText = screen.getByText("2:00");
		expect(timeChipText).toBeInTheDocument();
	});

	it("should render an empty div if both are 0", () => {
		const cookTime = 0;
		const prepTime = 0;
		render(<TotalTime cookTime={cookTime} prepTime={prepTime} />);

		const timeChipText = screen.getByTestId("no-prep-or-cook-required");
		expect(timeChipText).toBeInTheDocument();
	});
});
