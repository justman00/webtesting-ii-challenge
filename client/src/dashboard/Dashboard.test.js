import React from "React";
import { render, fireEvent } from "react-testing-library";
import App from "../App";

describe("<Dashboard />", () => {
  it("should add one to strikes", () => {
    const { getByText, debug, rerender } = render(<App />);

    const button = getByText(/strike-btn/i);

    fireEvent.click(button);

    rerender(<App />);

    getByText(/strikes: 1/i);
  });

  it("should add one to balls", () => {
    const { getByText } = render(<App />);

    const button = getByText(/ball-btn/i);

    fireEvent.click(button);

    getByText(/balls: 1/i);
  });
});
