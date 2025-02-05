import { useState } from 'react';
// import { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // For navigation and redirection
import './login.css';
import facebookLogo from '../../pages/login/facebook-logo.png';
import googleLogo from '../../pages/login/google-logo.png';
import twitterLogo from '../../pages/login/twitter-logo.png';
// // function randomText(){
  
// //     let text = "अआइईउऊएऐओऔअंअःऋॠकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ";
    
// //     const letter = text[Math.floor(Math.random() * text.length)];
    
// //     return letter;
// //   }
  
// //   //hacking animation
// //   function rain(){
        
// //     let e = document.createElement('div');
    
// //     let left = Math.floor(Math.random() * 100);
// //     let size = Math.random() * 1.8;
// //     let duration = Math.random() * 2;
    
// //       e.classList.add('text');
// //       e.innerText = randomText();
// //       document.body.appendChild(e);
    
// //     e.style.left = left + '%';
// //     e.style.fontSize = 0.3 + size + 'em';
// //     e.style.animationDuration = 1 + duration  + 'px';
    
// //       //remove
// //     setTimeout(function(){
// //       document.body.removeChild(e)
// //     },4050)
    
// //   }
  
  
  
// //   setInterval(function(){
// //     rain()
// //   },20);
  
const Login = () => {
  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Redirect management
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // To get the previously visited page
  const redirectPath = location.state?.from || '/homepage'; // Redirect to the last visited page or default

  // Function to handle login form submission
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Welcome, ${email}!`);
      localStorage.setItem("isLoggedIn", "true"); // Store login status
      window.dispatchEvent(new Event("storage")); // Notify Navbar of change
      navigate(redirectPath); // Redirect to homepage after login
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div>
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your email"
            />
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-button">Login</button>

          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>

        <div className="social-login">
          <p>Or login with</p>
          <div className="social-buttons">
            <button className="social-btn facebook">
              <img src={facebookLogo} alt="Facebook Logo" />
            </button>
            <button className="social-btn twitter">
              <img src={twitterLogo} alt="Twitter Logo" />
            </button>
            <button className="social-btn google">
              <img src={googleLogo} alt="Google Logo" />
            </button>
          </div>
        </div>

        <div className="signup-text">
          Not a member? <a href="/register">Sign up now</a>
        </div>
      </div>

      {/* Secret Input Field (Unclear Purpose) */}
      <div className="secret">
        <input type="text" className="secretInput" />
      </div>
    </div>
  );
};
export default Login;
