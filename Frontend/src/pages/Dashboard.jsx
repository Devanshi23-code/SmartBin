import { useEffect, useState } from "react";

export default function Dashboard() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("workers");
    if (saved) {
      setWorkers(JSON.parse(saved));
    }
  }, []);

  // 🔹 Calculations
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">

      <h1 className="text-4xl font-bold mb-6">
        SmartBin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Workers */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <p>Total Workers</p>
          <h2 className="text-3xl text-blue-400 mt-2">
            {totalWorkers}
          </h2>
        </div>

        {/* Bins */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <p>Total Bins</p>
          <h2 className="text-3xl text-green-400 mt-2">
            {totalBins}
          </h2>
        </div>

        {/* Alerts */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <p>Alerts</p>
          <h2 className="text-3xl text-red-400 mt-2">
            2
          </h2>
        </div>

      </div>
    </div>
  );
}