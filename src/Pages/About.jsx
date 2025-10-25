import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            About <span className="text-white">Play-Scop</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Dive into the ultimate gaming universe — explore top-rated titles, 
            upcoming releases, and everything a gamer needs in one place.
          </p>
        </motion.div>

        {/* About section */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>Play-Scop</strong> is a next-generation gaming hub built for 
            passionate gamers. We curate top-rated games from around the world 
            and provide quick download access, detailed insights, and community 
            features. Whether you love action, strategy, adventure, or indie titles — 
            Play-Scop brings the best of gaming right to your fingertips.
          </p>
        </motion.section>

        {/* Mission / Vision */}
        <motion.section
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            We aim to connect gamers with quality games while keeping them updated 
            with the latest gaming news, reviews, and upcoming releases.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            To become the most trusted global platform where gamers can discover, 
            download, and discuss games safely and seamlessly.
          </p>
        </motion.section>

        {/* Terms & Rules */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Terms & Rules</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>All games listed belong to their respective owners and publishers.</li>
            <li>Play-Scop only provides verified download links and does not host pirated content.</li>
            <li>Users must follow fair use policies while sharing content.</li>
            <li>Respect other users — harassment or hate speech will not be tolerated.</li>
            <li>By using Play-Scop, you agree to our privacy and cookie policies.</li>
          </ul>
        </motion.section>

        
      </div>
    </div>
  );
};

export default About;
