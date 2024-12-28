// import Register from './container/Register/Register';
// import Login from './container/login/Login';
// import Homepage from './container/homepage/HomePage';

import Header from './container/header/Header';
import Hello from './component/hello/Hello';
import SlidingButton from './component/slidingbutton/Slide';
import Features from './component/features/Features';
import Inputbot from './component/Inputbot/Inputbot';
import Send from './component/sendbutton/Send';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
// import Card from './component/card/Card';
import Fitbit from './pages/fitbit/Fitbit';
import Appointment from './pages/appointment/Appointment';

import './App.css';

// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () =>  {
  return (
    

    
     <div className='maindiv'>


      {/* <Header/>
      <SlidingButton/>
      <Hello/>
      <Features/>
      <Inputbot/> */}

      {/* <Register/> */}
      {/* <Login /> */}

      

      
      {/* <Login/>
      // <Homepage/> 

      {/* <Login></Login> */}
      {/* <Card title="Steps count"/> */}

      <Fitbit/>

      {/* <Appointment/> */}


     


      

{/*    
     <Routes>
        <Route exact path="/Register" Component={Register}/>
        <Route path="/login" Component={Login}/>
        <Route path="/homepage" Component={Homepage}/>
        <Route Component={Error} />
      </Routes> */}
      
    
      
     
    </div> 
    
    
  );
}

export default App;

