import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [workers, setWorkers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("workers");
    if (saved) {
      setWorkers(JSON.parse(saved));
    }
  }, []);

  const totalWorkers = workers.length;

  const totalBins = workers.reduce(
    (sum, w) => sum + w.bins.length,
    0
  );

  const totalAlerts = workers.reduce(
    (sum, w) =>
      sum + w.bins.filter((b) => b.includes("!")).length,
    0
  );

  // 🔴 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Profile
      </h1>

      {/* User Info */}
      <div className="bg-white shadow p-6 rounded-xl mb-6">
        <h2 className="text-xl font-semibold">
          Devanshi Agarwal
        </h2>
        <p className="text-gray-500">
          Admin - SmartBin System
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white shadow p-4 rounded-xl">
          <p>Total Workers</p>
          <h2 className="text-2xl text-blue-500">
            {totalWorkers}
          </h2>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <p>Total Bins</p>
          <h2 className="text-2xl text-green-500">
            {totalBins}
          </h2>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <p>Alerts</p>
          <h2 className="text-2xl text-red-500">
            {totalAlerts}
          </h2>
        </div>

      </div>

      {/* 🔴 LOGOUT BUTTON */}
      <div className="mt-8">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

    </div>
  );
}