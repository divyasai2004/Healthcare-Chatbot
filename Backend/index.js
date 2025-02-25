const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const User = require('./user'); // Ensure this is correctly importing your User model
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
const port = process.env.PORT || 3100;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Important for form submissions
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/chatbot-1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.post('/register', async (req, res) => {
    try {
        console.log("Incoming request data:", req.body);  // Log incoming data


         // Ensure required fields exist
         if (!req.body.username || !req.body.password || !req.body.email) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const user = new User(req.body);
        await user.save();

        console.log("User saved successfully:", user);  //  Confirm save
        res.status(201).send(user);
    } catch (error) {
        console.error("User registration error:", error);  //  Log error
        res.status(400).send({ error: error.message });
    }
});

// User Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({ username, password }); // Fixed field names
        if (user) {
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Other routes
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});