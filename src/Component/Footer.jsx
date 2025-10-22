import React from 'react';
import imgLogo from "../assets/logo.png";
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.Footer
    initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 3 }}
    className=" sm:footer-horizontal bg-purple-900 text-neutral-content min-h-screen text-center">
  <div className='p-10 flex flex-col sm:flex-row justify-between '>
    <aside className=''>
   <div className='flex flex-col sm:flex-row gap-3 items-center pb-3.5 sm:pb-0'><img className='h-10' src={imgLogo} alt="" /><h1 className='font-semibold text-2xl'>Play-Scop</h1></div>
   
  </aside>
  
   <div className='pb-3.5 sm:pb-0'>
          <h2 className="text-lg font-semibold mb-3 border-b border-white/20 inline-block pb-3.5 sm:pb-1">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
            <li><a href='/all-games' className="hover:text-gray-200">All Games</a></li>
            
            
          </ul>
        </div>


  <div className="flex justify-center sm:justify-start gap-5 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
              <FaFacebook size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-200">
              <FaLinkedinIn size={20} />
            </a>
            <a href="mailto:your-email@example.com" className="hover:scale-110 transition-transform duration-200">
              <MdEmail size={22} />
            </a>
          </div>
  </div>

          <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-90 pb-7">
        <p>
          <span className="font-semibold">Play-Scop</span>. All rights reserved.  
        </p>
        <p className="mt-1 italic text-gray-200">Crafted with ❤️ by Rubaiya Hamid Rongkoni</p>
      </div>
          


          
 
</motion.Footer>
  );
};

export default Footer;