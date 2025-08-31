import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeUser } from "./Redux/userSlice";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/logout",{}, {
        withCredentials: true,
      });
      dispatch(removeUser());
      toast.success("Logout Successfull!!!", {
        duration: 3000,
        position: "top-right",
        style: {
          zIndex: 4,
          height: "50px",
          marginTop: "50px",
        },
      });
      navigate("/login");
    } catch (err) {
      alert("There is some error in logout: " + err);
    }
  };
  const user = useSelector((store) => store.user);
  return (
    <div className="navbar bg-gray-500 shadow-sm ">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl text-white">
          Dev Tinder
        </Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        {user && (
          <h5 className="btn btn-ghost text-xl text-white">
            Welcome, {user.firstName}
          </h5>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user && (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.profilePicture}
                />
              </div>
            )}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
