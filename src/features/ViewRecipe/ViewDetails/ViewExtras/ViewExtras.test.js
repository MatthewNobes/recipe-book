import { ViewExtras } from "./ViewExtras";
import { render, screen } from "@testing-library/react";

describe("ViewExtras", () => {
	const notes = [
		"Mix the maple syrup, mustard, vinegar and ground cloves or five-spice in a jug. Pour half over the fat, roast for 15 mins, then pour over the rest and return to the oven for another 30 mins.",
		"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
		"Boil an egg",
		"Accelerate to 88mph",
		"Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to two days ahead and served cold.",
		"Do something else",
	];

	it("should render the title `Notes`", () => {
		render(<ViewExtras notes={notes} />);

		const note = screen.getByText("Notes");
		expect(note).toBeInTheDocument();
	});
	it("should render the recipe note passed into it with the correct step numbers", () => {
		render(<ViewExtras notes={notes} />);

		const noteOne = screen.getByText(notes[0]);
		expect(noteOne).toBeInTheDocument();
	});

	it("should render `No note exists for this recipe` if no note is passed in", () => {
		render(<ViewExtras />);

		const note = screen.getByText("Notes");
		expect(note).toBeInTheDocument();

		const noNotesMessage = screen.getByText("No notes exists for this recipe");
		expect(noNotesMessage).toBeInTheDocument();
	});
});
