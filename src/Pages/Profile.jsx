import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import { FaSignOutAlt, FaEdit } from "react-icons/fa";

const Profile = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/auth/login");
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700">
        <p>
          You are not signed in. Please{" "}
          <span
            className="text-purple-700 underline cursor-pointer"
            onClick={() => navigate("/auth/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6 bg-gradient-to-b from-[#020024] to-[#090979]">
      <title>play-scope-profile</title>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center gap-4">
        <img
          src={user.photoURL || "/default-avatar.png"}
          alt={user.displayName || "User"}
          className="h-24 w-24 rounded-full border-4 border-purple-700 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-800">
          {user.displayName || "Anonymous User"}
        </h2>
        <p className="text-gray-600">{user.email}</p>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
          >
            <FaSignOutAlt /> Sign Out
          </button>

          <button
            onClick={() => navigate("/update-profile")}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaEdit /> Update Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
