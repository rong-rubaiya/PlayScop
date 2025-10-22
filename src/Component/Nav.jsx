import React, { useState } from 'react';
import { motion } from 'framer-motion';
import imgLogo from "../assets/logo.png";
import { NavLink } from 'react-router';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = <>
    <NavLink to={'/'} className="font-semibold hover:text-[#d3e8ec]  hover:scale-110 transition ease-in-out duration-300">Home</NavLink>
    <NavLink to={'/all-games'} className="font-semibold hover:text-[#d3e8ec]  hover:scale-110 transition ease-in-out duration-300">All Games</NavLink>
    <NavLink className="font-semibold hover:text-[#d3e8ec]  hover:scale-110 transition ease-in-out duration-300">About</NavLink>
    <NavLink className="font-semibold hover:text-[#d3e8ec]  hover:scale-110 transition ease-in-out duration-300">Register</NavLink>
  </>;

  return (
    <motion.div
      className="nav py-4 bg-gradient-to-r from-[#020024] to-[#090979] shadow-lg sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={imgLogo}
            alt="logo"
            className="w-14 h-14 rounded-full border-2 border-white p-1"
          />
          <h2 className="text-white font-bold text-xl">Play-Scop</h2>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white">
          {links}
        </div>

        {/* menu button */}

        <div className="md:hidden">
  <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
    {isOpen ? <HiX /> : <HiMenu />}
  </button>
</div>
      </div>

      

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 mt-4 text-white bg-[#020024] p-4 rounded-lg shadow-lg"
        >
          {links}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Nav;
