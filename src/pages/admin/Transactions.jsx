import React from "react";
import "./AdminDashboard.css"; // Import styles

const Transactions = () => {
  const transactions = [
    { id: "#TXN12345", user: "Divya Ganti", amount: "$50", status: "Success", date: "2024-02-26" },
    { id: "#TXN67890", user: "Jasmin", amount: "$30", status: "Pending", date: "2024-02-25" },
    { id: "#TXN54321", user: "Sujatha", amount: "$75", status: "Failed", date: "2024-02-24" },
  ];

  return (
    <div>
      <h2>Recent Transactions</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>{txn.id}</td>
              <td>{txn.user}</td>
              <td>{txn.amount}</td>
              <td className={`status ${txn.status.toLowerCase()}`}>{txn.status}</td>
              <td>{txn.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
