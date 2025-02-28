import React from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Import autoTable explicitly
import styles from "./report.module.css"; // Import CSS Module

const Report = () => {
  const navigate = useNavigate();

  // Function to generate and download a PDF report
  const downloadPDF = () => {
    const doc = new jsPDF(); // Create new PDF document
  
    // Title
    doc.text("Healthcare Chatbot Report", 20, 10);
  
    // Define table headers and data
    const columns = ["Category", "Details"];
    const data = [
      ["Total Interactions", "50"],
      ["Appointments Scheduled", "5"],
      ["Health Tips Received", "15"],
      ["Last Consultation", "Dr. Smith Tamboli (Feb 26, 2025)"]
    ];
  
    // Use autoTable correctly
    autoTable(doc, {
      head: [columns],
      body: data,
      startY: 20
    });
  
    // Save PDF
    doc.save("Healthcare_Report.pdf");
  };

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
            onClick={downloadPDF}
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
