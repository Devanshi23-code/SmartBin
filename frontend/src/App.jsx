import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Workers from "./pages/Workers";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Layout from "./components/Layout";

// 🔐 Check login
const isLoggedIn = () => {
  return localStorage.getItem("user") !== null;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 ALWAYS START WITH LOGIN */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 🔓 Login */}
        <Route path="/login" element={<Login />} />

        {/* 🔐 Protected (after login) */}
        <Route element={<Layout />}>

          <Route
            path="/dashboard"
            element={
              isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/alerts"
            element={
              isLoggedIn() ? <Alerts /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/workers"
            element={
              isLoggedIn() ? <Workers /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/profile"
            element={
              isLoggedIn() ? <Profile /> : <Navigate to="/login" />
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}