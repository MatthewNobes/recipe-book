import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

it("should load the correct header text", () => {
  render(<Header />);
  const headerText = screen.getByText("Recipe Book");
  expect(headerText).toBeInTheDocument();
});
