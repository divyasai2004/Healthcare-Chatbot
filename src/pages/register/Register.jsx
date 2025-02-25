import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import for redirection
import './register.css';
import facebookLogo from '../../pages/login/facebook-logo.png';
import googleLogo from '../../pages/login/google-logo.png';
import twitterLogo from '../../pages/login/twitter-logo.png';

const Register = () => {
    const navigate = useNavigate(); // ✅ Hook for navigation

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle register button click
    const handleRegister = async (event) => {
        event.preventDefault(); // Prevents page refresh

        // Ensure all required fields are filled
        if (!formData.email || !formData.username || !formData.password) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3100/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log("Server Response:", data); // ✅ Log the response for debugging

            if (response.ok) {  
                alert("User registered successfully!");
                navigate('/login'); // ✅ Redirect to login after successful registration
            } else {
                alert("Registration failed: " + data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div>
            <div className="container_reg">
                <form className='form-container_reg' onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>

                    <button type="submit" className='registerButton'>Register</button>
                </form>

                {/* Social Media Login */}
                <div className="social-login">
                    <p>Or signup with</p>
                    <div className="social-buttons">
                        <button className="social-btn facebook">
                            <img src={facebookLogo} alt="Facebook Logo" className="social-logo" />
                        </button>
                        <button className="social-btn twitter">
                            <img src={twitterLogo} alt="Twitter Logo" className="social-logo" />
                        </button>
                        <button className="social-btn google">
                            <img src={googleLogo} alt="Google Logo" className="social-logo" />
                        </button>
                    </div>
                </div>

                <button className="loginButton" onClick={() => navigate('/login')}>
                    Already have an account? Login
                </button>

            </div>
        </div>
    );
};

export default Register;