import React, { use, useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserEdit } from 'react-icons/fa';

const UpdateInfo = () => {
  const { user, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, { displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL });
      toast.success("✅ Profile updated successfully!");

      // Navigate after a short delay so user can see the toast
      setTimeout(() => {
        navigate("/user-profile");
      }, 1000);
    } catch (err) {
      console.error("Update error:", err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020024] to-[#090979] flex flex-col items-center justify-center p-6">
      <title>play-scope-update-profile</title>
      <div className="bg-[#0d0d3a] rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col gap-6 text-white border-2 border-purple-600">
        
        <div className="flex items-center gap-3">
          <FaUserEdit className="text-purple-500 text-2xl" />
          <h2 className="text-2xl font-bold">Update Profile Information</h2>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Display Name"
            className="bg-[#1a1a55] rounded-lg p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Photo URL"
            className="bg-[#1a1a55] rounded-lg p-3 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-4 py-2 rounded-lg font-semibold text-white shadow-md hover:scale-105"
          >
            Update Information
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default UpdateInfo;
