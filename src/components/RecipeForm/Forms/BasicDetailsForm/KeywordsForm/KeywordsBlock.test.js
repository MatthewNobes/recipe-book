import { render, screen } from "@testing-library/react";
import { KeywordsBlock } from "./KeywordsBlock";

describe("KeywordsBlock", () => {
	it("should render the KeywordsBlock with the existing keyword set", () => {
		const keywords = ["test1", "test2"];

		render(
			<KeywordsBlock
				keywords={keywords}
				removeKeyword={() => console.log("mock delete")}
			/>,
		);

		keywords.forEach((keyword) => {
			expect(screen.getByText(keyword)).toBeInTheDocument();
		});
	});
});
