import { useRef } from 'react';
import './login.css';


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

                   

                   

                    <button className='registerButton'>Login</button>     
                </form>
            </div>

            <div className='secret'>
                <input type='text' className='secretInput'></input>
            </div>
        </div>
    )
}


export default Login;