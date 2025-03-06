import React from "react";
import { useNavigate } from "react-router-dom";
import "./plans.css";

const Plans = () => {
  const navigate = useNavigate();

  return (
    <div className="plans-container">
      <h1 className="plans-title">Choose Your Plan</h1>
      <p className="plans-subtitle">Find the best plan that fits your needs</p>

      <div className="plans-grid">
        {/* Free Plan */}
        <div className="plan-card basic">
          <h2>Basic</h2>
          <p>For personal use and exploration</p>
          <h3>₹0</h3>
          <ul>
            <li>✔ 100 requests per day</li>
            <li>✔ Free trial features access</li>
            <li>✔ Limited chatbot history</li>
          </ul>
          <button onClick={() => navigate("/register")}>Get Started</button>
        </div>

        {/* Premium Plan */}
        <div className="plan-card premium">
          <h2>Premium</h2>
          <p>For professionals & small businesses</p>
          <h3>₹999</h3>
          <ul>
            <li>✔ Unlimited chatbot access</li>
            <li>✔ Full AI-powered analysis</li>
            <li>✔ Priority support</li>
          </ul>
          <button onClick={() => navigate("/payment")}>Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./plans.css";

// const Plans = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="plans-container">
//       <h1 className="plans-title">Choose Your Plan</h1>
//       <p className="plans-subtitle">Find the best plan that fits your needs</p>

//       <div className="plans-grid">
//         {/* Free Plan */}
//         <div className="plan-card basic">
//           <h2>Basic</h2>
//           <p>For personal use and exploration</p>
//           <h3>$0</h3>
//           <ul>
//             <li>✔ 100 requests per day</li>
//             <li>✔ Free trial features access</li>
//             <li>✔ Limited chatbot history</li>
//           </ul>
//           <button onClick={() => navigate("/register")}>Get Started</button>
//         </div>

//         {/* Premium Plan */}
//         <div className="plan-card premium">
//           <h2>Premium</h2>
//           <p>For professionals & small businesses</p>
//           <h3>$9.99</h3>
//           <ul>
//             <li>✔ Unlimited chatbot access</li>
//             <li>✔ Full AI-powered analysis</li>
//             <li>✔ Priority support</li>
//           </ul>
//           <button onClick={() => navigate("/payment")}>Upgrade Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Plans;

