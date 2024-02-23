import React from "react";
import logo from "../images/graduated.png";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
  // ดึงอีเมลจาก local storage
  const userEmail = localStorage.getItem("email");

  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-green-500 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-20" alt="My logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white glow-dark">
              School
            </span>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isLoggedIn ? (
              <>
                <Link
                  to="/User"
                  className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                >
                  User
                </Link>
                <Link
                  to="/Student"
                  className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                >
                  Student
                </Link>
                <Link
                  to="/Subject"
                  className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                >
                  Subject
                </Link>
                <Link
                  to="/Teacher"
                  className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                >
                  Teacher
                </Link>
                {/* แสดงอีเมลเมื่อผู้ใช้เข้าสู่ระบบ */}
                <span className="text-sm text-white dark:text-gray-200">
                  {userEmail}
                </span>
                <button
                  className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
