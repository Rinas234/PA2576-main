//C:\Users\rinas\Desktop\PA2576-main\src\CreateEvent.js
import React, { useState } from 'react';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const organizer_id = localStorage.getItem('userId'); // Get the organizer's user ID from local storage

    try {
      const response = await fetch('http://localhost:5000/createevent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, location, date, cost, image, organizer_id, category }),
      });
    
      const data = await response.json();
    
      if (data.success) {
        alert(data.message);
        // Clear input fields after successful event creation
        setTitle('');
        setLocation('');
        setDate('');
        setCost('');
        setImage('');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Error creating event');
    }
  };

  return (
    <div className='form-container'>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Cost:</label>
          <input
            type="number"
            step="0.1"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;

