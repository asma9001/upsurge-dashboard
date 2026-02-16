import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@realestate.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Store session
    localStorage.setItem("auth", "true");

    navigate("/");
  };

return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-5 sm:p-6 border border-[#FBFBFB]">

       
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100">
            <img src="/logo.svg" className="w-7 h-7" alt="logo" />
          </div>
        </div>

       
        <h2 className="text-xl sm:text-2xl font-bold text-center text-[#111827]">
          Welcome Back
        </h2>
        <p className="text-sm text-[#4B5563] text-center mt-1">
          Sign in to your admin dashboard
        </p>

     
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-[#374151]">
              Email Address
            </label>
          <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#374151]">
              Enter Password
            </label>
             <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

         {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-md bg-indigo-600 text-white"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

     
        <div className="text-center text-xs sm:text-sm text-[#6B7280] mt-6">
          <p>Demo Credentials:</p>
          <p>Email: admin@realestate.com</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
