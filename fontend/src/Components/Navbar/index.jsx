import React from "react";
import logo from "../images/graduated.png";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-green-500 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="My logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white glow-dark">
              School
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {!isLoggedIn ? (
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
            ) : (
              <button
                className="text-sm text-white dark:text-gray-200 hover:text-black hover:underline transition duration-300 ease-in-out"
                onClick={onLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-opacity-50 bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/User"
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  User
                </Link>
              </li>
              <li>
                <Link
                  to="/Student"
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  Student
                </Link>
              </li>
              <li>
                <Link
                  to="/Subject"
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  Subject
                </Link>
              </li>
              <li>
                <Link
                  to="/Teacher"
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-300"
                >
                  Teacher
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
