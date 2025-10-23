import React from 'react';
import { Link } from 'react-router';
import signIn from '../assets/user.png';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className='flex  items-center justify-center gap-8 py-10'>
    <div className='bg-gray-300 flex flex-col   gap-4'>
    
      <div className='flex gap-2 justify-center'>
        <img className='w-8 h-8 text-gray-600' src={signIn} alt="" />
        <h1 className='text-center font-bold text-3xl text-[rgb(124,7,234)]'>Sign In</h1>
      </div>

      
      <motion.form
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-4 px-7 py-10 rounded-3xl shadow-gray shadow-xl mb-3'
      >
        

        {/* email */}
        <input
          name='email'
          type='email'
          placeholder='Enter Your Email'
          className='bg-white rounded-md p-3 focus:outline-none
          placeholder:italic text-sm placeholder:text-gray-400 w-[330px]'
        />

        {/* password */}
        <input
          name='password'
          type='password'  
          placeholder='Password'
          className='bg-white rounded-md p-3 focus:outline-none
          placeholder:italic text-sm placeholder:text-gray-400 w-[330px]'
        />

        {/* sign in button */}
        <input
          className='btn btn-primary bg-[rgb(124,7,234)] text-white'
          type='submit'
          value='Sign In'
        />
      </motion.form>

      <p className='text-sm'> New here? {' '}
         <Link to='/auth/register'>
         <span  className='text-[rgb(124,7,234)] italic font-semibold underline'> Create {' '}
          </span> 
        </Link>
          an account to get started!
      </p>
    
    </div>

      <motion.div 
       initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      className='flex flex-col gap-5'>
        <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-white text-black'><FcGoogle size={24}/> Sign in with Google</button>
        <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300'><FaFacebook size={24}/> Sign in with Facbook</button>
        <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-black'><FaGithub size={24}/> Sign in with Github</button>
      </motion.div>
    </div>
  );
};

export default Login;
