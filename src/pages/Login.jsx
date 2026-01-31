import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
  e.preventDefault();


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
              className="mt-1 w-full px-4 py-2 rounded-md 
                         bg-[#F2F2F2] 
                         border border-transparent 
                         placeholder:text-[#ABABAB] 
                         placeholder:text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#5856D6]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#374151]">
              Enter Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 rounded-md 
                         bg-[#F2F2F2] 
                         border border-transparent 
                         placeholder:text-[#ABABAB] 
                         placeholder:text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#5856D6]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-md bg-[#5856D6] text-white font-medium hover:opacity-90 transition"
          >
            Sign In
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
