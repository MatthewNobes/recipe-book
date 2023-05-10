import { Keywords } from "./Keywords";
import { render, screen } from "@testing-library/react";

describe("Keyword", () => {
	it("should load chips for the items passed into it", () => {
		const keywords = ["item1", "item2"];

		render(<Keywords keywords={keywords} />);

		keywords.forEach((keyword) => {
			const keywordItem = screen.getByText(keyword);
			expect(keywordItem).toBeInTheDocument();
		});
	});

	it("should return no component if passed an empty keyword array", () => {
		const keywords = [];

		render(<Keywords keywords={keywords} />);
		const keywordBar = screen.getByTitle("no keywords");
		expect(keywordBar).toBeInTheDocument();
	});
});
