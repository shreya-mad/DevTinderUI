import React, { useState } from "react";
import axios from "axios";
import {addUser} from "./Redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      dispatch(addUser(response.data));
navigate('/about');

    } catch (err) {
      alert("there is some error in login: " + err);
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
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
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
                className="input input-bordered w-full"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="link link-primary text-sm">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
