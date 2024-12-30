import { useRef } from 'react';
import './login.css';
import facebookLogo from '../../pages/login/facebook-logo.png';
import googleLogo from '../../pages/login/google-logo.png';
import twitterLogo from '../../pages/login/twitter-logo.png';

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
  
  
  
  
  

const Login = () =>{

   
      
      
    return(
        <div>
            <div className="container">

                <form className='form-container'>
                    
                    <div>
                    <label for = "email">Email: </label>
                    <input type="email" id="email" name="email" ></input>
                    </div>

                    <div>
                    <label for = "password">Password: </label>
                    <input type="password" id="password" name="password" ></input>
                    </div>

                   

                   

                    {/* <button className='registerButton'>Login</button>    */}
                    <button type="submit" className="login-button">Login</button>

                    <a href="#" className="forgot-password">Forgot Password?</a>



                </form>
                <div className="social-login">
                    <p>Or login with</p>
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
                 <div className="signup-text">
                     Not a member? <a href="#">Sign up now</a>
                 </div>
                
            </div>

            <div className='secret'>
                <input type='text' className='secretInput'></input>
            </div>
        </div>
    )
}


export default Login;

