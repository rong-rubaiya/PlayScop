import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';



const Error = () => {
  return (
    <>
    <Nav/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 text-gray-800 overflow-hidden">
      {/* Floating animated circles */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center p-8"
      >
        <motion.h1
          className="text-[8rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl sm:text-3xl font-bold mt-2"
        >
          Oops! Page not found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-gray-500 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/"
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-5 h-5" />
            Go Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating symbols */}
      <motion.div
        className="absolute bottom-10 right-10 text-indigo-400 text-6xl font-extrabold opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        ?
      </motion.div>
      <motion.div
        className="absolute top-12 left-12 text-pink-400 text-5xl font-extrabold opacity-20"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        !
      </motion.div>
    </div>
    <Footer/>
    </>
  );
};

export default Error;