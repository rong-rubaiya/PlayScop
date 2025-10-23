

import React from 'react';
import { Link } from 'react-router';
import signIn from '../assets/user.png';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
   return (
    
     <div className='bg-gray-300 flex flex-col items-center w-full py-10 gap-4'>
     

      
      <div className='flex justify-center gap-5 items-center'>
        
      <div className='flex flex-col items-center justify-center'>
         <div className='flex gap-2 '>
        <img className='w-8 h-8 text-gray-600' src={signIn} alt="" />
        <h1 className='font-bold text-3xl text-[rgb(124,7,234)]'>Sign Up</h1>
      </div>

        <motion.form
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-4 px-7 py-10 rounded-3xl shadow-gray shadow-xl mb-3'
      >
        {/* name */}
        <input
          name='name'
          type='text'
          placeholder='User name'
          className='bg-white rounded-md p-3 focus:outline-none
          placeholder:italic text-sm placeholder:text-gray-400 w-[330px]'
        />

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
          value='Sign Up'
        />
      </motion.form>
      </div>

                  <motion.div 
             initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            className='flex flex-col gap-5'>
              <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-white text-black'><FcGoogle size={24}/> Sign Up With Google</button>
              <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300'><FaFacebook size={24}/> Sign Up With Facbook</button>
              <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-black'><FaGithub size={24}/> Sign Up With Github</button>
            </motion.div>
      </div>

      <p className='text-sm'> If you already have an account, please {' '}
         <Link to='/auth/login'>
         <span  className='text-[rgb(124,7,234)] italic font-semibold underline'>Sign in  {' '}
          </span> 
        </Link>
          an account to get started!
      </p>


      

    </div>

    
   
  );
};

export default Register;