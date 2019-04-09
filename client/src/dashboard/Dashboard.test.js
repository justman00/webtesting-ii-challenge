import React from "React";
import { render, fireEvent } from "react-testing-library";
import App from "../App";

describe("<Dashboard />", () => {
  it("should add one to strikes", () => {
    const { getByText, debug, rerender } = render(<App />);

    const button = getByText(/strike-btn/i);

    fireEvent.click(button);

    getByText(/strikes: 1/i);
  });

  it("should add one to balls", () => {
    const { getByText } = render(<App />);

    const button = getByText(/ball-btn/i);

    fireEvent.click(button);

    getByText(/balls: 1/i);
  });

  it("should restart strikes to 0 after calling it 3 times", () => {
    const { getByText } = render(<App />);

    const button = getByText(/strike-btn/i);

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    getByText(/strikes: 0/i);
  });

  it("should restart balls after calling it 4 times", () => {
    const { getByText } = render(<App />);

    const button = getByText(/ball-btn/i);

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    getByText(/balls: 0/i);
  });

  it("should reset everything to 0 when calling hit", () => {
    const { getByText } = render(<App />);

    const button = getByText(/hit-btn/i);

    fireEvent.click(button);

    getByText(/strikes: 0/i);
    getByText(/balls: 0/i);
  });

  it("should add to strikes if it is 0, when calling foul", () => {
    const { getByText } = render(<App />);

    const button = getByText(/foul-btn/i);

    fireEvent.click(button);
    getByText(/strikes: 1/i);
  });

  it("should stop incrementing the strikes, if it already 2", () => {
    const { getByText } = render(<App />);

    const button = getByText(/foul-btn/i);

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    getByText(/strikes: 2/i);
  });
});
