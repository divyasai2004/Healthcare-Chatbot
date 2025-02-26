import React, { useState } from "react";
import Transactions from "./Transactions";
import Refunds from "./Refunds";
import Subscriptions from "./Subscriptions";
import "./AdminDashboard.css";

const PaymentManagement = () => {
  const [activeTab, setActiveTab] = useState("transactions");

  return (
    <div>
      <h1>Payment Management</h1>
      <p>Manage all payment transactions here.</p>

      {/* Buttons to switch tabs */}
      <div className="button-group">
        <button onClick={() => setActiveTab("transactions")}>View Transactions</button>
        <button onClick={() => setActiveTab("refunds")}>Process Refunds</button>
        <button onClick={() => setActiveTab("subscriptions")}>Manage Subscriptions</button>
      </div>

      {/* Conditional rendering based on selected tab */}
      <div className="tab-content">
        {activeTab === "transactions" && <Transactions />}
        {activeTab === "refunds" && <Refunds />}
        {activeTab === "subscriptions" && <Subscriptions />}
      </div>
    </div>
  );
};

export default PaymentManagement;
