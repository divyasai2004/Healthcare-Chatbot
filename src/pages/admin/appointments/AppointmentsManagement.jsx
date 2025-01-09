import React, { useEffect, useState } from "react";
import "./AppointmentsManagement.css";

const AppointmentsManagement = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointment data from the database API
    fetch("/api/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

  return (
    <div className="appointments-management">
      <h1>Manage Appointments</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.patient}</td>
              <td>
                <button>Edit</button>
                <button>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsManagement;
