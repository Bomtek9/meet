import { render } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";

describe("<EventList /> component", () => {
  let eventListComponent;

  beforeEach(() => {
    eventListComponent = render(<EventList />);
  });

  test('has an element with "list" role', () => {
    expect(eventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    eventListComponent.rerender(<EventList events={allEvents} />);
    expect(eventListComponent.getAllByRole("listitem")).toHaveLength(
      allEvents.length
    );
  });
});
