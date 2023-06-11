import { render, screen } from "@testing-library/react";
import { NotesForm } from "./NotesForm";

describe("NotesForm", () => {
	it("should render the noteForm with the existing note set", () => {
		const notes = ["test1", "test2"];

		render(
			<NotesForm
				notes={notes}
				addNote={() => console.log("mock add")}
				removeNote={() => console.log("mock delete")}
			/>,
		);

		notes.forEach((note) => {
			expect(screen.getByText(note)).toBeInTheDocument();
		});
	});

	it("should render an input box to input new notes", () => {
		const notes = ["test1", "test2"];

		render(
			<NotesForm
				notes={notes}
				addNote={() => console.log("mock add")}
				removeNote={() => console.log("mock delete")}
			/>,
		);

		expect(
			screen.getByRole("textbox", {
				name: /New note/i,
			}),
		).toBeInTheDocument();
	});

	it("should render button which is used to add new notes", () => {
		const notes = ["test1", "test2"];

		render(
			<NotesForm
				notes={notes}
				addNote={() => console.log("mock add")}
				removeNote={() => console.log("mock delete")}
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
