import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DownloadReport = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    setShowModal(true);
  };

  const confirmDownload = () => {
    setShowModal(false);
    // Simulate report download
    alert("Downloading Report...");
  };

  const styles = {
    container: { textAlign: "center", padding: "20px" },
    header: { backgroundColor: "#007bff", padding: "15px", color: "white", borderRadius: "8px" },
    title: { margin: 0, fontSize: "24px" },
    main: { marginTop: "20px" },
    reportCard: { background: "#6c757d", padding: "15px", margin: "10px auto", width: "80%", borderRadius: "8px", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" },
    button: { padding: "10px 20px", border: "none", cursor: "pointer", fontSize: "16px", margin: "10px", borderRadius: "5px" },
    downloadButton: { backgroundColor: "#28a745", color: "white" },
    backButton: { color: "white" },
    modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
    modalContent: { background: "blue", padding: "20px", borderRadius: "8px", textAlign: "center", width: "300px" },
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
          <button style={{ ...styles.button, ...styles.downloadButton }} onClick={handleDownload}>
            Download PDF
          </button>
        </div>
        <button style={{ ...styles.button, ...styles.backButton }} onClick={() => navigate("/health-statistics")}>
          View Health Statistics
        </button>
      </main>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Confirm Download</h3>
            <p>Do you accept the terms before downloading?</p>
            <button style={{ ...styles.button, backgroundColor: "#007bff", color: "white" }} onClick={confirmDownload}>
              Accept & Download
            </button>
            <button style={{ ...styles.button, backgroundColor: "#dc3545", color: "white" }} onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
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
//     reportCard: {
//       background: "#6c757d",
//       padding: "15px",
//       margin: "10px auto",
//       width: "80%",
//       borderRadius: "8px",
//       boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
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
//       color: "white",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Download Your Health Report</h1>
//       </header>
//       <main style={styles.main}>
//         <div style={styles.reportCard}>
//           <h3>Report for February 2025</h3>
//           <p>Status: ✅ Completed</p>
//           <button style={{ ...styles.button, ...styles.downloadButton }}>
//             Download PDF
//           </button>
//         </div>
//         <button
//           style={{ ...styles.button, ...styles.backButton }}
//           onClick={() => navigate("/health-statistics")}
//         >
//           View Health Statistics
//         </button>
//       </main>
//     </div>
//   );
// };

// export default DownloadReport;

