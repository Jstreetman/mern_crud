const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const path = require("path");
const { body, validationResult } = require("express-validator"); // Import express-validator

const User = require("../models/user");
const app = express();

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, "build")));

// Your API routes go here

// Catch-all route to serve the React app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// router.get("/", (req, res) => {
//   User.find({})
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res
//         .status(500)
//         .json({ success: false, msg: `Something went wrong. ${err}` });
//     });
// });
// Registration route with password validation
router.post(
  "/signup",
  [
    // Validate password: minimum 8 characters
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    // Other validation rules for username and email
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email address"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract user data from the request body
    const { username, email, password } = req.body;

    try {
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email is already registered." });
      }

      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: "Registration successful!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;
