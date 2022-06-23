import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

it("should load the correct header text", () => {
  const header = "Recipe Book";
  render(<Header headerText={header} />);
  const headerText = screen.getByText("Recipe Book");
  expect(headerText).toBeInTheDocument();
});
