// src/components/EventList.js

import Event from "./Event";

// .map() loop that loops over the events prop, and in each iteration, renders an <Event /> component (which will internally render the <li></li>...

const EventList = ({ events }) => {
  return (
    <ul id="event-list">
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
  );
};

export default EventList;
