import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, userType }),
    });

    if (response.ok) {
      alert("Registration successful! Please login.");
      navigate("/");
    } else {
      alert("Error registering user");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-2 p-2 border"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mb-2 p-2 border"/>
      <select value={userType} onChange={(e) => setUserType(e.target.value)} className="mb-2 p-2 border">
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <button onClick={handleRegister} className="p-2 bg-green-500 text-white">Register</button>
    </div>
  );
}
