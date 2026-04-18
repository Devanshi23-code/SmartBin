import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Profile from "./pages/Profile";
import Workers from "./pages/Workers";
import Login from "./pages/Login";
import Layout from "./components/Layout";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected layout */}
        <Route element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }>

          <Route path="/" element={<Dashboard />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/profile" element={<Profile />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}