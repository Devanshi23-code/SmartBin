export default function Alerts() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Alerts
      </h1>

      <div className="space-y-4">

        <div className="bg-red-100 border border-red-400 p-4 rounded-xl">
          ⚠️ Bin 042 Overflow
        </div>

        <div className="bg-yellow-100 border border-yellow-400 p-4 rounded-xl">
          ⚠️ Connection Lost
        </div>

      </div>

    </div>
  );
}