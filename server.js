// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes"); // Import the user route file

// Initialize Express
const app = express();
// Add body parsing middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Use CORS middleware
app.use(cors());

// app.disable("x-powered-by");
// app.disable("connection");
// app.disable("date");
// app.disable("transfer-encoding");
// app.disable("x-powered-by");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Jsmern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware and other configuration settings...

// Check MongoDB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use the userRoutes for handling user-related routes
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
