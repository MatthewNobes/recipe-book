import { render, screen } from "@testing-library/react";
import { ServesChip } from "./ServesChip";

describe("ServesChip", () => {
	it("should render the serves chip with the number passed in", () => {
		render(<ServesChip servesNumber={4} />);

		const chip = screen.getByText("Serves 4");
		expect(chip).toBeInTheDocument();
	});

	it("should render the serves chip with correct tooltip", () => {
		render(<ServesChip servesNumber={4} />);

		const chip = screen.getByLabelText("Serves 4");
		expect(chip).toBeInTheDocument();
	});

	it("should render the serves chip with `serves ?` if no serving number is passed in ", () => {
		render(<ServesChip />);

		const chip = screen.getByText("Serves ?");
		expect(chip).toBeInTheDocument();
	});
});
