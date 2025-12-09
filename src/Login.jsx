import React, { useState } from "react";
import axios from "axios";
import { addUser } from "./Redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BASE_URL } from  "./api";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  // 🔹 Simple Email Validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let newErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    try {
      const response = await axios.post(
        // "/api/login",
       `${BASE_URL}/login`,
        { email, password },
        { withCredentials: true }
      );

      dispatch(addUser(response.data));
      navigate("/about");
      toast.success("Login Successful!", {
        duration: 3000,
        position: "top-center",
        style: {
          zIndex: 4,
          height: "50px",
          marginTop: "50px",
        },
      });
    } catch (err) {
      toast.error("Invalid email or password", {
        duration: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      {/* Main Container */}
      <div className="card lg:card-side bg-base-100 shadow-2xl w-[70%] max-w-4xl">
        {/* Left Side Image */}
        <figure className="lg:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
            alt="DevTinder"
            className="h-full w-full object-cover"
          />
        </figure>

        {/* Right Side Form */}
        <div className="card-body lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-500">
            DevTinder
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`input input-bordered w-full ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`input input-bordered w-full ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-black-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            {/* Signup & Forgot Password Links */}
            <div className="flex justify-between text-sm text-gray-500">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="link link-primary"
              >
                don't have Account? Signup
              </button>
              <Link to='/forget-password-mail-send' className="link link-primary">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button className="btn w-full bg-gray-500 text-white">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
