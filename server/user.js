const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import the database connection
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Execute SQL query to insert user into database
    const [rows] = await db.execute(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword]
    );
    
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (!rows.length) {
      return res.status(404).json({ message: 'User not found' });
    }
          
    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
          
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
          
    res.status(200).json({ message: 'Login successful', user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;
