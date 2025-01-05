import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = ({ children }) => {
  return (
    <div className="animated-background">
      <div className="gradient-overlay"></div>
      {children}
    </div>
  );
};

export default AnimatedBackground;
