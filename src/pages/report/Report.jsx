import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./report.module.css"; // Import CSS Module

const Report = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Healthcare Chatbot Reports</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.reportCard}>
          <h2 className={styles.cardTitle}>User Report Summary</h2>
          <p className={styles.cardContent}>
            This section provides a summary of your interactions and health insights.
          </p>
          <button 
            className={`${styles.button} ${styles.downloadButton}`} 
            onClick={() => navigate("/download-report")}
          >
            Download Report (PDF)
          </button>
        </div>

        <div className={styles.reportCard}>
          <h2 className={styles.cardTitle}>Appointments Overview</h2>
          <p className={styles.cardContent}>
            View details of past and upcoming appointments with doctors.
          </p>
          <button 
            className={`${styles.button} ${styles.viewDetailsButton}`} 
            onClick={() => navigate("/appointments")}
          >
            View Details
          </button>
        </div>

        <div className={styles.reportCard}>
          <h2 className={styles.cardTitle}>Health Statistics</h2>
          <p className={styles.cardContent}>
            Analyze your health data and trends using AI-powered insights.
          </p>
          <button 
            className={`${styles.button} ${styles.viewDetailsButton}`} 
            onClick={() => navigate("/health-statistics")}
          >
            View Statistics
          </button>
        </div>
      </main>
    </div>
  );
};

export default Report;


// import React from "react";
// import styles from "./report.module.css"; // Import CSS Module
// // import Slide from '../../component/slidingbutton/Slide';

// const Report = () => {
//   return (
//     <div className={styles.container}>
//       {/* Header Section */}
//       <header className={styles.header}>
//         <h1 className={styles.title}>Healthcare Chatbot Reports</h1>
//       </header>
//       {/* <Slide/>  */}
//       {/* Main Content Section */}
//       <main className={styles.main}>
//         {/* Report Card 1 */}
//         <div className={styles.reportCard}>
//           <h2 className={styles.cardTitle}>User Report Summary</h2>
//           <p className={styles.cardContent}>
//             This section provides a summary of your interactions and health insights.
//           </p>
//           <button className={`${styles.button} ${styles.downloadButton}`}>
//             Download Report (PDF)
//           </button>
//         </div>

//         {/* Report Card 2 */}
//         <div className={styles.reportCard}>
//           <h2 className={styles.cardTitle}>Appointments Overview</h2>
//           <p className={styles.cardContent}>
//             View details of past and upcoming appointments with doctors.
//           </p>
//           <button className={`${styles.button} ${styles.viewDetailsButton}`}>
//             View Details
//           </button>
//         </div>

//         {/* Report Card 3 */}
//         <div className={styles.reportCard}>
//           <h2 className={styles.cardTitle}>Health Statistics</h2>
//           <p className={styles.cardContent}>
//             Analyze your health data and trends using AI-powered insights.
//           </p>
//           <button className={`${styles.button} ${styles.viewDetailsButton}`}>
//             View Statistics
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Report;
