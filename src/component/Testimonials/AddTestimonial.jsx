import React, { useState } from 'react';
import axios from 'axios';

import './Testimonials.css';
const AddTestimonial = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    feedback: '',
    image: '', // Optional field for profile image URL
  });

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      // Post data to the backend
      await axios.post('http://localhost:3100/testimonials', formData);
      alert('Testimonial added successfully!');
      // Reset the form after successful submission
      setFormData({ name: '', feedback: '', image: '' });
    } catch (error) {
      console.error('Error adding testimonial:', error);
      alert('Failed to add testimonial. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add a Testimonial</h2>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Feedback field */}
        <textarea
          name="feedback"
          placeholder="Feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>

        {/* Image URL field (optional) */}
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
        />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTestimonial;
