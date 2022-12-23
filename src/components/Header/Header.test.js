import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

it("should load the correct header text", () => {
  const header = "Recipe Book";
  const menuOptions = [
    {
      label: "Edit recipe",
      onClickFunction: () => {
        console.log("hello world");
      },
    },
  ];
  render(<Header headerText={header} menuOptions={menuOptions} />);

  const headerText = screen.getByText("Recipe Book");
  expect(headerText).toBeInTheDocument();
});

it("should load the menu items when passed a menu options array", () => {
  const header = "Recipe Book";
  const menuOptions = [
    {
      label: "Edit recipe",
      onClickFunction: () => {
        console.log("hello world");
      },
    },
  ];
  render(<Header headerText={header} menuOptions={menuOptions} />);

  const menuOptionLabel = screen.getByText(menuOptions[0].label);
  expect(menuOptionLabel).toBeInTheDocument();

  const optionsMenu = screen.getByRole("button", { name: "options menu" });
  expect(optionsMenu).toBeInTheDocument();
});

it("should not load the menu items when no menuOptions array is passed", () => {
  const header = "Recipe Book";

  render(<Header headerText={header} />);
  const optionsMenu = screen.queryByRole("button", { name: "options menu" });
  expect(optionsMenu).toBeNull();
});

it("should fire the function on the first menu option", () => {
  const header = "Recipe Book";

  let eventValue = true;
  const menuOptions = [
    {
      label: "Edit recipe",
      onClickFunction: () => {
        eventValue = false;
      },
    },
  ];

  render(<Header headerText={header} menuOptions={menuOptions} />);

  expect(eventValue).toBe(true); // Before value should be true

  fireEvent.click(screen.getByText(menuOptions[0].label));

  expect(eventValue).toBe(false); // The event should have changed eventValue to false
});
