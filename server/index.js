require("dotenv").config();
const express = require("express");

const { connectDB } = require("./config/db");

// initialize server
const app = express();

// connecting database
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));

// set the default end point
app.get("/", (req, res) => res.send("Server is up and running"));

// setting up port
const PORT = 9000;

// listening to port
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
