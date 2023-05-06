import { render, screen } from "@testing-library/react";
import { Instruction } from "./Instruction";

describe("Instruction list component", () => {
	it("should load the instruction component with the correct text", () => {
		const instruction = "Whisk the eggs";
		render(
			<Instruction
				instruction={instruction}
				index={0}
				removeInstruction={(id) => console.log(id)}
			/>,
		);

		const instructionText = screen.getByText(instruction);
		expect(instructionText).toBeInTheDocument();
	});

	it("should load the instruction component with the correct step number", () => {
		const instruction = "Whisk the eggs";
		render(
			<Instruction
				instruction={instruction}
				index={0}
				removeInstruction={(id) => console.log(id)}
			/>,
		);

		const instructionNumber = screen.getByText("Step 1");
		expect(instructionNumber).toBeInTheDocument();
	});
});
