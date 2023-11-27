// src/__tests__/App.test.js

import { render } from "@testing-library/react";
import App from "../App";

describe("renders list of events", () => {
  test("renders event list", () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });
});
