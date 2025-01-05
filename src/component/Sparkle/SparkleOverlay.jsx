import React, { useState, useEffect } from "react";
import Sparkle from "./Sparkle";

const getRandomPositionWithinChat = () => {
  const chatWindow = document.querySelector(".chat-window");
  if (chatWindow) {
    const { width, height } = chatWindow.getBoundingClientRect();
    const x = Math.random() * width;
    const y = Math.random() * height;
    return { x, y };
  }
  return { x: 0, y: 0 }; // Default position if the chat window is not found
};

const getRandomSize = () => Math.random() * 3 + 1; // Random size between 1px and 4px

const getRandomColor = () =>
  `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, 0.8)`; // Random semi-transparent color

const SparkleOverlay = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prevSparkles) => [
        ...prevSparkles,
        {
          id: Date.now(),
          ...getRandomPositionWithinChat(),
          size: getRandomSize(),
          color: getRandomColor(),
        },
      ]);
    }, 150); // Add a new sparkle every 150ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkle-overlay">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          x={sparkle.x}
          y={sparkle.y}
          size={sparkle.size}
          color={sparkle.color}
        />
      ))}
    </div>
  );
};

export default SparkleOverlay;
