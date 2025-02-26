import React from "react";
import { useNavigate } from "react-router-dom";

const HealthStatistics = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
    },
    header: {
      backgroundColor: "#28a745",
      padding: "15px",
      color: "white",
      borderRadius: "8px",
    },
    title: {
      margin: 0,
      fontSize: "24px",
    },
    main: {
      marginTop: "20px",
    },
    statCard: {
      background: "#0b2d4e",
      padding: "15px",
      margin: "10px auto",
      width: "80%",
      borderRadius: "8px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    backButton: {
      backgroundColor: "#6c757d",
      color: "white",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      marginTop: "20px",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Health Statistics</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.statCard}>
          <h3>Heart Rate</h3>
          <p>Average: 75 BPM</p>
        </div>
        <div style={styles.statCard}>
          <h3>Steps Count</h3>
          <p>Daily Average: 8,500 steps</p>
        </div>
        <div style={styles.statCard}>
          <h3>Calories Burned</h3>
          <p>Daily Average: 2,300 kcal</p>
        </div>
        <button style={styles.backButton} onClick={() => navigate("/appointments")}>
          Go to Appointments
        </button>
      </main>
    </div>
  );
};

export default HealthStatistics;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HealthStatistics = () => {
//   const navigate = useNavigate();

//   const styles = {
//     container: {
//       textAlign: "center",
//       padding: "20px",
//     },
//     header: {
//       backgroundColor: "#28a745",
//       padding: "15px",
//       color: "white",
//       borderRadius: "8px",
//     },
//     title: {
//       margin: 0,
//       fontSize: "24px",
//     },
//     main: {
//       marginTop: "20px",
//     },
//     statCard: {
//       background: "#f8f9fa",
//       padding: "15px",
//       margin: "10px auto",
//       width: "80%",
//       borderRadius: "8px",
//       boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//     },
//     backButton: {
//       backgroundColor: "#6c757d",
//       color: "white",
//       padding: "10px 20px",
//       border: "none",
//       cursor: "pointer",
//       marginTop: "20px",
//       borderRadius: "5px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Health Statistics</h1>
//       </header>
//       <main style={styles.main}>
//         <div style={styles.statCard}>
//           <h3>Heart Rate</h3>
//           <p>Average: 75 BPM</p>
//         </div>
//         <div style={styles.statCard}>
//           <h3>Steps Count</h3>
//           <p>Daily Average: 8,500 steps</p>
//         </div>
//         <div style={styles.statCard}>
//           <h3>Calories Burned</h3>
//           <p>Daily Average: 2,300 kcal</p>
//         </div>
//         <button style={styles.backButton} onClick={() => navigate("/reports")}>
//           Back to Reports
//         </button>
//       </main>
//     </div>
//   );
// };

// export default HealthStatistics;
