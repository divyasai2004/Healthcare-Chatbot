const express = require('express');
const router = express.Router();
const User = require('../user');

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

// User Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password!" });
        }

        // Set default role (Ensure role field exists in DB)
        const userRole = user.role || "user";

        res.status(200).json({ 
            success: true, 
            message: "Login successful", 
            user: { email: user.email, username: user.username, role: userRole },
            role: userRole 
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Something went wrong!" });
    }
});


// Fetch all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require('../user');

// //User Registeration Route
// router.post("/register", async (req, res) => {
//     try {
//         console.log("Received registration request:", req.body); // ✅ Log incoming data

//         const { fullname, email, username, password, dob, gender } = req.body;

//         // ✅ Check if all required fields are present
//         if (!fullname || !email || !username || !password || !dob || !gender) {
//             return res.status(400).json({ message: "All fields are required!" });
//         }

//           // Reject registration if email is missing or empty
//           if (!email || email.trim() === '') {
//             return res.status(400).json({ message: "Email is required!" });
//         }

//         const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//         if (existingUser) {
//             return res.status(400).json({ message: "Email or Username already exists!" });
//         }

//         const user = new User({ fullname, email, username, password, dob, gender });
//         await user.save();
//         res.status(201).json({ success: true, message: "User registered successfully!" });
//     } catch (error) {
//         console.error("User registration error:", error);
//         res.status(400).json({ error: error.message });
//     }
// });



// // Fetch all users
// router.get("/", async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         res.status(500).send("Error fetching users");
//     }
// });

// module.exports = router;
