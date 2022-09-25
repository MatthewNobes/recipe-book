import { render, screen } from "@testing-library/react";
import { Instruction } from "./Instruction";

describe("Instruction list component", () => {
  it("should load the instruction component with the correct text", () => {
    const instruction = {
      id: 2,
      instruction: "Whisk the eggs",
      instructionNumber: 2,
    };
    render(
      <Instruction
        instruction={instruction}
        removeInstruction={(id) => console.log(id)}
      />
    );

    const instructionListComponent = screen.getByText(instruction.instruction);
    expect(instructionListComponent).toBeInTheDocument();
  });
});
