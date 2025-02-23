import { useNavigate } from "react-router-dom";
import "./features.css";

const Features = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="features">
      <div className="feature1" onClick={() => navigate("/chatbot")}>
        <h1>Diagnose Health Issues</h1>
      </div>
      <div className="feature2" onClick={() => navigate("/report")}>
        <h1>Check Your Reports</h1>
      </div>
      <div className="feature3" onClick={() => navigate("/fitbit")}>
        <h1>Get Track of Your Health</h1>
      </div>
      <div className="feature4" onClick={() => navigate("/appointment")}>
        <h1>Make Appointments</h1>
      </div>
    </div>
  );
};

export default Features;


// import './features.css'


// const Features = () => {
//     return(
//         <div className='features'>
//             <div className='feature1'>
//              <h1>diagnose health issues</h1>
//             </div>
//             <div className='feature2'>
//               <h1>check your reports</h1>
//             </div>
//             <div className='feature3'>
//               <h1>get track of your health</h1>
//             </div>
//             <div className='feature4'>
//               <h1>make appointments</h1>
//             </div>
//         </div>

//     )
// }

// export default Features;