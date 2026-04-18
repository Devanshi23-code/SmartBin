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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">Workers</h1>

      {/* 🔹 Add Worker */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl mb-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Worker Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800"
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={form.area}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800"
        />

        <button
          onClick={addWorker}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Add Worker
        </button>
      </div>

      {/* 🔹 Workers List */}
      <div className="space-y-6">
        {workers.length === 0 ? (
          <p className="text-gray-400">No workers yet</p>
        ) : (
          workers.map((worker) => (
            <div
              key={worker.id}
              className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {worker.name}
                  </h2>
                  <p className="text-gray-400">
                    Area: {worker.area}
                  </p>
                </div>

                <button
                  onClick={() => deleteWorker(worker.id)}
                  className="text-red-400 hover:text-red-600"
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
                  className="p-2 rounded bg-gray-800 w-full"
                />

                <button
                  onClick={() => assignBin(worker.id)}
                  className="bg-blue-500 px-3 rounded hover:bg-blue-600"
                >
                  Assign
                </button>
              </div>

              {/* 🔸 Assigned Bins */}
              <div className="mt-3">
                <p className="text-sm text-gray-400">
                  Assigned Bins:
                </p>

                {worker.bins.length === 0 ? (
                  <p className="text-xs text-gray-500 mt-2">
                    No bins yet
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {worker.bins.map((bin, i) => (
                      <span
                        key={i}
                        className="bg-green-500/20 px-2 py-1 rounded flex items-center gap-2"
                      >
                        {bin}
                        <button
                          onClick={() =>
                            removeBin(worker.id, i)
                          }
                          className="text-red-400 text-xs"
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