import { useEffect, useState } from "react";
import BinCard from "../components/BinCard";

export default function Dashboard() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("workers");
    if (saved) {
      setWorkers(JSON.parse(saved));
    }
  }, []);

  // 📊 Stats
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

  // 📦 Sample bin data (you can later connect real data)
  const bins = [
    { id: "101", location: "Sector A", fill: 95 },
    { id: "102", location: "Market Area", fill: 75 },
    { id: "103", location: "Bus Stand", fill: 40 },
  ];

  return (
    <div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Dashboard
      </h1>

      {/* 📊 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white shadow-md p-4 rounded-xl">
          <p className="text-gray-500">Total Workers</p>
          <h2 className="text-2xl text-green-600">
            {totalWorkers}
          </h2>
        </div>

        <div className="bg-white shadow-md p-4 rounded-xl">
          <p className="text-gray-500">Total Bins</p>
          <h2 className="text-2xl text-green-600">
            {totalBins}
          </h2>
        </div>

        <div className="bg-white shadow-md p-4 rounded-xl">
          <p className="text-gray-500">Alerts</p>
          <h2 className="text-2xl text-red-500">
            2
          </h2>
        </div>

      </div>

      {/* 📦 Bin Cards */}
      <h2 className="text-lg font-semibold mb-3 text-gray-700">
        Bin Status
      </h2>

      <div className="grid gap-4">
        {bins.map((bin) => (
          <BinCard key={bin.id} {...bin} />
        ))}
      </div>

    </div>
  );
}