require("dotenv").config();
const express = require("express");
const passport = require("passport");
const users = require("./routes/api/users");
const { connectDB } = require("./config/db");

// initialize server
const app = express();

// connecting database
connectDB();

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);
// routes
app.use("/api/users", users);

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
