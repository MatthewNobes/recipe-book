import { LoginForm } from "./LoginForm";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

it("should load the correct title of Sign In", () => {
	render(
		<BrowserRouter>
			<Provider store={store}>
				<LoginForm />
			</Provider>
		</BrowserRouter>,
	);

	const formTitle = screen.getAllByText("Sign In")[0];
	expect(formTitle).toBeInTheDocument();
});

describe("should have the correct form elements", () => {
	it("should load the email text box", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<LoginForm />
				</Provider>
			</BrowserRouter>,
		);

		const emailTextBox = screen.getByText("Email");

		expect(emailTextBox).toBeInTheDocument();
	});

	it("should load the password text box", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<LoginForm />
				</Provider>
			</BrowserRouter>,
		);

		const passwordTextBox = screen.getByText("Password");

		expect(passwordTextBox).toBeInTheDocument();
	});

	it("should load the sign in button", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<LoginForm />
				</Provider>
			</BrowserRouter>,
		);

		const signInButton = screen.getByRole("button", { name: "Sign In" });

		expect(signInButton).toBeInTheDocument();
	});
});
