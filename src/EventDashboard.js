//\src\EventDashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventDashboard = () => {
  const [events, setEvents] = useState([]);
  const loggedIn = JSON.parse(localStorage.getItem("token"));
  const userId = loggedIn ? loggedIn.userId : null; // Get the user ID from localStorage

  useEffect(() => {
    if (userId) {
      fetchEvents();
    }
  }, [userId]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`http://localhost:5000/events?userId=${userId}`); // Use the user ID from localStorage
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Event Dashboard</h1>
      <Link to="/eventdashboard/createevent">Create Event</Link>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
            <p>Cost: {event.cost}</p>
            <img src={event.image} alt={event.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDashboard;
