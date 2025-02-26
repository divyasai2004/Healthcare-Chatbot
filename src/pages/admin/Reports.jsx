import React, { useState, useEffect } from "react";

const Reports = () => {
  const [usageData, setUsageData] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [performance, setPerformance] = useState({ responseTime: "N/A", accuracy: "N/A" });

  // Simulated fetch function (Replace with API call)
  useEffect(() => {
    // Simulated Data Fetching
    setTimeout(() => {
      setUsageData([
        { date: "2025-02-25", queries: 120, activeUsers: 45 },
        { date: "2025-02-24", queries: 98, activeUsers: 38 },
        { date: "2025-02-23", queries: 75, activeUsers: 30 },
      ]);

      setUserCount(250); // Total registered users
      setPerformance({ responseTime: "1.2s", accuracy: "92%" }); // Simulated performance metrics
    }, 1000);
  }, []);

  // Inline CSS styles
  const styles = {
    container: {
      color: "white",
      padding: "20px",
      textAlign: "center",
      maxWidth: "600px",
      margin: "auto",
    },
    section: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.2)",
    },
    heading: {
      borderBottom: "2px solid cyan",
      paddingBottom: "5px",
      marginBottom: "10px",
      color: "cyan",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      padding: "8px",
      background: "rgba(255, 255, 255, 0.2)",
      marginBottom: "5px",
      borderRadius: "5px",
    },
    strongText: {
      color: "cyan",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Chatbot Reports</h1>

      {/* Chatbot Usage Section */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Usage Analytics</h3>
        {usageData ? (
          <ul style={styles.list}>
            {usageData.map((data, index) => (
              <li key={index} style={styles.listItem}>
                <strong style={styles.strongText}>{data.date}:</strong> {data.queries} queries, {data.activeUsers} active users
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading usage data...</p>
        )}
      </div>

      {/* User Analytics Section */}
      <div style={styles.section}>
        <h3 style={styles.heading}>User Analytics</h3>
        <p>
          Total Registered Users: <strong style={styles.strongText}>{userCount}</strong>
        </p>
      </div>

      {/* Performance Report Section */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Performance Metrics</h3>
        <p>
          Average Response Time: <strong style={styles.strongText}>{performance.responseTime}</strong>
        </p>
        <p>
          AI Accuracy Rate: <strong style={styles.strongText}>{performance.accuracy}</strong>
        </p>
      </div>
    </div>
  );
};

export default Reports;
