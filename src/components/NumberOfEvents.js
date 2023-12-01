import React from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Only positive numbers are valid.";
      setErrorAlert(errorText);
    } else {
      errorText = "";
      setErrorAlert(errorText);
    }
  };

  return (
    <div id="number-of-events">
      <p>Number of Events:</p>
      <input
        data-testid="event-number-input"
        type="text"
        className="event-number"
        defaultValue="32"
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
