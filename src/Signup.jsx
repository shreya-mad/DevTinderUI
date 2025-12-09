import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { addUser } from "./Redux/userSlice";
import { BASE_URL } from  "./api";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    profilePicture: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.profilePicture)
      newErrors.profilePicture = "Profile picture URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        // "/api/signup",
        `${BASE_URL}/signup`,
        formData,
        { withCredentials: true }
      );

      const currentUser = response.data?.data || response.data;

      // 🔥 Clear old user and save current user
      dispatch(addUser(null));
      dispatch(addUser(currentUser));

      toast.success("Signup Successful!", {
        duration: 3000,
        position: "top-center",
      });

      navigate("/about");
    } catch (err) {
      toast.error("Signup failed. Try again.", {
        duration: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-2xl w-[60%] max-w-3xl h-auto">
        {/* Left Image */}
        <figure className="lg:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
            alt="Signup"
            className="h-full w-full object-cover rounded-l-xl"
          />
        </figure>

        {/* Right Side Form */}
        <div className="card-body lg:w-1/2 w-full p-6">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-500">
            DevTinder Signup
          </h2>
          <form className="space-y-3" onSubmit={handleSignup}>
            {/* First Name */}
            <div className="form-control">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={`input input-bordered w-full h-10 text-sm ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="form-control">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={`input input-bordered w-full h-10 text-sm ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`input input-bordered w-full h-10 text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-control relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={`input input-bordered w-full h-10 text-sm ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
            </div>

            {/* Age */}
            <div className="form-control">
              <input
                type="number"
                name="age"
                placeholder="Age"
                className={`input input-bordered w-full h-10 text-sm ${
                  errors.age ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && (
                <p className="text-red-500 text-xs">{errors.age}</p>
              )}
            </div>

            {/* Gender */}
            <div className="form-control">
              <select
                name="gender"
                className={`select select-bordered w-full h-10 text-sm ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-xs">{errors.gender}</p>
              )}
            </div>

            {/* Profile Picture */}
            <div className="form-control">
              <input
                type="text"
                name="profilePicture"
                placeholder="Profile Picture URL"
                className={`input input-bordered w-full h-10 text-sm ${
                  errors.profilePicture ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.profilePicture}
                onChange={handleChange}
              />
              {errors.profilePicture && (
                <p className="text-red-500 text-xs">{errors.profilePicture}</p>
              )}
            </div>

            {/* Signup Button */}
            <button className="btn w-full bg-gray-500 text-white h-10 text-sm">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
