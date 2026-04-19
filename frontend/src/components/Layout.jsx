import BottomNav from "./BottomNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <h1 className="text-lg font-semibold">SmartBin</h1>
      </div>

      {/* 🔥 THIS IS REQUIRED */}
      <div className="p-4 pb-20">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <BottomNav />

    </div>
  );
}