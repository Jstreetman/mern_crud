// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socket = require("socket.io");
const bodyParser = require("body-parser");

const userRoutes = require("./models/user"); // Import the user route file
const config = require("./config/db");

const routes = require("./routes/userRoutes");
// Initialize Express
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.db);

let db = mongoose.connection;

db.on("open", () => {
  console.log("Connected to the database.");
});

db.on("error", (err) => {
  console.log(`Database error: ${err}`);
});

// Instantiate express
const app = express();

// Set public folder using built-in express.static middleware
app.use(express.static("public"));

// Set body parser middleware
app.use(bodyParser.json());

if (process.env.CORS) {
  app.use(cors());
}

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});
// Use the userRoutes for handling user-related routes
app.use("/api/users", require("./routes/userRoutes"));

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = socket(server);

let online = 0;

io.on("connection", (socket) => {
  online++;
  console.log(`Socket ${socket.id} connected.`);
  console.log(`Online: ${online}`);
  io.emit("visitor enters", online);

  socket.on("disconnect", () => {
    online--;
    console.log(`Socket ${socket.id} disconnected.`);
    console.log(`Online: ${online}`);
    io.emit("visitor exits", online);
  });
});
