//C:\Users\rinas\Desktop\PA2576-main\server\routes\events.js

const express = require('express');
const router = express.Router();
const db = require('../db.js'); // Import the database connection
const Event = require('./Event.js');

router.get("/", async (req, res) => {
  res.send("hello world")
})

// Create Event 
router.post('/create', async (req, res) => {
  try {
    const { title, location, date, cost, image, organizer_id, category } = req.body;

    // Execute SQL query to insert event into database
    const [rows] = await db.execute(
      'INSERT INTO events (title, location, date, cost, image, organizer_id, category) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, location, date, cost, image, organizer_id, category]
    );
    // Create a new event object
    const newEvent = new Event(rows.insertId, title, location, date, cost, image, organizer_id, category);
    res.status(201).json({ success: true, message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Event creation failed' });
  }
});

// Fetch a single event
router.get('/events/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.execute('SELECT * FROM events WHERE id = ?', [id]);

    if (!rows.length) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ success: true, event: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Fetching event failed' });
  }
});
  

// Fetch all events
router.get('/events', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM events');
    res.status(200).json({ success: true, events: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Fetching events failed' });
  }
});

module.exports = router;

