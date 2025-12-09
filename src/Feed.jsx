import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./Redux/FeedSlice";
import { toast } from "react-hot-toast";
import { BASE_URL } from  "./api";
const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed?.length) return; // Don't fetch again if feed already exists
    try {
      const res = await axios.get(
        // "/api/user/feed", 
        `${BASE_URL}/user/feed`,
        {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data)); // Store array in Redux
    } catch (err) {
      console.log("There is some error: " + err.message);
    }
  };

  const handleSendRequest = async (status, userID) => {
    try {
      const res = await axios.post(
        // `/api/Request/send/${status}/${userID}`,
        `${BASE_URL}/Request/send/${status}/${userID}`,
        {},
        { withCredentials: true }
      );

      toast.success(
        status === "ignored"
          ? "You have successfully ignored the profile"
          : "You have successfully sent a connection request",
        {
          duration: 3000,
          position: "top-center",
          style: {
            zIndex: 4,
            height: "50px",
            marginTop: "50px",
          },
        }
      );

      // 🔥 Remove the user from Redux feed array
      const updatedFeed = feed.filter((user) => user._id !== userID);
      dispatch(addFeed(updatedFeed));
    } catch (err) {
      console.log("There is some error: " + err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return null;
  if (feed.length === 0) return <>There is no feed for you</>;

  return (
    <div className="p-6">
      {/* 🔥 Centered Heading */}
      <h1 className="text-3xl font-bold text-center mb-8">It's Your Feed, just enjoy it</h1>

      <div className="flex flex-wrap justify-center gap-6">
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
              <h2 className="card-title flex items-center gap-2">
                {user.firstName} {user.lastName}
                <div
                  className={`badge ${
                    user.gender?.toLowerCase() === "female"
                      ? "bg-pink-400 text-white"
                      : "bg-blue-400 text-white"
                  }`}
                >
                  {user.gender}
                </div>
              </h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.age} Years</p>
              <div className="card-actions justify-end">
                <div
                  className="badge badge-outline bg-red-400 text-white cursor-pointer"
                  onClick={() => handleSendRequest("ignored", user._id)}
                >
                  Ignore
                </div>
                <div
                  className="badge badge-outline bg-lime-300 text-white cursor-pointer"
                  onClick={() => handleSendRequest("interested", user._id)}
                >
                  Send Request!!
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
