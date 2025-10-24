import React, { use, useState } from 'react';
import { Link } from 'react-router'; 
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from 'firebase/auth';

import signIn from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser } = use(AuthContext); 
  const [localUser, setLocalUser] = useState(null); 
  const [password, setPassword] = useState('');

  // Password validation
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasLength = password.length >= 6;

  // Handle signup
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!hasUppercase || !hasLowercase || !hasLength) {
      alert("⚠ Please meet all password conditions before signing up!");
      return;
    }

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photourl = form.photourl.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateProfile(createdUser, {
          displayName: name,
          photoURL: photourl,
        })
          .then(() => {
            const updatedUser = {
              ...createdUser,
              displayName: name,
              photoURL: photourl,
            };
            setLocalUser(updatedUser);
            setUser(updatedUser);
            alert("✅ Registration successful!");
          })
          .catch((err) => 
            console.error('Profile update error:', err.message)
        );
      })
      .catch((err) => alert('User creation error:', err.message));
  };

  return (
    <div className="bg-gray-300 flex flex-col items-center w-full py-10 gap-4">
      <div className="flex flex-col sm:flex-row justify-center gap-5 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <img className="w-8 h-8 text-gray-600" src={signIn} alt="" />
            <h1 className="font-bold text-3xl text-[rgb(124,7,234)]">
              {localUser ? "Sign in Successfully" : "Sign up"}
            </h1>
          </div>

          {/* Mobile sign-in prompt */}
          <p className="sm:hidden text-sm m-3 text-center text-gray-500">
            If you already have an account, please{' '}
            <Link to="/auth/login">
              <span className="text-[rgb(124,7,234)] italic font-semibold underline">
                Sign in
              </span>
            </Link>{' '}
            to get started!
          </p>

          {/* ✅ Show user photo after signup */}
          {localUser ? (
            <div className="text-center space-y-3">
              <img
                className="h-16 w-16 rounded-full border-2 border-[rgb(124,7,234)]"
                src={localUser?.photoURL || signIn}
                alt="User"
              />
              <h3 className="font-semibold text-lg text-center mr-16 text-gray-700">{localUser?.displayName}</h3>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSignUp}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4 px-7 py-10 rounded-3xl shadow-gray shadow-xl mb-3 bg-white"
            >
              {/* Name */}
              <input
                required
                name="name"
                type="text"
                placeholder="User name"
                className="bg-gray-100 rounded-md p-3 focus:outline-none placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]"
              />

              {/* Photo URL */}
              <input
                required
                name="photourl"
                type="url"
                placeholder="Photo URL"
                className="bg-gray-100 rounded-md p-3 focus:outline-none placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]"
              />

              {/* Email */}
              <input
                required
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className="bg-gray-100 rounded-md p-3 focus:outline-none placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]"
              />

              {/* Password */}
              <input
                required
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 rounded-md p-3 focus:outline-none placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]"
              />

              {/* Password Conditions */}
              {password && (
                <div className="text-sm mt-1 space-y-1 text-gray-700">
                  <p>Password characters: <strong>{password.length}</strong></p>
                  <p className={`${hasUppercase ? "text-green-600" : "text-red-500"}`}>
                    {hasUppercase ? "✔" : "✖"} Must contain an Uppercase letter
                  </p>
                  <p className={`${hasLowercase ? "text-green-600" : "text-red-500"}`}>
                    {hasLowercase ? "✔" : "✖"} Must contain a Lowercase letter
                  </p>
                  <p className={`${hasLength ? "text-green-600" : "text-red-500"}`}>
                    {hasLength ? "✔" : "✖"} Must be at least 6 characters long
                  </p>
                </div>
              )}

              {/* Terms & Conditions */}
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="w-4 h-4 accent-[rgb(124,7,234)] cursor-pointer"
                />
                <label htmlFor="terms" className="cursor-pointer select-none">
                  I accept the <strong className="text-[rgb(124,7,234)]">Terms & Conditions</strong>
                </label>
              </div>

              {/* Submit Button */}
              <input
                className="btn btn-primary bg-[rgb(124,7,234)] text-white hover:scale-105 transition-all duration-300"
                type="submit"
                value="Sign Up"
              />
            </motion.form>
          )}
        </div>

        {/* Social signup buttons */}
        {!localUser && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <button className="btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-white text-black">
              <FcGoogle size={24} /> Sign Up With Google
            </button>
            <button className="btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-[#1877f2] text-white">
              <FaFacebook size={24} /> Sign Up With Facebook
            </button>
            <button className="btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-black text-white">
              <FaGithub size={24} /> Sign Up With Github
            </button>
          </motion.div>
        )}
      </div>

      {/* Desktop sign-in prompt */}
      {!localUser && (
        <p className="text-sm hidden sm:block">
          If you already have an account, please{' '}
          <Link to="/auth/login">
            <span className="text-[rgb(124,7,234)] italic font-semibold underline">Sign in</span>
          </Link>{' '}
          to get started!
        </p>
      )}
    </div>
  );
};

export default Register;
