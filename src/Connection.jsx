import axios from "axios";
import React, { useEffect, useState } from "react";

const Connection = () => {
  const [data, setData] = useState([]);

  const fetchConnection = async () => {
    try {
      const res = await axios.get("/api/user/connections", {
        withCredentials: true,
      });
      setData(res.data.data || []);
    } catch (err) {
      console.log("There is some error in fetching connection:", err.message);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!data) return null; // Wait until data is fetched

  if (data.length === 0)
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          My Connections
        </h1>
        <p className="text-lg text-gray-600 text-center">
          There is no connection!!!!
        </p>
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Connections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((connection) => (
          <div
            key={connection._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="w-full h-40 object-cover"
              src={connection.profilePicture}
              alt={`${connection.firstName} ${connection.lastName}`}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {connection.firstName} {connection.lastName}
              </h2>
              <p className="text-gray-600">{connection.email}</p>
              <p className="text-gray-500 text-sm mt-2">Age: 25</p>
              <p className="text-gray-500 text-sm">Gender: Female</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connection;
