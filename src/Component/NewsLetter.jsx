import React from 'react';

const NewsLetter = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4 border-2 w-auto sm:w-full px-3 sm:mx-auto mb-10 bg-[#001462] py-20 '>
     <h1 className='text-blue-400 font-bold text-4xl'>Stay in the Loop</h1>
     <p className='text-xl text-blue-600'>Sign up for updates,upcoming games and stay with us</p>

     <form className='mx-3 flex flex-col gap-4 justify-center items-center' >
     
     <input type="text"  required
     className='bg-white py-2 text-center rounded-xl placeholder:text-gray-500 italic mr-5'
     placeholder='Your name'/>

     <input type="email" required
     className='bg-white py-2 text-center rounded-xl placeholder:text-gray-500 italic  mr-5'
     placeholder='Your email'/>

     <input className='btn btn-primary px-10 rounded-2xl' type="submit" value="Subscribe" />

     </form>
     <p className='text-sky-300'>By subscribing you agree to our <a href="#" className="underline text-sky-600">terms</a>.</p>
    </div>
    
  );
};

export default NewsLetter;