const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const userRouter = require('./user.js'); // Import userRouter
const eventsRoute = require('./routes/events.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRouter); // Use userRouter
app.use('/events/', eventsRoute);

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Rinnom0810", // Replace with your MySQL password
  database: "user_database",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

// Add the API endpoint for event creation
app.post('/createevent', async (req, res) => {
  const {title, location, date, cost, image, organizer_id, category } = req.body;

  // Replace the following query with your specific database schema and table name
  const query = `
    INSERT INTO events (title, location, date, cost, image, organizer_id, category)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  
    `;

  db.query(query, [title, location, date, cost, image, organizer_id, category], (error, results) => {
    if (error) {
      res.status(400).json({
        success: false,
        message: 'Error creating event',
        error: error.message,
      });
    } else {
      res.status(201).json({
        success: true,
        message: 'Event created successfully',
        event: {
          id: results.insertId,
          title,
          location,
          date,
          cost,
          image,
          category,
          organizer_id,
        },
      });
    }
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));

