import axios from 'axios';
import React, { useState } from 'react'
const Login =() =>{
    const [password, setpassword]= useState('');
    const [UserName, setUsername]= useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(UserName);
        // Handle form submission logic here
        try {
          const response = await axios.post('http://localhost:3100/login', {
            username: UserName,
           password: password,
          });
          console.log(response.data); // Log the response data
        } catch (error) {
          console.error(error); // Log any errors
        }
        console.log('username:', UserName);
        console.log('password:', password);

      };
      return(
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>UserName :</label>
            <input
              type="text"
              value={UserName}
              onChange={(e) =>setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password :</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
         
          <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
          </form>
      </div>
      )
    }
export default Login
      
    
