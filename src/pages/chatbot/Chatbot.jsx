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
                    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")  // Bold text
                    .replace(/\n\s+/g, "\n")  // Remove unnecessary spaces
                    .replace(/\n\d+\./g, "</ol><ol>")  // Fix numbered lists
                    // .replace(/\n\*/g, "</ul><ul>")  // Fix bullet lists
                    // .replace(/\* (.*?)(\n|$)/g, "<li>$1</li>")  // Convert bullets
                    // .replace(/(\d+)\. (.*?)(\n|$)/g, "<li>$1. $2</li>")  // Convert numbered lists
                    .replace(/\n/g, "<br>");  // Convert newlines to <br>
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
// import Send from '../../component/sendbutton/Send';

// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const handleSend = async () => {
//         if (input.trim() === '') return;

//         const userMessage = { sender: 'user', text: input };
//         setMessages((prevMessages) => [...prevMessages, userMessage]);
//         setInput(''); // Clear input before making API call

//         try {
//             const response = await fetch('http://127.0.0.1:5000/process', { 
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ question: input }), 
//             });

//             if (!response.ok) {
//                 throw new Error(`Server responded with ${response.status}`);
//             }

//             const data = await response.json();

//             if (!data.response) {
//                 throw new Error("Invalid response format from API");
//             }

//             const beautifyResponse = (text) => {
//                 return text
//                     .replace(/## (.*?)(\n|$)/g, "<h3>$1</h3>")  // Convert ## Headings
//                     .replace(/\* (.*?)(\n|$)/g, "<li>$1</li>")  // Convert * Bullets to <li>
//                     .replace(/\n/g, "<br>");  // Convert newlines
//             };

//             const formattedResponse = beautifyResponse(data.response);
//             const botMessage = { sender: 'bot', text: formattedResponse };
//             setMessages((prevMessages) => [...prevMessages, botMessage]);

//         } catch (error) {
//             console.error('Chatbot API Error:', error.message);
//             setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: `Error: ${error.message}` }]);
//         }
//     };

//     // Function to toggle sidebar
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     // Function to start a new chat
//     const startNewChat = () => {
//         setMessages([]); // Clear chat history
//     };

//     return (
//         <AnimatedBackground>
//             <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//                 <div className="sidebar-header">
//                     <h2>Chat History</h2>
//                     <button className="close-sidebar" onClick={toggleSidebar}>×</button>
//                 </div>
//                 <button className="new-chat-btn-sidebar" onClick={startNewChat}>+ New Chat</button>
//                 <div className="history-list">
//                     {messages.map((message, index) => (
//                         <div key={index} className={`history-item ${message.sender}`}>
//                             <strong>{message.sender === 'user' ? 'You' : 'Bot'}:</strong> {message.text}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <button className="toggle-sidebar" onClick={toggleSidebar}>☰</button>

//             <div className="chatbot-container">
//                 <div className="chat-window">
//                     <SparkleOverlay />
//                     <div className="messages">
//                         {messages.map((message, index) => (
//                             <div key={index} className={`message ${message.sender}`} dangerouslySetInnerHTML={{ __html: message.text }}></div>
//                         ))}
//                     </div>

//                     <div className="input-area">
//                         <input
//                             type="text"
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Type your message.."
//                         />
//                         <button onClick={handleSend}>Send</button>
//                     </div>
//                 </div>
//             </div>
//         </AnimatedBackground>
//     );
// };

// export default Chatbot;

