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

      //  Ensure user data is valid
      if (!data.user) {
        throw new Error("Invalid user data received.");
      }

      //  Clear old credentials
      sessionStorage.clear();
      localStorage.clear();

      //  Store user & role safely
      sessionStorage.setItem("user", JSON.stringify(data.user));
      
      login(data.user);

      //  Show success message
      alert("Login successful! Redirecting to role selection...");

      //  Redirect to Role Selection Page
      setTimeout(() => {
        navigate("/role-selection", { replace: true });
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
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import "./login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
  
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3100/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Login failed!");
//       }

//       //  Ensure user data is valid
//       if (!data.user || !data.role) {
//         throw new Error("Invalid user data received.");
//       }

//       //  Clear old credentials
//       sessionStorage.clear();
//       localStorage.clear();

//       //  Store user & role safely
//       sessionStorage.setItem("user", JSON.stringify(data.user));
//       sessionStorage.setItem("userRole", data.role);

//       login(data.user, data.role);

//       //  Show success message
//       alert("Login successful!");

//       //  Redirect based on role after a short delay
//       setTimeout(() => {
//         navigate(data.role === "admin" ? "/admin/dashboard" : "/user/dashboard", { replace: true });
//       }, 500);

//     } catch (err) {
//       console.error("Login error:", err);
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         <form className="form-container" onSubmit={handleSubmit}>
//           {error && <p className="error-message">{error}</p>}
//           <div>
//             <label htmlFor="email">Email: </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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
//               required
//             />
//           </div>
//           <button type="submit" className="login-button" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



