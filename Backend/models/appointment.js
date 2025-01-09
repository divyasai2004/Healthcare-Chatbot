const mongoose = require('mongoose');

// Define the Appointment schema
const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming there's a User model
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor', // Assuming there's a Doctor model
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    }
});

// Create and export the model
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
