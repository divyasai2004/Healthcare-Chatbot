import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Bhupendra Singh Sahni",
      specialization: "Cardiologist",
      date: "12th March 2025",
      time: "10:00 AM",
      location: "Panvel, Raigad",
      mode: "Offline",
      contact: "+1 234 567 890",
    },
    {
      id: 2,
      doctor: "Dr. Santosh B Kamerkar",
      specialization: "Dermatologist",
      date: "18th March 2025",
      time: "3:00 PM",
      location: "Online (Zoom)",
      mode: "Online",
      contact: "dr.santosh@telemed.com",
    },
  ];

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
    },
    header: {
      backgroundColor: "#17a2b8",
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
    card: {
      background: "#6c757d",
      padding: "15px",
      margin: "10px auto",
      width: "80%",
      borderRadius: "8px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "8px 15px",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
      marginTop: "10px",
    },
    closeButton: {
      backgroundColor: "#dc3545",
      color: "white",
      padding: "8px 15px",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
      marginTop: "10px",
    },
    backButton: {
      backgroundColor: "cyan",
      color: "black",
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
        <h1 style={styles.title}>Your Appointments</h1>
      </header>
      <main style={styles.main}>
        {selectedAppointment ? (
          // 📌 View Details Interface
          <div style={styles.card}>
            <h3>{selectedAppointment.doctor}</h3>
            <p><strong>Specialization:</strong> {selectedAppointment.specialization}</p>
            <p><strong>Date:</strong> {selectedAppointment.date}</p>
            <p><strong>Time:</strong> {selectedAppointment.time}</p>
            <p><strong>Location:</strong> {selectedAppointment.location}</p>
            <p><strong>Mode:</strong> {selectedAppointment.mode}</p>
            <p><strong>Contact:</strong> {selectedAppointment.contact}</p>
            <button style={styles.closeButton} onClick={() => setSelectedAppointment(null)}>
              Close Details
            </button>
          </div>
        ) : (
          // 📌 List of Appointments
          appointments.map((appt) => (
            <div key={appt.id} style={styles.card}>
              <h3>{appt.doctor}</h3>
              <p>{appt.specialization} - {appt.date} at {appt.time}</p>
              <button style={styles.button} onClick={() => setSelectedAppointment(appt)}>
                View Details
              </button>
            </div>
          ))
        )}
        <button style={styles.backButton} onClick={() => navigate("/download-report")}>
          Go to Reports
        </button>
      </main>
    </div>
  );
};

export default Appointments;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Appoint = () => {
//   const navigate = useNavigate();

//   const styles = {
//     container: {
//       textAlign: "center",
//       padding: "20px",
//     },
//     header: {
//       backgroundColor: "#17a2b8",
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
//     card: {
//       background: "#0b2d4e",
//       padding: "15px",
//       margin: "10px auto",
//       width: "80%",
//       borderRadius: "8px",
//       boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//     },
//     detailsButton: {
//       backgroundColor: "#007bff",
//       color: "white",
//       padding: "8px 15px",
//       border: "none",
//       cursor: "pointer",
//       borderRadius: "5px",
//       marginTop: "10px",
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
//         <h1 style={styles.title}>Your Appointments</h1>
//       </header>
//       <main style={styles.main}>
//         <div style={styles.card}>
//           <h3>Dr. Santosh B Kamerkar</h3>
//           <p>Cardiologist - 12th March 2025 at 10:00 AM</p>
//           <button style={styles.detailsButton} onClick={() => alert("Viewing Details")}>
//             View Details
//           </button>
//         </div>
//         <div style={styles.card}>
//           <h3>Dr. Vishal Malusare</h3>
//           <p>Dermatologist - 18th March 2025 at 3:00 PM</p>
//           <button style={styles.detailsButton} onClick={() => alert("Viewing Details")}>
//             View Details
//           </button>
//         </div>
//         <button style={styles.backButton} onClick={() => navigate("/download-report")}>
//           Go to Reports
//         </button>
//       </main>
//     </div>
//   );
// };

// export default Appoint;
