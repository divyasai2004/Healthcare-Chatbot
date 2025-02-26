const express = require("express");
const router = express.Router();
const User = require("../user");
const bcrypt = require("bcryptjs");

// User Registration Route (Already present)
router.post("/register", async (req, res) => {
    try {
        console.log("Received registration request:", req.body);

        const { email, username, password, role } = req.body;

        if (!email || !username || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        if (!email.trim()) {
            return res.status(400).json({ message: "Email is required!" });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: "Email or Username already exists!" });
        }

        const userRole = role || "user";

        const user = new User({ email, username, password, role: userRole });
        await user.save();

        res.status(201).json({ success: true, message: "User registered successfully!" });
    } catch (error) {
        console.error("User registration error:", error);
        res.status(400).json({ error: error.message });
    }
});

// User Login Route (Already present)
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        if (username === "admin" && password === "admin123") {
            return res.status(200).json({
                success: true,
                message: "Admin login successful",
                user: { username: "admin", role: "admin" },
            });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid username or password!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid username or password!" });
        }

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

//  Fetch all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find({}, "username email role");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

//  Update user role
router.put("/:id", async (req, res) => {
    try {
        const { role } = req.body;
        await User.findByIdAndUpdate(req.params.id, { role });
        res.status(200).json({ message: "User role updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating role" });
    }
});

//  Delete user
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user" });
    }
});

module.exports = router;

