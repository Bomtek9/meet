import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {
  test("has the input textbox", () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const input = screen.queryByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("default number of events is 32", () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const input = screen.queryByRole("textbox");
    expect(input).toHaveValue("32");
  });

  test("updates number of events when user types", async () => {
    render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
    const input = screen.queryByRole("textbox");
    await userEvent.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });

  // Add more tests as needed for your specific functionality
});
