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
  <select
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    style={{
      padding: '0.5rem',
      fontSize: '1rem',
      borderRadius: '5px',
      border: '0.5px solid #F8F8F8    ',
      backgroundColor: '#fff',
      color: '#333',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}
  >
    <option value="">Select a location</option>
    <option value="Karlskrona">Karlskrona</option>
    <option value="Trossö">Trossö</option>
    <option value="Hästö">Hästö</option>
    <option value="Långö">Långö</option>
    <option value="Saltö">Saltö</option>
    <option value="Stenshamn">Stenshamn</option>
    <option value="Falkholmen">Falkholmen</option>
    <option value="Ramdala">Ramdala</option>
    <option value="Nättraby">Nättraby</option>
    <option value="Jämjö">Jämjö</option>
    <option value="Sturkö">Sturkö</option>
    <option value="Sillhövda">Sillhövda</option>
    <option value="Ronneby">Ronneby</option>
    {/* Add more districts of Karlskrona here */}
  </select>
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
        <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  style={{
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '0.5px solid #F8F8F8    ',
    backgroundColor: '#fff',
    color: '#333',
    width: '100%',
    maxWidth: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }}
>
  <option value="">Select a category</option>
  <option value="Charity">Charity</option>
  <option value="Concerts">Concerts</option>
  <option value="Conferences">Conferences</option>
  <option value="Education">Education</option>
  <option value="Internal corporate">Internal corporate</option>
  <option value="Networking events">Networking events</option>
  <option value="Product launch">Product launch</option>
  <option value="Sport">Sport</option>
  <option value="Team building">Team building</option>
  <option value="Trade shows">Trade shows</option>
  <option value="Other">Other</option>
</select>

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

