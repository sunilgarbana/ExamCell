import './App.css';
import { useState } from 'react';
import { BrowserRouter, Navigate,Route,HashRouter,Routes } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import Login from './components/Logings';

function App() {
   const [usertype,setUserType]=useState(null)
  return (
    <>
     <HashRouter>
      <Routes>
        <Route path="/" element={<Login setUserType={setUserType} />} />
        <Route path="/dashboard"
        element={
          usertype === "faculty" ?<FacultyDashboard/>:
          usertype === "student" ?<StudentDashboard/>:
          <Navigate to='/'/>
        }
        ></Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
