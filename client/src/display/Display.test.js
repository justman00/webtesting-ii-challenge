import React from "React";
import { render, fireEvent } from "react-testing-library";
import Display from "./Display";

describe("<Display />", () => {
  it("should show strikes: 1", () => {
    const { getByText } = render(<Display strikes={1} />);

    getByText(/strikes: 1/i);
  });

  it("should show balls: 1", () => {
    const { getByText } = render(<Display balls={1} />);

    getByText(/balls: 1/i);
  });
});
