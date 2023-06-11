import { render, screen } from "@testing-library/react";
import { NotesBlock } from "./NotesBlock";

describe("NotesBlock", () => {
	it("should render the NotesBlock with the existing notes set", () => {
		const notes = ["test1", "test2"];

		render(
			<NotesBlock
				notes={notes}
				removeNote={() => console.log("mock delete")}
			/>,
		);

		notes.forEach((note) => {
			expect(screen.getByText(note)).toBeInTheDocument();
		});
	});
});
