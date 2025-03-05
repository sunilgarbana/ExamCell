import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./components/Logings";
import FacultyDashboard from "./FacultyDashboard";
import StudentDashboard from "./StudentDashboard";
import RegisterPage from "./components/RegisterPage";

export default function App() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.json())
        .then(data => setUserType(data.userType))
        .catch(() => setUserType(null));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUserType={setUserType} />} />
        <Route path="/dashboard" element={userType ? (userType === "faculty" ? <FacultyDashboard /> : <StudentDashboard />) : <Navigate to="/" />} />
        import RegisterPage from "./RegisterPage";

  <Route path="/" element={<LoginPage setUserType={setUserType} />} />
  <Route path="/register" element={<RegisterPage/>} />
</Routes>

    </Router>
  );
}
