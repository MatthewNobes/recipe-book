import { render, screen } from "@testing-library/react";
import { NotesList } from "./NotesList";

describe("NotesList", () => {
	it("should render the NotesList with the existing notes set", () => {
		const notes = ["test1", "test2"];

		render(
			<NotesList notes={notes} removeNote={() => console.log("mock delete")} />,
		);

		notes.forEach((note) => {
			expect(screen.getByText(note)).toBeInTheDocument();
		});
	});
});
