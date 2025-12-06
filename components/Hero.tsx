'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-yellow-pastel pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
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
          <div className="text-center space-y-6">
            <div className="space-y-3">
              <p className="text-xl md:text-2xl font-semibold text-gray-900">
                Software Engineer specializing in building scalable developer
                tools
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Built tools used by 10M+ learners worldwide
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#projects"
                className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
