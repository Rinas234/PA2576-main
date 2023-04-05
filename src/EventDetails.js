//\src\EventDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams(); // Get the event id from the URL

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await fetch(`http://localhost:5000/events/${id}`);
      const data = await response.json();

      if (data.success) {
        setEvent(data.event);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>Location: {event.location}</p>
      <p>Date: {event.date}</p>
      <p>Cost: ${event.cost}</p>
      <img src={event.image} alt={event.title} />
      <button>Register for Event</button>
    </div>
  );
};

export default EventDetails;
