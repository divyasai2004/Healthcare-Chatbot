import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./fitbit.css";
import Card from "../../component/card/Card";
import Button from "../../component/button/Button";
import { jsPDF } from "jspdf";

const Fitbit = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [stats, setStats] = useState({
    steps: 0,
    heartRate: 0,
    calories: 0,
    sleep: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setStats({
        steps: 8500,
        heartRate: 72,
        calories: 500,
        sleep: 7.2,
      });
    }, 1000);
  }, []);

  // Function to generate PDF report
  const downloadReport = () => {
    const doc = new jsPDF();
    doc.text("Fitbit Statistics Report", 20, 20);
    doc.text(`Steps: ${stats.steps} steps`, 20, 30);
    doc.text(`Heart Rate: ${stats.heartRate} bpm`, 20, 40);
    doc.text(`Calories Burned: ${stats.calories} kcal`, 20, 50);
    doc.text(`Sleep Duration: ${stats.sleep} hours`, 20, 60);
    doc.save("fitbit-report.pdf");
  };

  return (
    <div className="fitbit">
      <h1 className="fitbit-title">Your Fitbit Statistics</h1>
      <div className="gridcontainer">
        <div className="gridItem">
          <Card title="Steps Count" value={`${stats.steps} steps`} />
        </div>
        <div className="gridItem">
          <Card title="Heart Rate" value={`${stats.heartRate} bpm`} />
        </div>
        <div className="gridItem">
          <Card title="Calories Burned" value={`${stats.calories} kcal`} />
        </div>
        <div className="gridItem">
          <Card title="Sleep Duration" value={`${stats.sleep} hours`} />
        </div>
      </div>
      <div className="button-container">
        <button className="button" onClick={() => navigate("/report", { state: stats })}
>         View Report
        </button>
        <button className="button" onClick={downloadReport}>
          Download Report
        </button>
      </div>
    </div>
  );
};

export default Fitbit;




// import React, { useState, useEffect } from "react";
// import "./fitbit.css";
// import Card from "../../component/card/Card";
// import Button from "../../component/button/Button";

// const Fitbit = () => {
//   // 📌 Dummy Data for Fitness Stats
//   const [stats, setStats] = useState({
//     steps: 0,
//     heartRate: 0,
//     calories: 0,
//     sleep: 0,
//   });

//   useEffect(() => {
//     // Simulating API Call
//     setTimeout(() => {
//       setStats({
//         steps: 8500, // Example: Steps walked today
//         heartRate: 72, // Example: Heart rate (bpm)
//         calories: 500, // Example: Calories burned
//         sleep: 7.2, // Example: Sleep hours
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div className="fitbit">
//       <h1 className="fitbit-title">Your Fitbit Statistics</h1>
//       <div className="gridcontainer">
//         <div className="gridItem">
//           <Card title="Steps Count" value={`${stats.steps} steps`} />
//         </div>
//         <div className="gridItem">
//           <Card title="Heart Rate" value={`${stats.heartRate} bpm`} />
//         </div>
//         <div className="gridItem">
//           <Card title="Calories Burned" value={`${stats.calories} kcal`} />
//         </div>
//         <div className="gridItem">
//           <Card title="Sleep Duration" value={`${stats.sleep} hours`} />
//         </div>
//       </div>
//       <div className="button-container">
//         <Button text="Download Your Report" />
//       </div>
//     </div>
//   );
// };

// export default Fitbit;

