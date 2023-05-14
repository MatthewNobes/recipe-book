import { render, screen } from "@testing-library/react";
import { VegStatusChip } from "./VegStatusChip";

describe("VegStatusChip", () => {
	it("should render the VegStatusChip with a valid status of Vegan", () => {
		render(<VegStatusChip vegStatus={"Vegan"} />);

		const chip = screen.getByText("Vegan");
		expect(chip).toBeInTheDocument();
	});

	it("should render the VegStatusChip with a valid status of Vegetarian", () => {
		render(<VegStatusChip vegStatus={"Vegetarian"} />);

		const chip = screen.getByText("Vegetarian");
		expect(chip).toBeInTheDocument();
	});

	it("should return a test id div when not passed a status", () => {
		render(<VegStatusChip vegStatus={"Bingo"} />);

		const emptyDiv = screen.getByTestId("notVeg");
		expect(emptyDiv).toBeInTheDocument();
	});
});
