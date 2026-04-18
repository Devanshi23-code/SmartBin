import BottomNav from "./BottomNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="pb-16"> {/* space for bottom nav */}

      {/* Page content */}
      <Outlet />

      {/* Bottom Navigation */}
      <BottomNav />

    </div>
  );
}