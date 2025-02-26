import React, { useState, useEffect } from "react";
import "./fitbit.css";
import Card from "../../component/card/Card";
import Button from "../../component/button/Button";

const Fitbit = () => {
  // 📌 Dummy Data for Fitness Stats
  const [stats, setStats] = useState({
    steps: 0,
    heartRate: 0,
    calories: 0,
    sleep: 0,
  });

  useEffect(() => {
    // Simulating API Call
    setTimeout(() => {
      setStats({
        steps: 8500, // Example: Steps walked today
        heartRate: 72, // Example: Heart rate (bpm)
        calories: 500, // Example: Calories burned
        sleep: 7.2, // Example: Sleep hours
      });
    }, 1000);
  }, []);

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
        <Button text="Download Your Report" />
      </div>
    </div>
  );
};

export default Fitbit;


// import './fitbit.css'
// import Card from '../../component/card/Card';
// import Slide from '../../component/slidingbutton/Slide';
// //import Header from '../../container/header/Header';
// import Button from '../../component/button/Button';



// const Fitbit = () => {
//     return (
//         <div className="fitbit">
//             {/* <Header/>
//             <Slide/>  */}
//         <div className="gridcontainer">
//             <div className='gridItem'>
//             <Card title="Steps count"/>
//             </div>
//             <div className='gridItem'>
//             <Card title="Steps count"/>
//             </div>
//             <div className='gridItem'>
//             <Card title="Steps count"/>
//             </div>
//             <div className='gridItem'>
//             <Card title="Steps count"/>
//             </div>   
//         </div>
//         <div className='button'>
//         <Button text = "Download Your Report" />
//         </div>
//         </div>
//     );
// }


// export default Fitbit;