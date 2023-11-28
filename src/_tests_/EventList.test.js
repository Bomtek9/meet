import { render } from "@testing-library/react";
import EventList from "../components/EventList";

describe("<EventList /> component", () => {
  let eventListComponent;

  beforeEach(() => {
    eventListComponent = render(<EventList />);
  });

  test('has an element with "list" role', () => {
    expect(eventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", () => {
    const events = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    eventListComponent.rerender(<EventList events={events} />);
    expect(eventListComponent.getAllByRole("listitem")).toHaveLength(
      events.length
    );
  });
});
