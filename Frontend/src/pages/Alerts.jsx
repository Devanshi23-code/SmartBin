export default function Alerts() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Alerts
      </h1>

      <div className="space-y-4">

        {/* 🔴 Critical Alert */}
        <div className="bg-red-500/20 border border-red-500 p-4 rounded-xl">
          ⚠️ Bin 042 Overflow
        </div>

        {/* 🟡 Warning */}
        <div className="bg-yellow-400/20 border border-yellow-400 p-4 rounded-xl text-yellow-200">
          ⚠️ Connection Lost
        </div>

      </div>

    </div>
  );
}