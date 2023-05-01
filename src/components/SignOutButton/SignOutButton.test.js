import { SignOutButton } from "./SignOutButton";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

it("should load the correct button text", () => {
	render(
		<Provider store={store}>
			<SignOutButton />
		</Provider>,
	);

	const buttonText = screen.getByText("Sign out");
	expect(buttonText).toBeInTheDocument();
});
