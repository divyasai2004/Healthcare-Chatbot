import React, { useState } from 'react';
import AnimatedBackground from '../../component/AnimatedBackground/AnimatedBackground';
import './chatbot.css';
import SparkleOverlay from '../../component/Sparkle/SparkleOverlay';
import Sidebar from '../../component/Sidebar/Sidebar';
import Hello from '../../component/hello/Hello';
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to send messages
  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    const botMessage = { sender: 'bot', text: `You said: ${input}` };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput('');
  };

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to start a new chat
  const startNewChat = () => {
    setMessages([]); // Clear current chat messages
  };

  return (
    <AnimatedBackground>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Chat History</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>
            ×
          </button>
        </div>

        {/* "New Chat" Button in Sidebar */}
        <button className="new-chat-btn-sidebar" onClick={startNewChat}>
          + New Chat
        </button>

        <div className="history-list">
          {messages.map((message, index) => (
            <div key={index} className={`history-item ${message.sender}`}>
              <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Chat Window */}
      <div className="chatbot-container">
        <div className="chat-window">
          <SparkleOverlay />
          {/* <Hello/> */}
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message"
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default Chatbot;


// import React, { useState } from 'react';
// import AnimatedBackground from '../../component/AnimatedBackground/AnimatedBackground';
// import './chatbot.css';
// import SparkleOverlay from '../../component/Sparkle/SparkleOverlay';
// import Sidebar from '../../component/Sidebar/Sidebar';
// import Hello from '../../component/hello/Hello';
// import axios from 'axios';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [summary, setSummary] = useState(''); // To store the summarized text

//   // Function to send messages
//   const handleSend = () => {
//     if (input.trim() === '') return;

//     const userMessage = { sender: 'user', text: input };
//     setMessages([...messages, userMessage]);

//     // Simulate bot response
//     const botMessage = { sender: 'bot', text: `You said: ${input}` };
//     setTimeout(() => {
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     }, 1000);

//     setInput('');
//   };

//   // Function to toggle sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Function to start a new chat
//   const startNewChat = () => {
//     setMessages([]); // Clear current chat messages
//   };

//   // Function to summarize chat history
//   const handleSummarize = async () => {
//     const textToSummarize = messages.map((message) => message.text).join(' ');

//     if (!textToSummarize.trim()) {
//       alert('No messages to summarize!');
//       return;
//     }

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/summarize', { text: textToSummarize });
//       setSummary(response.data.summary);
//     } catch (error) {
//       console.error('Error summarizing chat:', error);
//       alert('Failed to summarize. Please try again later.');
//     }
//   };

//   return (
//     <AnimatedBackground>
//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//         <div className="sidebar-header">
//           <h2>Chat History</h2>
//           <button className="close-sidebar" onClick={toggleSidebar}>
//             ×
//           </button>
//         </div>

//         {/* "New Chat" Button in Sidebar */}
//         <button className="new-chat-btn-sidebar" onClick={startNewChat}>
//           + New Chat
//         </button>

//         <div className="history-list">
//           {messages.map((message, index) => (
//             <div key={index} className={`history-item ${message.sender}`}>
//               <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Toggle Button */}
//       <button className="toggle-sidebar" onClick={toggleSidebar}>
//         ☰
//       </button>

//       {/* Chat Window */}
//       <div className="chatbot-container">
//         <div className="chat-window">
//           <SparkleOverlay />
//           {/* <Hello/> */}
//           <div className="messages">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`message ${message.sender}`}
//               >
//                 {message.text}
//               </div>
//             ))}
//           </div>
//           <div className="input-area">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Message"
//             />
//             <button onClick={handleSend}>Send</button>
//             <button onClick={handleSummarize}>Summarize</button>
//           </div>
//           {summary && (
//             <div className="summary">
//               <h3>Summary:</h3>
//               <p>{summary}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </AnimatedBackground>
//   );
// };

// export default Chatbot;
