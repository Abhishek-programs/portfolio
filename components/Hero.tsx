'use client';

import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-yellow-pastel"
      aria-label="Home section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          }}
        >
          {/* Name Tag Style Card */}
          <div className="bg-white rounded-lg border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-8">
            {/* Yellow Header Section */}
            <div className="bg-yellow-bright px-8 py-6 border-b-4 border-black">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
                Hello
              </h2>
              <p className="text-lg md:text-xl text-black font-semibold">
                My name is
              </p>
            </div>
            {/* White Name Section */}
            <div className="bg-white px-8 py-12 text-center">
              <h1 className="text-5xl md:text-7xl font-black text-black mb-4 tracking-tight">
                ABHISHEK
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-black tracking-tight">
                BHATTARAI
              </h1>
            </div>
          </div>

          {/* Subtitle and CTA outside the box */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Software Engineer building scalable features used by 10M+
                learners worldwide
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                I specialize in React, Next.js, and backend development to
                create fast, intuitive UX for products — from browser IDEs to
                visual code execution systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#projects"
                className="bg-black text-white px-10 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg"
                aria-label="Explore My Work"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="bg-white text-black px-10 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-lg"
                aria-label="Let's Talk"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
