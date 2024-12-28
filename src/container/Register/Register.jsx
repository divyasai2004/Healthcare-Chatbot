import axios from 'axios';
import "./Register.css"
import React, { useState } from 'react'
const Register =() =>{
    const [fullname, setFullName]= useState('');
    const [email, setEmail] = useState('');
    const [dateofbirth, setDateOfBirth]= useState();
    const [gender, setGender]=useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      alert(fullname);
      // Handle form submission logic here
      try {
        const response = await axios.post('http://localhost:3100/', {
          Fullname: fullname,
          Email: email,
          DOB: dateofbirth,
          Gen: gender,
          un: username,
          ps: password
        });
        console.log(response.data); // Log the response data
      } catch (error) {
        console.error(error); // Log any errors
      }
      console.log('Full Name: ',fullname);
      console.log('Email: ', email);
      console.log('Date of Birth: ',dateofbirth);
      console.log('Gender: ', gender);
      console.log('Username: ', username);
      console.log('Password: ', password);
    };
    return(
     
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Fullname:</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Age:</label>
            <input
              type="int"
              value={dateofbirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div style ={{marginBottom: '15px'}}>
          <label for="gender">Gender: </label>
          <select name="gender" > 
        {/* <option value="">Please select one…</option> */}
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
      
         </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
          
         

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              required
            />
          </div>
          <button type="submit" onClick={handleSubmit} style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </div>

    )
}

export default Register