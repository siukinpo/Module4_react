import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders learn react link", () => {
  render(<App />);
  const addElement = screen.getByText("Add");
  expect(addElement).toBeInTheDocument();

  fireEvent.click(addElement);

  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("5");
});
