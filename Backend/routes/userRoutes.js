const express = require("express");
const router = express.Router();
const User = require("../user");
const bcrypt = require("bcryptjs");

// User Registration Route
router.post("/register", async (req, res) => {
    try {
        console.log("Received registration request:", req.body);

        const {email, username, password, role } = req.body;

        // Ensure all required fields are present
        if (!email || !username || !password ) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // Reject registration if email is missing or empty
        if (!email || email.trim() === '') {
            return res.status(400).json({ message: "Email is required!" });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: "Email or Username already exists!" });
        }

        // Default role is "user" unless explicitly set
        const userRole = role || "user";

        const user = new User({ email, username, password, role: userRole });
        await user.save();

        res.status(201).json({ success: true, message: "User registered successfully!" });
    } catch (error) {
        console.error("User registration error:", error);
        res.status(400).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check for admin login
    if (username === "admin" && password === "admin123") {
      return res.status(200).json({
        success: true,
        message: "Admin login successful",
        user: { username: "admin", role: "admin" },
      });
    }

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid username or password!" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid username or password!" });
    }

    // Successful login
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: { username: user.username, role: user.role || "user" },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports = router;

