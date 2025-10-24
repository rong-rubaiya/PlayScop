import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
 return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 overflow-hidden text-gray-700">
{/* Floating blobs */}
<motion.div
className="absolute w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
animate={{ y: [0, -30, 0] }}
transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
/>
<motion.div
className="absolute w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
animate={{ y: [0, 30, 0] }}
transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
/>


{/* Animated spinner */}
<motion.div
className="relative z-10 flex flex-col items-center"
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
<motion.div
className="w-20 h-20 border-8 border-indigo-300 border-t-indigo-600 rounded-full"
animate={{ rotate: 360 }}
transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
/>


<motion.h2
className="mt-6 text-2xl font-semibold text-gray-700"
animate={{ opacity: [0.3, 1, 0.3] }}
transition={{ repeat: Infinity, duration: 2 }}
>
Loading, please wait...
</motion.h2>


<motion.div
className="mt-4 flex gap-2"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5, duration: 1 }}
>
{[0, 1, 2].map((i) => (
<motion.span
key={i}
className="w-3 h-3 bg-indigo-500 rounded-full"
animate={{ y: [0, -8, 0] }}
transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
/>
))}
</motion.div>
</motion.div>
</div>
);
}
export default Loading;