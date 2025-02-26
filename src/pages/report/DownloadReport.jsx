import React from "react";
import { useNavigate } from "react-router-dom";

const DownloadReport = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
    },
    header: {
      backgroundColor: "#007bff",
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
    reportCard: {
      background: "#6c757d",
      padding: "15px",
      margin: "10px auto",
      width: "80%",
      borderRadius: "8px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      margin: "10px",
      borderRadius: "5px",
    },
    downloadButton: {
      backgroundColor: "#28a745",
      color: "white",
    },
    backButton: {
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Download Your Health Report</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.reportCard}>
          <h3>Report for February 2025</h3>
          <p>Status: ✅ Completed</p>
          <button style={{ ...styles.button, ...styles.downloadButton }}>
            Download PDF
          </button>
        </div>
        <button
          style={{ ...styles.button, ...styles.backButton }}
          onClick={() => navigate("/health-statistics")}
        >
          View Health Statistics
        </button>
      </main>
    </div>
  );
};

export default DownloadReport;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const DownloadReport = () => {
//   const navigate = useNavigate();

//   const styles = {
//     container: {
//       textAlign: "center",
//       padding: "20px",
//     },
//     header: {
//       backgroundColor: "#007bff",
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
//     description: {
//       fontSize: "18px",
//       marginBottom: "20px",
//     },
//     button: {
//       padding: "10px 20px",
//       border: "none",
//       cursor: "pointer",
//       fontSize: "16px",
//       margin: "10px",
//       borderRadius: "5px",
//     },
//     downloadButton: {
//       backgroundColor: "#28a745",
//       color: "white",
//     },
//     backButton: {
//       backgroundColor: "#6c757d",
//       color: "white",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Download Your Health Report</h1>
//       </header>
//       <main style={styles.main}>
//         <p style={styles.description}>
//           Your health report provides insights based on your chatbot interactions and AI analysis.
//         </p>
//         <button style={{ ...styles.button, ...styles.downloadButton }}>
//           Download PDF
//         </button>
//         <button
//           style={{ ...styles.button, ...styles.backButton }}
//           onClick={() => navigate("/reports")}
//         >
//           Back to Reports
//         </button>
//       </main>
//     </div>
//   );
// };

// export default DownloadReport;
