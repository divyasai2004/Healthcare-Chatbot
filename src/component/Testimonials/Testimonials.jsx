import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
    <div>
      <h2>What Our Users Say</h2>
      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial._id}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
            {testimonial.image && <img src={testimonial.image} alt={testimonial.name} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
