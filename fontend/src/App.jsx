import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useNavigate } from "react-router-dom"; // เพิ่ม import useNavigate จาก react-router-dom

import User from "./Components/User";
import Student from "./Components/Student";
import Subject from "./Components/Subject";
import Teacher from "./Components/Teacher";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // ใช้ useNavigate เพื่อรับค่า function ที่ใช้ในการนำทาง

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsLoggedIn(true);
    }
  }, []); // ให้ useEffect ทำงานเฉพาะครั้งแรกเมื่อโหลดหน้า

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear(); // เคลียร์ข้อมูลใน localStorage
    navigate("/login"); // นำทางไปยังหน้า Login
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/User" element={isLoggedIn ? <User /> : null} />
        <Route path="/Student" element={isLoggedIn ? <Student /> : null} />
        <Route path="/Subject" element={isLoggedIn ? <Subject /> : null} />
        <Route path="/Teacher" element={isLoggedIn ? <Teacher /> : null} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
