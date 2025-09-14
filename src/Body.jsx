import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { addUser } from "./Redux/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const fetchUser = async () => {
    if (user) return;
    try {
      const res = await axios.get("/api/profile/view", {
        withCredentials: true,
      });
      if (!res) navigate("/login");
      dispatch(addUser(res.data));
    } catch (err) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (!user) fetchUser();
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
