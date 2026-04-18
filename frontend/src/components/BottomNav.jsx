import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    pathname === path
      ? "text-green-600 font-semibold"
      : "text-gray-500";

  return (
    <div className="fixed bottom-0 w-full bg-white border-t shadow-md flex justify-around p-3">

      <Link to="/" className={linkClass("/")}>
        Home
      </Link>

      <Link to="/alerts" className={linkClass("/alerts")}>
        Alerts
      </Link>

      <Link to="/workers" className={linkClass("/workers")}>
        Workers
      </Link>

      <Link to="/profile" className={linkClass("/profile")}>
        Profile
      </Link>

    </div>
  );
}