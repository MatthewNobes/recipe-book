import { LoginButton } from "./LoginButton";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("should load the correct button text", () => {
	render(
		<BrowserRouter>
			<LoginButton />
		</BrowserRouter>,
	);

	const buttonText = screen.getByText("Login");
	expect(buttonText).toBeInTheDocument();
});
