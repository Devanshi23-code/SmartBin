import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple demo login
    if (email === "admin" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl w-80">

        <h2 className="text-xl font-bold text-center mb-4">
          SmartBin Login
        </h2>

        <input
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
        >
          Login
        </button>

      </div>
    </div>
  );
}