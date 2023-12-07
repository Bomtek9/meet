import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  // SCENARIO 1
  test("When the user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("the user has opened the app", () => {
      AppComponent = render(<App />);
    });

    when("the list of upcoming events is displayed", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then("the default number should be 32", () => {
      expect(eventList.length).toEqual(32);
    });
  });

  // SCENARIO 2
  test("User can change the number of events", ({ given, when, then }) => {
    let AppComponent;
    given(
      "the user has opened the app and the list of upcoming events is displayed",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });
      }
    );

    when("the user specifies the number of events visible", async () => {
      const input = await waitFor(() =>
        AppComponent.getByTestId("number-of-events-input")
      );
      await userEvent.type(input, "{backspace}{backspace}10");
    });

    then(
      "the user should be able to see events equal to the given number at once",
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const updatedEventList = within(AppDOM).queryAllByRole("listitem");
        expect(updatedEventList.length).toEqual(10);
      }
    );
  });
});
