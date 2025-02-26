import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    axios.get("http://localhost:3100/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Handle user deletion
  const deleteUser = (id) => {
    axios.delete(`http://localhost:3100/api/users/${id}`)
      .then(() => setUsers(users.filter(user => user._id !== id)))
      .catch(error => console.error("Error deleting user:", error));
  };

  // Handle role update
  const updateUserRole = (id, newRole) => {
    axios.put(`http://localhost:3100/api/users/${id}`, { role: newRole })
      .then(() => {
        setUsers(users.map(user => user._id === id ? { ...user, role: newRole } : user));
      })
      .catch(error => console.error("Error updating user role:", error));
  };

  // Inline CSS styles
  const styles = {
    container: {
      color: "white",
      padding: "20px",
      textAlign: "center",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      background: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 10px rgba(0, 255, 255, 0.2)",
    },
    th: {
      background: "#2b2b2b",
      padding: "12px",
      color: "white",
      borderBottom: "2px solid cyan",
    },
    td: {
      padding: "10px",
      textAlign: "center",
      borderBottom: "1px solid #444",
      color: "white",
    },
    select: {
      padding: "6px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      background: "#333",
      color: "white",
    },
    button: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      background: "#dc3545",
      color: "white",
      transition: "0.3s",
    },
    buttonHover: {
      background: "#a71d2a",
    }
  };

  return (
    <div style={styles.container}>
      <h1>Manage Users</h1>
      <p>Here you can view, edit, update, or remove users.</p>
      <table style={styles.table} border="1">
        <thead>
          <tr>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td style={styles.td}>{user.username}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>
                <select 
                  style={styles.select}
                  value={user.role} 
                  onChange={(e) => updateUserRole(user._id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td style={styles.td}>
                <button 
                  style={styles.button} 
                  onClick={() => deleteUser(user._id)}
                  onMouseOver={(e) => e.target.style.background = styles.buttonHover.background}
                  onMouseOut={(e) => e.target.style.background = styles.button.background}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;

