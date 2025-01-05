import React, { useEffect, useState } from "react";
import "./Sparkle.css";

const Sparkle = ({ x, y, size, color }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // Sparkle lasts 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div
        className="sparkle"
        style={{
          left: x,
          top: y,
          width: size,
          height: size,
          backgroundColor: color,
        }}
      ></div>
    )
  );
};

export default Sparkle;
