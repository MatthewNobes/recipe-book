import { render, screen } from "@testing-library/react";
import { CountryChip } from "./CountryChip";

describe("CountryChip", () => {
	it("should return a chip containing the passed in country", () => {
		const country = "India";

		render(<CountryChip country={country} />);

		const countryText = screen.getByText(country);

		expect(countryText).toBeInTheDocument();
	});
});
