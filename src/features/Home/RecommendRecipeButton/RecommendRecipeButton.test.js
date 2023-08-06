import { RecommendRecipeButton } from "./RecommendRecipeButton";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("RecommendRecipeButton", () => {
	it("should load the correct button text", () => {
		render(
			<BrowserRouter>
				<RecommendRecipeButton />
			</BrowserRouter>,
		);

		const button = screen.getByText(
			"Not sure what to have? Get a recommendation",
		);
		expect(button).toBeInTheDocument();
	});
});
