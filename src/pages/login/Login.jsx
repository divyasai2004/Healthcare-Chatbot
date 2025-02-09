import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3100/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed!");
      }

      // ✅ Ensure user data is valid
      if (!data.user || !data.role) {
        throw new Error("Invalid user data received.");
      }

      // ✅ Clear old credentials
      sessionStorage.clear();
      localStorage.clear();

      // ✅ Store user & role safely
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("userRole", data.role);

      login(data.user, data.role);

      // ✅ Show success message
      alert("Login successful!");

      // ✅ Redirect based on role after a short delay
      setTimeout(() => {
        navigate(data.role === "admin" ? "/admin/dashboard" : "/user/dashboard", { replace: true });
      }, 500);

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;





// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext"; // Import AuthContext for login state
// import "./login.css";
// import facebookLogo from "../../pages/login/facebook-logo.png";
// import googleLogo from "../../pages/login/google-logo.png";
// import twitterLogo from "../../pages/login/twitter-logo.png";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth(); // Use login function from AuthContext

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (email && password) {
//       // Fake authentication logic (Replace this with actual API request)
//       const userData = { email }; // Backend should return user details
//       const userRole = "user"; // Replace with actual user role from backend
      
//       login(userData, userRole); // Update global auth state

//       // Redirect to the last attempted page, or default to /user/dashboard
//       const redirectPath = location.state?.from || "/user/dashboard";
//       navigate(redirectPath, { replace: true });
//     } else {
//       alert("Please fill in both fields.");
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         <form className="form-container" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">Email: </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Your email"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password">Password: </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button type="submit" className="login-button">Login</button>

//           <a href="#" className="forgot-password">Forgot Password?</a>
//         </form>

//         <div className="social-login">
//           <p>Or login with</p>
//           <div className="social-buttons">
//             <button className="social-btn facebook">
//               <img src={facebookLogo} alt="Facebook Logo" />
//             </button>
//             <button className="social-btn twitter">
//               <img src={twitterLogo} alt="Twitter Logo" />
//             </button>
//             <button className="social-btn google">
//               <img src={googleLogo} alt="Google Logo" />
//             </button>
//           </div>
//         </div>

//         <div className="signup-text">
//           Not a member? <a href="/register">Sign up now</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
