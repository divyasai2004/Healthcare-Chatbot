import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Context for Authentication
import { AuthProvider } from './context/AuthContext';

// Page and Component Imports
import LandingPage from './pages/homepage/LandingPage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import Fitbit from './pages/fitbit/Fitbit';
import Appointment from './pages/appointment/Appointment';
import Chatbot from './pages/chatbot/Chatbot';
import Report from './pages/report/Report';
import AddTestimonial from './component/Testimonials/AddTestimonial';
import Testimonials from './pages/Testimonials/Testimonials';

// Admin Panel Imports
import Dashboard from './pages/admin/dashboard/Dashboard';
import UserManagement from './pages/admin/users/UsersManagement';
import AppointmentsManagement from './pages/admin/appointments/AppointmentsManagement';

// User Dashboard
import UserDashboard from './pages/user/dashboard/UserDashboard';

import './App.css';

const App = () => {
  return (
    <div className="maindiv">
     
      <Chatbot/>
      {/* <Report/>
      <Appointment/>
      <AddTestimonial/>
      <Testimonials/> */}
      {/* <Fitbit/> */}
      {/* <Report/> */}

      
      {/* Wrapping the App with AuthProvider for global authentication context */}
      <AuthProvider>
        {/* Routes Configuration */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} /> {/* Default Landing Page */}
          <Route path="/homepage" element={<LandingPage />} />
          <Route path="/register" element={<Register />} /> {/* Registration Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
          <Route path="/testimonials" element={<Testimonials />} /> {/* Testimonials Page */}
          <Route path="/add-testimonial" element={<AddTestimonial />} /> {/* Add Testimonial Page */}

          {/* User-Specific Protected Routes */}
          <Route
            path="/fitbit"
            element={
              <ProtectedRoute role="user">
                <Fitbit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment"
            element={
              <ProtectedRoute role="user">
                <Appointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chatbot"
            element={
              <ProtectedRoute role="user">
                <Chatbot />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute role="user">
                <Report />
              </ProtectedRoute>
            }
          />

          {/* Admin-Specific Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute role="admin">
                <UserManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/appointments"
            element={
              <ProtectedRoute role="admin">
                <AppointmentsManagement />
              </ProtectedRoute>
            }
          />

          {/* User Dashboard */}
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Catch-All Route */}
          <Route path="*" element={<LandingPage />} /> {/* Redirect to Landing Page for undefined routes */}
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;








// // import Register from './container/Register/Register';
// // import Login from './container/login/Login';
//  import Homepage from './container/homepage/HomePage';

// import Header from './container/header/Header';
// import Hello from './component/hello/Hello';
// import SlidingButton from './component/slidingbutton/Slide';
// import Features from './component/features/Features';
// import Inputbot from './component/Inputbot/Inputbot';
// import Send from './component/sendbutton/Send';
// import Register from './pages/register/Register';
// import Login from './pages/login/Login';
// import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

// // import Card from './component/card/Card';
// import Fitbit from './pages/fitbit/Fitbit';
// import Appointment from './pages/appointment/Appointment';
// import Chatbot from './pages/chatbot/Chatbot';
// import Report from './pages/report/Report';

// import AddTestimonial from './component/Testimonials/AddTestimonial';
// import Testimonials from './pages/Testimonials/Testimonials';
// import LandingPage from './pages/homepage/LandingPage';
// import React from 'react';

// // Admin Panel Imports
// import Dashboard from'./pages/admin/dashboard/Dashboard';
// import UserManagement from './pages/admin/users/UsersManagement';
// import AppointmentsManagement from "./pages/admin/appointments/AppointmentsManagement";

// import './App.css';

// //import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';

// import UserDashboard from './pages/user/dashboard/UserDashboard';

// //load Stripe
// // import PaymentForm from './pages/PaymentForm'; './pages/PaymentForm';
// // import { Elements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';
// // import PaymentForm from './PaymentForm';
// // import PaymentForm from './pages/PaymentForm';

// //const stripePromise = loadStripe('your_publishable_key'); // Replace with your actual key
// const App = () =>  {
//   return (   
//      <div className='maindiv'>

//       {/* <Header/>
//       <SlidingButton/>
//       <Hello/>
//       <Features/>
//       <Inputbot/> */}

//       {/* <Register/> */}
//       {/* <Login /> */}     
//       {/*<Login/>
     
//       {/* <Login></Login> */}
//       {/* <Card title="Steps count"/> */}

//       {/* <Fitbit/> */}

//       {/* <Appointment/> */}
//       {/* <Chatbot/> */}

//       {/* <LandingPage/> */}
//       {/* <Homepage/> */}
//       {/* <Testimonials/> */}
//       {/* <AddTestimonial/> */}
//       {/* <Report/> */}
//       {/* <LandingPage/> */}
      
//      {/* <Elements stripe={stripePromise}>
//       <PaymentForm />
//     </Elements>

//     */}
//    <AuthProvider>
//    <Routes>
//   {/* Public Routes */}
//   <Route path="/" element={<LandingPage />} />
//   <Route path="/homepage" element={<LandingPage />} />
//   <Route path="/register" element={<Register />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/testimonials" element={<Testimonials />} />
//   <Route path="/add-testimonial" element={<AddTestimonial />} />

//   {/* User Routes */}
//   <Route
//     path="/fitbit"
//     element={
//       <ProtectedRoute role="user">
//         <Fitbit />
//       </ProtectedRoute>
//     }
//   />
//   <Route
//     path="/appointment"
//     element={
//       <ProtectedRoute role="user">
//         <Appointment />
//       </ProtectedRoute>
//     }
//   />
//   <Route
//     path="/chatbot"
//     element={
//       <ProtectedRoute role="user">
//         <Chatbot />
//       </ProtectedRoute>
//     }
//   />
//   <Route
//     path="/report"
//     element={
//       <ProtectedRoute role="user">
//         <Report />
//       </ProtectedRoute>
//     }
//   />

//   {/* Admin Routes */}
//   <Route
//     path="/admin/dashboard"
//     element={
//       <ProtectedRoute role="admin">
//         <Dashboard />
//       </ProtectedRoute>
//     }
//   />
//   <Route
//     path="/admin/users"
//     element={
//       <ProtectedRoute role="admin">
//         <UserManagement />
//       </ProtectedRoute>
//     }
//   />
//   <Route
//     path="/admin/appointments"
//     element={
//       <ProtectedRoute role="admin">
//         <AppointmentsManagement />
//       </ProtectedRoute>
//     }
//   />

//   {/* User Dashboard */}
//   <Route
//     path="/user/dashboard"
//     element={
//       <ProtectedRoute role="user">
//         <UserDashboard />
//       </ProtectedRoute>
//     }
//   />

//   {/* Catch-All Route */}
//   <Route path="*" element={<LandingPage />} />
// </Routes>
// </AuthProvider>
   
//     </div>    
//   );
// }
// export default App;

