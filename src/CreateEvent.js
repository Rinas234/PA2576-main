//C:\Users\rinas\Desktop\PA2576-main\src\CreateEvent.js
import React, { useState } from 'react';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');
  const [image, setImage] = useState('');

  // In your CreateEvent.js component
const handleSubmit = async (event) => {
  event.preventDefault();

  // Replace the sample data with the actual data from your form inputs
  const eventData = {
    title: 'Sample Title', // Replace with form input
    location: 'Sample Location', // Replace with form input
    date: '2023-04-01', // Replace with form input
    cost: 27, // Replace with form input
    image: '\public\logo512.png', // Replace with form input
    organizer_id: 1, // Replace with the current user's ID
  };

  try {
    const response = await fetch('/createevent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      throw new Error('Error creating event');
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="cost">Cost:</label>
        <input
          type="number"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;

