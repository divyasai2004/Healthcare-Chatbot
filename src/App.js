// import Register from './container/Register/Register';
// import Login from './container/login/Login';
 import Homepage from './container/homepage/HomePage';

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
import Chatbot from './pages/chatbot/Chatbot';
import Report from './pages/report/Report';

import AddTestimonial from './component/Testimonials/AddTestimonial';
import Testimonials from './pages/Testimonials/Testimonials';
import LandingPage from './pages/homepage/LandingPage';
import React from 'react';



// Admin Panel Imports
import Dashboard from'./pages/admin/dashboard/Dashboard';
import UserManagement from './pages/admin/users/UsersManagement';
import AppointmentsManagement from "./pages/admin/appointments/AppointmentsManagement";

import './App.css';

//import { Route, Routes } from 'react-router-dom';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './pages/user/dashboard/UserDashboard';
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

      
      {/*<Login/>
     

      {/* <Login></Login> */}
      {/* <Card title="Steps count"/> */}

      {/* <Fitbit/> */}

      {/* <Appointment/> */}
      {/* <Chatbot/> */}

      {/* <LandingPage/> */}
      {/* <Homepage/> */}
      {/* <Testimonials/> */}
      {/* <AddTestimonial/> */}
      {/* <Report/> */}

   
      <Routes>
       {/* Public Routes */}
        <Route path="/homepage" Component={LandingPage}/>
        <Route exact path="/Register" Component={Register}/>
        <Route path="/login" Component={Login}/>
        <Route path="/testimonials" element={<Testimonials />} /> 
        <Route path="/add-testimonial" element={<AddTestimonial />} />

        {/* User-Specific Routes */}
        <Route path="/fitbit" element={<Fitbit />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/report" element={<Report/>}/>
        

         {/* Admin-Specific Routes */}
         <Route path="/admin/dashboard" element={<Dashboard />} />
         <Route path="/admin/users" element={<UserManagement />} />
         <Route path="/user/dashboard" element={<UserDashboard />} />
         <Route path="/admin/appointments" element={<AppointmentsManagement />} />
        {/* Error Handling */}
       <Route Component={Error} />
      </Routes>
    
    </div> 
    
    
  );
}

export default App;

