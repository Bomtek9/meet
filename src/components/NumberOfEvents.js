// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, fetchData, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value); // Set the current number of events
    fetchData(); // Trigger data fetching

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Please enter a number greater than 0.";
      setErrorAlert(infoText);
    } else {
      infoText = "";
      setErrorAlert(infoText);
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        data-testid="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
