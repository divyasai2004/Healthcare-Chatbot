const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
  image: { type: String, default: '' }, // Optional for profile image
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
