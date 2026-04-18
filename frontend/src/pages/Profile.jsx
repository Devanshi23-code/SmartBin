import { useEffect, useState } from "react";

export default function Profile() {
  const [workers, setWorkers] = useState([]);

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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Profile
      </h1>

      {/* 👤 User Info */}
      <div className="bg-white/10 p-6 rounded-2xl mb-6">
        <h2 className="text-xl font-semibold">
          Devanshi Agarwal
        </h2>
        <p className="text-gray-400">
          Admin - SmartBin System
        </p>
      </div>

      {/* 📊 Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white/10 p-4 rounded-xl">
          <p>Total Workers</p>
          <h2 className="text-2xl text-blue-400">
            {totalWorkers}
          </h2>
        </div>

        <div className="bg-white/10 p-4 rounded-xl">
          <p>Total Bins</p>
          <h2 className="text-2xl text-green-400">
            {totalBins}
          </h2>
        </div>

        <div className="bg-white/10 p-4 rounded-xl">
          <p>Alerts</p>
          <h2 className="text-2xl text-red-400">
            2
          </h2>
        </div>

      </div>

      {/* ⚙️ Extra */}
      <div className="mt-6 bg-white/10 p-4 rounded-xl">
        <p className="text-gray-400">Version: 1.0</p>
        <p className="text-gray-400">
          Built with React + Tailwind
        </p>
      </div>
<button
  onClick={() => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }}
  className="mt-6 bg-red-500 px-4 py-2 rounded"
>
  Logout
</button>
    </div>
  );
}