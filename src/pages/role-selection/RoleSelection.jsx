import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");

    if (userRole === "admin") {
      navigate("/admin-dashboard", { replace: true });
    } else if (userRole === "user") {
      navigate("/user-dashboard", { replace: true });
    } else {
      alert("Unauthorized access! Please login.");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="continue-container">
      <h2>Redirecting...</h2>
    </div>
  );
};

export default RoleSelection;


// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const ContinueAs = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleAdminLogin = () => {
//     const adminPassword = prompt("Enter Admin Password:");
//     if (adminPassword === "admin123") {
//       login({ email: "admin@example.com" }, "admin");
//       navigate("/admin/dashboard", { replace: true });
//     } else {
//       alert("Incorrect Password!");
//     }
//   };

//   const handleUserContinue = () => {
//     login({ email: "user@example.com" }, "user"); // Set role as user
//     navigate("/user/dashboard", { replace: true });
//   };

//   return (
//     <div className="continue-container">
//       <h2>Continue As</h2>
//       <button onClick={handleAdminLogin}>Admin</button>
//       <button onClick={handleUserContinue}>User</button>
//     </div>
//   );
// };

// export default ContinueAs;
