// src/__tests__/CitySearch.test.js

import { render } from "@testing-library/react";
import CitySearch from "../components/CitySearch";
import userEvent from "@testing-library/user-event";

describe("<CitySearch /> component", () => {
  test("suggestion list is hidden by default", () => {
    const CitySearchComponent = render(<CitySearch />);
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when city textbox gains focus", async () => {
    const CitySearchComponent = render(<CitySearch />);
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    await userEvent.click(cityTextBox); // Use userEvent.click directly
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass("suggestions");
  });

  test("renders text input", () => {
    const CitySearchComponent = render(<CitySearch />);
    const cityTextBox = CitySearchComponent.queryByRole("textbox");
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass("city");
  });
});
