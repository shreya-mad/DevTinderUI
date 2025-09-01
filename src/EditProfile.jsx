import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "./Redux/userSlice";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "");
 const dispatch = useDispatch();
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        "http://localhost:4000/profile/edit",
        { firstName, lastName, age, gender, profilePicture },
        { withCredentials: true }
      );
      console.log(res.data.data);
      dispatch(addUser(res.data.data));
      toast.success("Profile Updated Successful!", {
        duration: 3000,
        position: "top-center",
        style: {
          zIndex: 4,
          height: "50px",
          marginTop: "50px",
        },
      });
    } catch (err) {
      console.error("Error updating profile: ", err.message);
    }
  };

  return (
    <div className="bg-base-100 min-h-screen flex justify-center">
      <div className="card bg-base-100 mt-6 shadow-2xl w-full max-w-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-600">
            Edit Profile
          </h2>

          <form className="space-y-4" onSubmit={handleSave}>
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="input input-bordered w-full border-gray-300"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="input input-bordered w-full border-gray-300"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Age & Gender */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Age</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="input input-bordered w-full border-gray-300"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Gender</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your gender"
                  className="input input-bordered w-full border-gray-300"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            {/* Profile Picture URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your profile picture URL"
                className="input input-bordered w-full border-gray-300"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-gray-500 hover:bg-gray-600 text-white mt-4"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
