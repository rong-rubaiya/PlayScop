

import React, { use, useState} from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import signIn from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';




const Register = () => {

  const {createUser,setUser}=use(AuthContext)

  const [password, setPassword] = useState("");

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasLength = password.length >= 6;

  const handleSingUp=(e)=>{
    e.preventDefault();

     if (!hasUppercase || !hasLowercase || !hasLength) {
      alert("Please meet all password conditions before signing up!");
      return;
    }
    alert("Password is valid! You can proceed with signup.");
   
    const form =e.target;

    const name=form.name.value;
    const email=form.email.value;
    const passwordv=form.password.value;
    const photourl=form.photourl.value;
      console.log({name,photourl,passwordv,email});

      createUser(email,password)
      .then(result=>{
        const user=result.user;
        console.log(user);
        setUser(user)
      } )
      .catch(err=>{
        const errMessage=err.message;
        console.log(errMessage);
      })
  
  };



   return (
    
     <div className='bg-gray-300 flex flex-col items-center w-full py-10 gap-4'>
     

      
      <div className='flex flex-col sm:flex-row   justify-center gap-5 items-center'>
        
      <div className='flex flex-col items-center justify-center'>
         <div className='flex gap-2 '>
        <img className='w-8 h-8 text-gray-600' src={signIn} alt="" />
        <h1 className='font-bold text-3xl text-[rgb(124,7,234)]'>Sign Up</h1>
       
      </div>

       <p className='sm:hidden text-sm m-3 text-center text-gray-500 '> If you already have an account, please {' '}
         <Link to='/auth/login'>
         <span  className='text-[rgb(124,7,234)] italic font-semibold underline '>Sign in  {' '}
          </span> 
        </Link>
          an account to get started!
      </p>

        <motion.form onSubmit={handleSingUp} 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-4 px-7 py-10 rounded-3xl shadow-gray shadow-xl mb-3'
      >
        {/* name */}
        <input required
          name='name'
          type='text'
          placeholder='User name'
          className='bg-white rounded-md p-3 focus:outline-none
          placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]'
        />

        {/* photo url */}

        <input required
          name='photourl'
          type='url'
          placeholder='Photo URL'
          className='bg-white rounded-md p-3 focus:outline-none
          placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]'
        />

        {/* email */}
        <input required
          name='email'
          type='email'
          placeholder='Enter Your Email'
          className='bg-white rounded-md p-3 focus:outline-none
          placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]'
        />

        {/* password */}
        <input required
          name='password'
          type='password'  
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-white rounded-md p-3 focus:outline-none
          placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]'
        />
        {/* 🔐 Password Conditions */}
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

      <p className='text-sm hidden sm:block'> If you already have an account, please {' '}
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