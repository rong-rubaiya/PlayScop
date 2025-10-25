import React, { use, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import signInLogo from '../assets/user.png';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import openeye from '../assets/blackOpen.png'
import hideneye from '../assets/blackHide.png'
import { toast, ToastContainer } from 'react-toastify';



const Login = () => {

  const emailref=useRef()

 const [isOpen,setOpen]=useState(false)
  

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const[user,SetUser]=useState(null)

    
  const {signIn,googlesignIn,resetPassword}=use(AuthContext)

  // reset pass

  const forgetPasshandle=()=>{
    const email=emailref.current.value
    resetPassword(email)
    .then(()=>{
      toast("password reset")
    })
    .catch(err=>{
      toast(err.message)
    })
  }


  

  const handleGoogleLogin = () => {
  googlesignIn()
    .then((result) => {
      const user = result.user;
      SetUser(user); // local state
      toast.success("🎉 Logged in successfully!");
    })
    .catch((err) => {
      console.error(err.message);
      toast.error(err.message);
    });
};
  const handleSignIn=(e)=>{
    e.preventDefault();
    const form =e.target;
    const email=form.email.value;
    const password=form.password.value;
    // console.log(email,password);

    signIn(email,password)
    .then(result=>{
      const user=result.user;
      SetUser(user)
      // console.log(user);
      toast('Yahoo!Login successfully')
     
    })
    .catch(err=>{
      const errMessage=err.message;
      console.log(errMessage);
    toast(errMessage)
    })
  }

  // console.log(user);
  return (
    <div className='flex flex-col sm:flex-row   items-center justify-center gap-8 py-10'>
      <title>play-scope-login</title>
    <div className='bg-blue-100 flex flex-col    gap-4'>
    
      <div className='flex gap-2 justify-center '>
        <img className='w-8 h-8 text-gray-600' src={signInLogo} alt="" />
        <h1 className='text-center font-bold text-3xl text-[rgb(124,7,234)]'>{user?'You are signed in':"Sign in"}</h1>
      </div>
      {/* for sm device */}
       <p className='text-sm text-center block sm:hidden'> New here? {' '}
         <Link to='/auth/register'>
         <span  className='text-[rgb(124,7,234)] italic font-semibold underline'> Create {' '}
          </span> 
        </Link>
          an account to get started!
      </p>

{
  user?(
    <div className="text-center flex flex-col justify-center items-center  space-y-3">
                  <Link to={'/user-profile'}>
                  <img
                    className="h-16 w-16 rounded-full border-2 border-[rgb(124,7,234)] "
                    src={user?.photoURL || signIn}
                    alt="User"
                  />
                  </Link>
                  <h3 className="font-semibold text-lg text-center  text-gray-700">{user?.email}</h3>
                  <p className='text-sm text-gray-600'>Click Profile photo to see your profile</p>
                  <Link to={'/'}><button className='btn btn-primary'>Go Home</button></Link>
                </div>
  ):
<motion.form onSubmit={handleSignIn}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-4 px-7 py-10 rounded-3xl shadow-gray shadow-xl mb-3'
      >
        

        {/* email */}
        <input
          name='email'
          type='email'
          ref={emailref}
          placeholder='Enter Your Email'
          className='bg-white rounded-md p-3 focus:outline-none text-black
          placeholder:italic text-sm placeholder:text-gray-400 w-auto sm:w-[330px]'
        />

        {/* password */}
       <div className='flex relative'>
                      <input
                       required
                       name="password"
                       type={isOpen?'text':'password'}
                       placeholder="Password"
                       
                       className="bg-gray-100 rounded-md p-3 focus:outline-none placeholder:italic text-sm placeholder:text-gray-400 text-black w-auto sm:w-[330px] "
                     />
                     <img onClick={()=>setOpen(!isOpen)} className='h-6 w-6 right-3 top-2 absolute cursor-pointer' src={!isOpen?hideneye:openeye}alt="" />
                    </div>

                    <p className='text-sm'> Forgot password?<span onClick={forgetPasshandle} className='underline text-blue-600 cursor-pointer'> Reset</span></p>

        {/* sign in button */}
        <input
          className='btn btn-primary bg-[rgb(124,7,234)] text-white'
          type='submit'
          value='Sign In'
        />
      </motion.form>
      
  
}
      
      {!user &&
       <p className='text-sm hidden sm:block'> New here? {' '}
         <Link to='/auth/register'>
         <span  className='text-[rgb(124,7,234)] italic font-semibold underline'> Create {' '}
          </span> 
        </Link>
          an account to get started!
      </p>}

     
    
    </div>

      {
        !user &&
        <motion.div 
       initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      className='flex flex-col gap-5'>
        <button onClick={handleGoogleLogin} className='btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-white text-black'><FcGoogle size={24}/> Sign in with Google</button>
        <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300'><FaFacebook size={24}/> Sign in with Facbook</button>
        <button className='btn btn-primary hover:scale-110 transition ease-in-out duration-300 bg-black'><FaGithub size={24}/> Sign in with Github</button>
      </motion.div>
      }

      <ToastContainer
      position='top-center'
      autoClose='2000'/>
     
    </div>
  );
};

export default Login;
