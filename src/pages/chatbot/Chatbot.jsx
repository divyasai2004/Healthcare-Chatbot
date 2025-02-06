import React, { useState } from 'react';
import AnimatedBackground from '../../component/AnimatedBackground/AnimatedBackground';
import './chatbot.css';
import SparkleOverlay from '../../component/Sparkle/SparkleOverlay';
import Sidebar from '../../component/Sidebar/Sidebar';
import Send from '../../component/sendbutton/Send';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput(''); // Clear input before making API call

        try {
            const response = await fetch('http://127.0.0.1:5000/process', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input }), 
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            const data = await response.json();

            if (!data.response) {
                throw new Error("Invalid response format from API");
            }

            const beautifyResponse = (text) => {
                return text
                    .replace(/## (.*?)(\n|$)/g, "<h3>$1</h3>")  // Convert ## Headings
                    .replace(/\* (.*?)(\n|$)/g, "<li>$1</li>")  // Convert * Bullets to <li>
                    .replace(/\n/g, "<br>");  // Convert newlines
            };

            const formattedResponse = beautifyResponse(data.response);
            const botMessage = { sender: 'bot', text: formattedResponse };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

        } catch (error) {
            console.error('Chatbot API Error:', error.message);
            setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: `Error: ${error.message}` }]);
        }
    };

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to start a new chat
    const startNewChat = () => {
        setMessages([]); // Clear chat history
    };

    return (
        <AnimatedBackground>
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>Chat History</h2>
                    <button className="close-sidebar" onClick={toggleSidebar}>×</button>
                </div>
                <button className="new-chat-btn-sidebar" onClick={startNewChat}>+ New Chat</button>
                <div className="history-list">
                    {messages.map((message, index) => (
                        <div key={index} className={`history-item ${message.sender}`}>
                            <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
                        </div>
                    ))}
                </div>
            </div>

            <button className="toggle-sidebar" onClick={toggleSidebar}>☰</button>

            <div className="chatbot-container">
                <div className="chat-window">
                    <SparkleOverlay />
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`} dangerouslySetInnerHTML={{ __html: message.text }}></div>
                        ))}
                    </div>

                    <div className="input-area">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message.."
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
// import Send from '../../component/sendbutton/Send'; // Import is used, no need to remove

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const handleSend = async () => {
//         if (input.trim() === '') return;

//         const userMessage = { sender: 'user', text: input };
//         setMessages([...messages, userMessage]);
//         setInput(''); // Clear input field *before* the API call

//         try {
//             const response = await fetch('http://127.0.0.1:5000/process', { // Use the correct Node.js endpoint
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ question: input }), // Send "question" key
//             });

//             if (!response.ok) {  // Check for HTTP errors (4xx or 5xx)
//                 const errorData = await response.json(); // Try to parse error response from server
//                 throw new Error(errorData.error || 'Server error'); // Throw error with message
//             }
//               // Add chatbot response to messages
//             const data = await response.json();
//             const botMessage = { sender: 'bot', text: data.response }; // Use "response" key

//             setMessages((prevMessages) => [...prevMessages, botMessage]);

//         } catch (error) {
//             console.error('Error fetching chatbot response:', error);
//             setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: `Error: ${error.message}` }]); // Display error message
//         }
//     };

//     // ... (Sidebar and new chat functions - no changes needed)
//     // Function to toggle sidebar
//    const toggleSidebar = () => {
//      setIsSidebarOpen(!isSidebarOpen);
//    };

// //   // Function to start a new chat
//    const startNewChat = () => {
//      setMessages([]); // Clear current chat messages
//    };
//     return (
//         <AnimatedBackground>
//             {/* ... (Sidebar JSX - no changes needed) */}
//             <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//         <div className="sidebar-header">
//            <h2>Chat History</h2>
//            <button className="close-sidebar" onClick={toggleSidebar}>×</button>
//          </div>
//          <button className="new-chat-btn-sidebar" onClick={startNewChat}>+ New Chat</button>
//         <div className="history-list">
//           {messages.map((message, index) => (
//             <div key={index} className={`history-item ${message.sender}`}>
//                <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
//              </div>
//            ))}
//          </div>
//       </div>

//        <button className="toggle-sidebar" onClick={toggleSidebar}>☰</button>

//             <div className="chatbot-container">
//                 <div className="chat-window">
//                     <SparkleOverlay />
//                     <div className="messages">
//                         {messages.map((message, index) => (
//                             <div key={index} className={`message ${message.sender}`}>
//                                 {message.text}
//                             </div>
//                         ))}
//                     </div>

//                     <div className="input-area">
//                         <input
//                             type="text"
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Type your message.."
//                         />
//                         <button onClick={handleSend}>Send</button> {/* Capital "S" in Send */}
//                     </div>
//                 </div>
//             </div>
//         </AnimatedBackground>
//     );
// };

// export default Chatbot;





// import React, { useState } from 'react';
// import AnimatedBackground from '../../component/AnimatedBackground/AnimatedBackground';
// import './chatbot.css';
// import SparkleOverlay from '../../component/Sparkle/SparkleOverlay';
// import Sidebar from '../../component/Sidebar/Sidebar';
// import Send from '../../component/sendbutton/Send';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Function to send messages to the Flask backend
//   const handleSend = async () => {
//     if (input.trim() === '') return;

//     const userMessage = { sender: 'user', text: input };
//     setMessages([...messages, userMessage]);

//     try {
//       // Send the input message to the Flask API
//       const response = await fetch('http://127.0.0.1:5000/process', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ messages: input }),  // Ensure correct format
//       });

//       const data = await response.json();

//       // Check if the API returned an error
//       if (data.error) {
//         throw new Error(data.error);
//       }

//       // Add chatbot response to messages
//       const botMessage = { sender: 'bot', text: data.message };
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     } catch (error) {
//       console.error('Error fetching chatbot response:', error);
//       setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error: Unable to get a response' }]);
//     }

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

//   return (
//     <AnimatedBackground>
//       <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//         <div className="sidebar-header">
//           <h2>Chat History</h2>
//           <button className="close-sidebar" onClick={toggleSidebar}>×</button>
//         </div>
//         <button className="new-chat-btn-sidebar" onClick={startNewChat}>+ New Chat</button>
//         <div className="history-list">
//           {messages.map((message, index) => (
//             <div key={index} className={`history-item ${message.sender}`}>
//               <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
//             </div>
//           ))}
//         </div>
//       </div>

//       <button className="toggle-sidebar" onClick={toggleSidebar}>☰</button>

//       <div className="chatbot-container">
//         <div className="chat-window">
//           <SparkleOverlay />
//           <div className="messages">
//             {messages.map((message, index) => (
//               <div key={index} className={`message ${message.sender}`}>
//                 {message.text}
//               </div>
//             ))}
//           </div>

//           <div className="input-area">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message.."
//             />
//             <button onClick={handleSend}> send </button>
//           </div>
//         </div>
//       </div>
//     </AnimatedBackground>
//   );
// };

// export default Chatbot;

