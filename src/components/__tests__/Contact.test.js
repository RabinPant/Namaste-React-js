import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact Component", () => {
  render(<Contact />);

  const Button = screen.getByRole("button");
  //screen.getByText("Submit") => This will also work since it will find submit text in the page
  expect(Button).toBeInTheDocument();
});

test("Should load input name inside Contact Component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the contact component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});
