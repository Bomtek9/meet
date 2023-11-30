// src/__tests__/CitySearch.test.js

import { render, fireEvent } from "@testing-library/react";
import CitySearch from "../components/CitySearch";
import userEvent from "@testing-library/user-event";
import { extractLocations, getEvents } from "../api";

describe("<CitySearch /> component", () => {
  test("suggestion list is hidden by default", () => {
    const { queryByRole } = render(<CitySearch />);
    const suggestionList = queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when city textbox gains focus", async () => {
    const { queryByRole } = render(<CitySearch />);
    const cityTextBox = queryByRole("textbox");
    await userEvent.click(cityTextBox);
    const suggestionList = queryByRole("list");
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass("suggestions");
  });

  test("renders text input", () => {
    const { queryByRole } = render(<CitySearch />);
    const cityTextBox = queryByRole("textbox");
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass("city");
  });

  test("updates list of suggestions correctly when user types in city textbox", async () => {
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    const { queryByRole, rerender } = render(
      <CitySearch allLocations={allLocations} />
    );

    // user types "Berlin" in city textbox
    const cityTextBox = queryByRole("textbox");
    await userEvent.type(cityTextBox, "Berlin");

    // filter allLocations to locations matching "Berlin"
    const suggestions = allLocations
      ? allLocations.filter((location) => {
          return (
            location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1
          );
        })
      : [];

    // get all <li> elements inside the suggestion list
    const suggestionListItems = queryByRole("list").querySelectorAll("li");
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    }
  });
  // Add the new test for clicking on a suggestion
  test("renders the suggestion text in the textbox upon clicking on the suggestion", async () => {
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    const { queryByRole } = render(<CitySearch allLocations={allLocations} />);

    const cityTextBox = queryByRole("textbox");
    await userEvent.type(cityTextBox, "Berlin");

    const suggestionListItems = queryByRole("list").querySelectorAll("li");
    const BerlinGermanySuggestion = suggestionListItems[0];

    await userEvent.click(BerlinGermanySuggestion);

    expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
  });
});
