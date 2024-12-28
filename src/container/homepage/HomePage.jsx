import axios from 'axios';
import React, { useState } from 'react';
import "./HomePage.css";
import {header} from '../header/Header.jsx';

function Homepage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const username = 'User'; // Replace with dynamic username if needed

  const handleSend = async(e) => {
    if (input.trim()) {
      //here 
      setMessages([...messages, { sender: username, text: input }]);
      setInput('');
      // Here you can also send the message to the backend or a chatbot service
    }
  
  try {
    const response = await axios.post('http://localhost:3100/HomePage', {
     Message: messages,
     Input:input
    });
    console.log(response.data); // Log the response data
  } catch (error) {
    console.error(error); // Log any errors
  }
};
  return (
   
    <div className="chatbot-container">
      <header />
      <header className="chatbot-header">
        <div className="logo">Chatbot</div>
        <div className="username">{username}</div>
      </header>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <footer className="chatbot-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </footer>
    </div>
  );
}

export default Homepage;
