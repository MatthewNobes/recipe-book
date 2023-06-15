import { render, screen } from "@testing-library/react";
import { FrozenChip } from "./FrozenChip";

describe("FrozenChip", () => {
	it("should render the FrozenChip with a valid status of Freezable", () => {
		render(<FrozenChip canBeFrozen={true} />);

		const chip = screen.getByText("Freezable");
		expect(chip).toBeInTheDocument();
	});

	it("should return a test id div when passed false for freezable", () => {
		render(<FrozenChip canBeFrozen={false} />);

		const emptyDiv = screen.getByTestId("notFreezable");
		expect(emptyDiv).toBeInTheDocument();
	});
});
