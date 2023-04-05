//\EventsList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/events');
      const data = await response.json();

      if (data.success) {
        setEvents(data.events);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Events</h2>
      {events.map((event) => (
  <div key={event.id}>
    <h3>
      <Link to={`/events/${event.id}`}>{event.title}</Link>
    </h3>
    <p>Location: {event.location}</p>
    <p>Date: {event.date}</p>
    <p>Cost: ${event.cost}</p>
    <img src={event.image} alt={event.title} />
  </div>
))}
    </div>
  );
};

export default EventsList;
