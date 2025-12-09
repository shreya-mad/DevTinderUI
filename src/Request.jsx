import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BASE_URL } from  "./api";

const Request = () => {
  const [requestRecieved, setRequestRecieved] = useState([]);

  const fetchRequest = async () => {
    try {
      const res = await axios.get(
        // "/api/user/requests/received",
        `${BASE_URL}/user/requests/received`,
        { withCredentials: true }
      );
      setRequestRecieved(res.data.data);
    } catch (err) {
      console.log("there is some error in getting request: " + err.message);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const handleAcceptReject = async (status, _id) => {
    try {
      const res = await axios.post(
        // `/api/request/review/${status}/${_id}`,
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );

      toast.success(res.data.message, {
        duration: 3000,
        position: "top-center",
        style: {
          zIndex: 4,
          height: "50px",
          marginTop: "50px",
        },
      });

      // Remove the user card immediately after success
      setRequestRecieved((prev) =>
        prev.filter((connection) => connection._id !== _id)
      );
    } catch (err) {
      console.log("there is some error: " + err.message);
    }
  };

  if (!requestRecieved) return null; // Wait until data is fetched

  if (requestRecieved.length === 0)
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Requests</h1>
        <p className="text-lg text-gray-600 text-center">
          There is no request
        </p>
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Requests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {requestRecieved.map((connection) => (
          <div
            key={connection._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="w-full h-40 object-cover"
              src={connection.fromUserID.profilePicture}
              alt={`${connection.fromUserID.firstName} ${connection.fromUserID.lastName}`}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {connection.fromUserID.firstName}{" "}
                {connection.fromUserID.lastName}
              </h2>
              <p className="text-gray-600">{connection.email}</p>
              <p className="text-gray-500 text-sm mt-2">
                Age: {connection.fromUserID.age}
              </p>
              <p className="text-gray-500 text-sm">
                Gender: {connection.fromUserID.gender}
              </p>
            </div>
            <div className="p-4 flex justify-around">
              <button
                className="btn bg-lime-500 text-white px-4 py-2 rounded"
                onClick={() => handleAcceptReject("accepted", connection._id)}
              >
                Accept
              </button>
              <button
                className="btn bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleAcceptReject("rejected", connection._id)}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Request;
