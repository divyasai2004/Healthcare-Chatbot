import React, { useState } from "react";
import "./Sidebar.css"; // Add styling here

const Sidebar = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "Close" : "History"}
      </button>

      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2>Chat History</h2>
        <div className="history-list">
          {history.length > 0 ? (
            history.map((message, index) => (
              <div key={index} className="history-item">
                {message}
              </div>
            ))
          ) : (
            <p>No history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
