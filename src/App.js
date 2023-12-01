// src/App.js
import { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents } from "./api";

import "./App.css";
const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      setEvents(allEvents.slice(0, currentNOE));
    };

    fetchData(); // Call fetchData when the component mounts or when currentNOE changes
  }, [currentNOE]); // Include currentNOE as a dependency

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
};

export default App;
