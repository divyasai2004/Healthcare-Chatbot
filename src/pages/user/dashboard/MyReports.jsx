import React, { useEffect, useState } from 'react';

const MyReports = () => {
  const [reports, setReports] = useState([]);
  const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

  useEffect(() => {
    fetch(`/user/${userId}/reports`) // Adjust the API route as per your backend
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error('Error fetching reports:', error));
  }, [userId]);

  return (
    <div>
      <h2>My Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <p><strong>Title:</strong> {report.title}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <a href={report.fileUrl} target="_blank" rel="noopener noreferrer">
              Download Report
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReports;
