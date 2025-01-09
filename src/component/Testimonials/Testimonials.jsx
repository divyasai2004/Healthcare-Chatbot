import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Testimonials.css'; // Assuming you save the styles in this file.

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:3100/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Users Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div className="testimonial-item fade-in" key={testimonial._id}>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
            {testimonial.image && (
              <img
                className="testimonial-image"
                src={testimonial.image}
                alt={testimonial.name}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
