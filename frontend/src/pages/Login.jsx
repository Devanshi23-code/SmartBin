import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      // Send credentials to your FastAPI backend
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password
      });

      // If backend returns success, store the user and redirect
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");

    } catch (err) {
      // If the backend returns a 401 error, show this message
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <div className="bg-white shadow-lg p-8 rounded-xl w-80">

        {/* Title */}
        <h1 className="text-3xl font-bold text-green-600 text-center mb-2">
          SmartBin
        </h1>

        <h2 className="text-lg text-gray-700 text-center mb-6">
          Login to your account
        </h2>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Login
        </button>

        {/* Hint (for demo) */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Demo: admin / 1234
        </p>

      </div>

    </div>
  );
}