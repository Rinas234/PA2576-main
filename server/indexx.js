const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const userRouter = require('./user.js'); // Add this line to import userRouter

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRouter); // Add this line to use userRouter

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

// Remove the /register and /login routes from this file

app.listen(5000, () => console.log("Server running on port 5000"));
