import React, { useEffect, useState } from 'react';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

  useEffect(() => {
    fetch(`/user/${userId}/appointments`) // Adjust the API route as per your backend
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, [userId]);

  return (
    <div>
      <h2>My Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
