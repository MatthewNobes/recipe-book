import { render, screen } from "@testing-library/react";
import { KeywordBlock } from "./KeywordBlock";

describe("KeywordBlock", () => {
	it("should render the KeywordBlock with the existing keyword set", () => {
		const keywords = ["test1", "test2"];

		render(
			<KeywordBlock
				keywords={keywords}
				removeKeyword={() => console.log("mock delete")}
			/>,
		);

		keywords.forEach((keyword) => {
			expect(screen.getByText(keyword)).toBeInTheDocument();
		});
	});
});
