import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`flex flex-col items-center text-sm ${
        pathname === path ? "text-green-400" : "text-gray-400"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/10 backdrop-blur-lg border-t border-gray-700 py-3 flex justify-around">
      {navItem("/", "Home")}
      {navItem("/alerts", "Alerts")}
      {navItem("/workers", "Workers")}
      {navItem("/profile", "Profile")}
    </div>
  );
}