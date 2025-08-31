import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./Redux/FeedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed?.length) return; // Don't fetch again if feed already exists
    try {
      const res = await axios.get("http://localhost:4000/user/feed", {
        withCredentials: true,
      });

      // Store only the array in Redux
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.log("There is some error: " + err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {feed?.map((user) => (
        <div
          key={user._id}
          className="card bg-base-100 bg-slate-50 w-80 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
        >
          <figure>
            <img
              src={user.profilePicture}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-full h-48 object-cover rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {user.firstName} {user.lastName}
              <div className="badge badge-secondary">{user.gender}</div>
            </h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600 bg-slate-50">{user.age} Years</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline bg-red-400 text-white cursor-pointer">Ignore</div>
              <div className="badge badge-outline bg-lime-300 text-white cursor-pointer">Send Request!!</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
