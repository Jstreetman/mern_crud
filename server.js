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

// Don't touch this if you don't know it
// We are using this for the express-rate-limit middleware
// See: https://github.com/nfriedly/express-rate-limit
// app.enable("trust proxy");

// Set public folder using built-in express.static middleware
app.use(express.static("public"));

// Set body parser middleware
app.use(bodyParser.json());

// Enable cross-origin access through the CORS middleware
// NOTICE: For React development server only!
if (process.env.CORS) {
  app.use(cors());
}

// app.use("/", routes); // For the home page ("/")
// app.use("/register", routes); // For the registration page ("/register")
// app.use("/login", routes); // For the login page ("/login")

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});

// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/Jsmern", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Middleware and other configuration settings...

// Check MongoDB connection
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

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
