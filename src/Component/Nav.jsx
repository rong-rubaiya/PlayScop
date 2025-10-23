import React, { use, useState } from 'react'; 
import { motion } from 'framer-motion'; 
import imgLogo from "../assets/logo.png"; 
import { NavLink } from 'react-router'; 
import { HiMenu, HiX } from 'react-icons/hi'; 
import { AuthContext } from '../Provider/AuthProvider';


const Nav = () => { 
  

  const {user}=use(AuthContext)

  console.log(user);

  
  const [isOpen, setIsOpen] = useState(false); 
  const links = <> <NavLink to={'/'} className="font-semibold hover:text-[#d3e8ec] hover:scale-110 transition ease-in-out duration-300">Home</NavLink> 

  <NavLink to={'/all-games'} className="font-semibold hover:text-[#d3e8ec] hover:scale-110 transition ease-in-out duration-300">All Games</NavLink>

 <NavLink to={'/about'} className="font-semibold hover:text-[#d3e8ec] hover:scale-110 transition ease-in-out duration-300">About</NavLink> 
 
 {!user && 
 <>
 <NavLink to={'/auth/login'} className="font-semibold hover:text-[#d3e8ec] hover:scale-110 transition ease-in-out duration-300">Sign In</NavLink>

 <NavLink to={'/auth/register'} className="font-semibold hover:text-[#d3e8ec] hover:scale-110 transition ease-in-out duration-300">Sign Up</NavLink>
 </>
 
 }
 {user && 
 <>
<button className="font-semibold hover:text-[#d3e8ec]  hover:scale-110 transition ease-in-out duration-300">Sign Out</button>

  <NavLink to={'/user-profile'} className="font-semibold hover:text-[#d3e8ec] hover:scale-110 transition ease-in-out duration-300">
 <img className='w-8 h-8' src={user.photoURL} alt="" /></NavLink>

   

 

 
 </>}

 

 

 
 
  </>; 
  
  return ( 
    
    <motion. div 
    className="nav py-4 bg-linear-to-r from-[#632b85] to-[#b77de4] shadow-lg sticky top-0 z-50 text-center" 
    initial={{ y: -50, opacity: 0 }} 
    animate={{ y: 0, opacity: 1 }} 
    transition={{ duration: 1.5 }} > 
    
    <div className="w-11/12 mx-auto flex justify-between items-center"> 
    
    {/* Logo */} 
    
    <div className="flex items-center justify-center gap-2 cursor-pointer"> 
      <img src={imgLogo} alt="logo" className="w-14 h-14 rounded-full border-2 border-white p-1" /> 
      
      <h2 className="text-white font-bold text-xl">Play-Scop</h2>
      
       </div> 
       
       {/* Desktop Links */} 
       
       <div className="hidden md:flex justify-center items-center gap-6 text-white"> 
        
        {links} 
        
        </div> 
        
        {/* menu button */} 
        
        <div className="md:hidden"> 
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none"> 
            {isOpen ? 
            <HiX /> : <HiMenu />} 
            </button> 
            </div> 
            
            </div> 
            {/* Mobile Links */} 
            
            {isOpen && ( <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="md:hidden flex flex-col gap-4 mt-4 text-white bg-[#020024] p-4 rounded-lg shadow-lg" > {links} 
              </motion.div> )} 
              </motion. div> ); }; 
              
export default Nav;