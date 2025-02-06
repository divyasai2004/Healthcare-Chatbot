import { useState } from 'react';
import './register.css';
import facebookLogo from '../../pages/login/facebook-logo.png';
import googleLogo from '../../pages/login/google-logo.png';
import twitterLogo from '../../pages/login/twitter-logo.png';

const Register = () => {
    const [gender, setGender] = useState('');  // State for Gender

    return (
        <div>
            <div className="container_reg">
                <form className='form-container_reg'>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    {/* Username Field */}
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    {/* Age Field */}
                    <div>
                        <label htmlFor="age" className='specialLabel'>Age: </label>
                        <input type="text" id="age" name="age" className='specialInput' required />
                    </div>

                    {/* Gender Field as Toggle Buttons */}
                    <div>
                        <label>Gender: </label>
                        <div className='gender'>
                            <button
                                type="button"
                                className={`gender-btn ${gender === "male" ? "active" : ""}`}
                                onClick={() => setGender("male")}
                            >
                                Male
                            </button>
                            <button
                                type="button"
                                className={`gender-btn ${gender === "female" ? "active" : ""}`}
                                onClick={() => setGender("female")}
                            >
                                Female
                            </button>
                        </div>
                    </div>

                    {/* Register Button */}
                    {/* <button className='registerButton'>Register</button>      */}
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
            </div>

            {/* Hidden Secret Input */}
            <div className='secret'>
                <input type='text' className='secretInput' />
            </div>
        </div>
    );
}

export default Register;

// function randomText(){
  
//     let text = "अआइईउऊएऐओऔअंअःऋॠकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ";
    
//     const letter = text[Math.floor(Math.random() * text.length)];
    
//     return letter;
//   }
  
  
//   //hacking animation
//   function rain(){
    
    
//     let e = document.createElement('div');
    
//     let left = Math.floor(Math.random() * 100);
//     let size = Math.random() * 1.8;
//     let duration = Math.random() * 2;
    
//       e.classList.add('text');
//       e.innerText = randomText();
//       document.body.appendChild(e);
    
//     e.style.left = left + '%';
//     e.style.fontSize = 0.3 + size + 'em';
//     e.style.animationDuration = 1 + duration  + 'px';
    
//       //remove
//     setTimeout(function(){
//       document.body.removeChild(e)
//     },4050)
    
//   }
  
  
  
//   setInterval(function(){
//     rain()
//   },20);
