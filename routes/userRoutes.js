const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // You'll need jsonwebtoken for user authentication
const { body, validationResult } = require("express-validator"); // Import express-validator

const User = require("../models/user");

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

router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if the user with the provided email exists in the database
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // If credentials are valid, create and sign a JSON Web Token (JWT) for authentication
      const token = jwt.sign({ userId: user._id }, "Jmills22", {
        expiresIn: "1h",
      });

      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;
