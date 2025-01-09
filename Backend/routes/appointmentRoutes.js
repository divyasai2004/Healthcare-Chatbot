const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment'); // Assuming you have a schema for appointments

// Fetch all appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).send("Error fetching appointments");
    }
});

module.exports = router;
