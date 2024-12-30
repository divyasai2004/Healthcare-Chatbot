import { useRef } from 'react';
import './register.css';
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
  
  
  
  
  

const Register = () =>{

   
      
      
    return(
        <div>
            <div className="container">

                <form className='form-container'>
                    <div>
                    <label for = "username">Username: </label>
                    <input type="text" id="username" name="username" ></input>
                    </div>

                    <div>
                    <label for = "email">Email: </label>
                    <input type="email" id="email" name="email" ></input>
                    </div>

                    <div>
                    <label for = "password">Password: </label>
                    <input type="password" id="password" name="password" ></input>
                    </div>

                    <div>
                    <label for = "age" className='specialLabel'>Age: </label>
                    <input type="number" id="age" name="age" className='specialInput' ></input>
                    </div>

                    <div>
                    <label for = "gender">Gender: </label>

                    <div className='gender'>
                    <input type="radio" id="gender" name="gender" ></input>
                    <span className='male'>Male</span>
                    <input type="radio" id="gender" name="gender" ></input>  
                    <span>Female</span>
                    </div>
                    </div>

                    <button className='registerButton'>Register</button>     
                </form>

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

            <div className='secret'>
                <input type='text' className='secretInput'></input>
            </div>
        </div>
    )
}


export default Register;