import React, { useState, useRef } from 'react';
import './slide.css';

function SlidingButton() {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRefs = useRef([]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);

    // Scroll to the selected button (optional)
    buttonRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
        <div className="tabs">
            <input type = "radio" id= "radio-1" name = "tabs" checked />
            <label class = "tab" for="radio-1">chatbot</label>
            <input type = "radio" id= "radio-2" name = "tabs" checked />
            <label class = "tab" for="radio-2">report</label>
            <input type = "radio" id= "radio-3" name = "tabs" checked />
            <label class = "tab" for="radio-3">Appointment</label>
            <span class = "glider"></span>
        </div>
      
    </div>
  );
}

export default SlidingButton;