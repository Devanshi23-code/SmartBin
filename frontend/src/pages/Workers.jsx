import { useState, useEffect } from "react";

export default function Workers() {
  const [workers, setWorkers] = useState(() => {
    const saved = localStorage.getItem("workers");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    name: "",
    area: "",
  });

  const [binInputs, setBinInputs] = useState({});

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));
  }, [workers]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addWorker = () => {
    if (!form.name || !form.area) return;

    const newWorker = {
      id: Date.now(),
      ...form,
      bins: [],
    };

    setWorkers([...workers, newWorker]);
    setForm({ name: "", area: "" });
  };

  const deleteWorker = (id) => {
    setWorkers(workers.filter((w) => w.id !== id));
  };

  const assignBin = (workerId) => {
    const value = binInputs[workerId];
    if (!value) return;

    setWorkers(
      workers.map((w) =>
        w.id === workerId
          ? { ...w, bins: [...w.bins, value] }
          : w
      )
    );

    setBinInputs({ ...binInputs, [workerId]: "" });
  };

  const removeBin = (workerId, index) => {
    setWorkers(
      workers.map((w) =>
        w.id === workerId
          ? {
              ...w,
              bins: w.bins.filter((_, i) => i !== index),
            }
          : w
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Workers
      </h1>

      {/* 🔹 Add Worker */}
      <div className="bg-white shadow-md p-6 rounded-xl mb-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Worker Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={form.area}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={addWorker}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add Worker
        </button>
      </div>

      {/* 🔹 Workers List */}
      <div className="space-y-6">
        {workers.length === 0 ? (
          <p className="text-gray-500">No workers yet</p>
        ) : (
          workers.map((worker) => (
            <div
              key={worker.id}
              className="bg-white shadow-md p-5 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {worker.name}
                  </h2>
                  <p className="text-gray-500">
                    Area: {worker.area}
                  </p>
                </div>

                <button
                  onClick={() => deleteWorker(worker.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>

              {/* 🔸 Assign Bin */}
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Bin ID"
                  value={binInputs[worker.id] || ""}
                  onChange={(e) =>
                    setBinInputs({
                      ...binInputs,
                      [worker.id]: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  onClick={() => assignBin(worker.id)}
                  className="bg-green-500 text-white px-3 rounded hover:bg-green-600"
                >
                  Assign
                </button>
              </div>

              {/* 🔸 Assigned Bins */}
              <div className="mt-3">
                <p className="text-sm text-gray-500">
                  Assigned Bins:
                </p>

                {worker.bins.length === 0 ? (
                  <p className="text-xs text-gray-400 mt-2">
                    No bins yet
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {worker.bins.map((bin, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-2"
                      >
                        {bin}
                        <button
                          onClick={() =>
                            removeBin(worker.id, i)
                          }
                          className="text-red-500 text-xs"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}