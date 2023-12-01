import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";
import App from "../App";
import { extractLocations, getEvents } from "../api";

describe("<CitySearch /> component", () => {
  test("suggestion list is hidden by default", () => {
    const { queryByRole } = render(<CitySearch />);
    const suggestionList = queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when the city textbox gains focus", async () => {
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

  test("updates the list of suggestions correctly when the user types in the city textbox", async () => {
    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);
    const { queryByRole, rerender } = render(
      <CitySearch allLocations={allLocations} />
    );

    // user types "Berlin" in the city textbox
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
});

describe("<CitySearch /> integration", () => {
  test("renders suggestions list when the app is rendered.", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const cityTextBox = within(CitySearchDOM).queryByRole("textbox");
    await user.click(cityTextBox);

    const allEvents = await getEvents();
    const allLocations = extractLocations(allEvents);

    const suggestionListItems =
      within(CitySearchDOM).queryAllByRole("listitem");
    expect(suggestionListItems.length).toBe(allLocations.length + 1);
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
