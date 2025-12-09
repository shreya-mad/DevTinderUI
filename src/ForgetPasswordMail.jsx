import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BASE_URL } from  "./api";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");

      // Example API call
      const response = await axios.post(
        // "/api/forgot-password",
        `${BASE_URL}/forgot-password`,
        { email },
        { withCredentials: true }
      );
      console.log(response.data);

      setStatus("success");
     toast.success("Please check your email address, we have sent Reset link!!!", {
             duration: 3000,
             position: "top-center",
             style: {
               zIndex: 4,
               height: "50px",
               marginTop: "50px",
             },
           });
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
              Forgot password?
            </h1>
            <p className="text-slate-600 mt-1">
              Don't worry, we'll send a reset mail to you.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="form-status"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
              <p className="mt-1 text-xs text-slate-500">
                We'll send a password reset link to this email.
              </p>
            </div>

            {status === "error" && message && (
              <div
                id="form-status"
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-rose-700 text-sm"
              >
                {message}
              </div>
            )}

            {status === "success" && message && (
              <div
                id="form-status"
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 text-sm"
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-2xl bg-slate-500 px-4 py-2.5 font-medium text-white shadow-md transition-transform duration-150 hover:scale-[1.01] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Reset password"}
            </button>

            <div className="text-center text-xs text-slate-500">
              <span>Remembered your password?</span>{" "}
              <Link
                to='/login'
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Back to sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
