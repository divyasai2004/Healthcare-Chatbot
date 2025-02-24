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

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// require('dotenv').config();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const authMiddleware = require("./middleware/authMiddleware");

// const User = require('./user'); // Ensure this is correctly importing your User model
// const userRoutes = require("./routes/userRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes");

// const app = express();
// const port = process.env.PORT || 3100;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Important for form submissions
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/chatbot-1", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));


  
//   app.post('/register', async (req, res) => {
//       try {
//           console.log("Incoming request data:", req.body);
  
//           const { username, password, email, role } = req.body;
//           if (!username || !password || !email) {
//               return res.status(400).json({ error: "All fields are required" });
//           }
  
//           // Check if user already exists
//           const existingUser = await User.findOne({ email });
//           if (existingUser) {
//               return res.status(400).json({ error: "User already exists" });
//           }
  
//           // Hash the password
//           const hashedPassword = await bcrypt.hash(password, 10);
  
//           // Create new user
//           const user = new User({ username, email, password: hashedPassword, role });
//           await user.save();
  
//           console.log("User registered successfully:", user);
//           res.status(201).json({ message: "Registration successful" });
  
//       } catch (error) {
//           console.error("User registration error:", error);
//           res.status(500).json({ error: "Server error" });
//       }
//   });
  


// // User Login Route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(401).json({ message: "Invalid username or password" });
//         }

//         // Compare hashed passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Invalid username or password" });
//         }

//         // Generate JWT Token
//         const token = jwt.sign(
//             { id: user._id, role: user.role }, 
//             process.env.JWT_SECRET || "secretkey",
//             { expiresIn: "1h" }
//         );

//         res.status(200).json({ message: "Login successful", token, role: user.role });

//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// });

// // Example: Protect user dashboard
// app.get("/user/dashboard", authMiddleware, (req, res) => {
//     res.json({ message: "Welcome to User Dashboard", user: req.user });
// });

// // Example: Protect admin dashboard
// app.get("/admin/dashboard", authMiddleware, (req, res) => {
//     if (req.user.role !== "admin") {
//         return res.status(403).json({ message: "Access Forbidden" });
//     }
//     res.json({ message: "Welcome to Admin Dashboard", user: req.user });
// });

// // Other routes
// app.use("/api/users", userRoutes);
// app.use("/api/appointments", appointmentRoutes);

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// require('dotenv').config();

// const User = require('./user'); // Ensure this is correctly importing your User model
// const userRoutes = require("./routes/userRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes");

// const app = express();
// const port = process.env.PORT || 3100;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Important for form submissions
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/chatbot-1", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

//   app.post('/register', async (req, res) => {
//     try {
//         console.log("Incoming request data:", req.body);  // Log incoming data


//          // Ensure required fields exist
//          if (!req.body.username || !req.body.password || !req.body.email) {
//             return res.status(400).json({ error: "All fields are required" });
//         }
//         const user = new User(req.body);
//         await user.save();

//         console.log("User saved successfully:", user);  //  Confirm save
//         res.status(201).send(user);
//     } catch (error) {
//         console.error("User registration error:", error);  //  Log error
//         res.status(400).send({ error: error.message });
//     }
// });



// // User Login Route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
    
//     try {
//         const user = await User.findOne({ username, password }); // Fixed field names
//         if (user) {
//             res.status(200).json({ message: "Login successful", user });
//         } else {
//             res.status(401).json({ message: "Invalid credentials" });
//         }
//     } catch (error) {
//         console.error("Login error:", error);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// });

// // Other routes
// app.use("/api/users", userRoutes);
// app.use("/api/appointments", appointmentRoutes);

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


