import { render, screen } from "@testing-library/react";
import { KeywordsForm } from "./KeywordsForm";

describe("KeywordsForm", () => {
	it("should render the KeywordForm with the existing keyword set", () => {
		const keywords = ["test1", "test2"];

		render(
			<KeywordsForm
				keywords={keywords}
				addKeyword={() => console.log("mock add")}
				removeKeyword={() => console.log("mock delete")}
			/>,
		);

		keywords.forEach((keyword) => {
			expect(screen.getByText(keyword)).toBeInTheDocument();
		});
	});

	it("should render an input box to input new keywords", () => {
		const keywords = ["test1", "test2"];

		render(
			<KeywordsForm
				keywords={keywords}
				addKeyword={() => console.log("mock add")}
				removeKeyword={() => console.log("mock delete")}
			/>,
		);

		expect(
			screen.getByRole("textbox", {
				name: /New keyword/i,
			}),
		).toBeInTheDocument();
	});

	it("should render button which is used to add new keywords", () => {
		const keywords = ["test1", "test2"];

		render(
			<KeywordsForm
				keywords={keywords}
				addKeyword={() => console.log("mock add")}
				removeKeyword={() => console.log("mock delete")}
			/>,
		);

		// This should be the only displayed button with no name, as it is a symbol
		expect(
			screen.getByRole("button", {
				name: "",
			}),
		).toBeInTheDocument();
	});
});
