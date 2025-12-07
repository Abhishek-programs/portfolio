import Image from 'next/image';

import { abhishekPhoto } from '@/assets/images';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Icon */}
        <div className="mb-16 flex items-center">
          <div className="bg-black text-white px-8 py-5 rounded-l-lg border-4 border-black flex items-center gap-3">
            <span className="text-3xl" title="About section icon">
              👤
            </span>
            <h2 className="text-4xl md:text-5xl font-black">About</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Content - Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Short Intro */}
              <div className="bg-purple-bright rounded-lg border-8 border-black p-8 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg leading-relaxed font-normal">
                  I'm a Software Engineer at{' '}
                  <span className="font-bold">Programiz</span> with 3+ years
                  building high-impact learning tools used by millions of
                  learners worldwide.
                </p>
                <p className="text-lg leading-relaxed font-normal mt-4">
                  I specialize in frontend engineering (React, Next.js) and
                  backend development (Node, Python), with a strong focus on
                  building fast, intuitive UX for products and scaling systems
                  that handle millions of monthly executions.
                </p>
              </div>

              <div className="bg-white rounded-lg border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-3xl font-black text-black mb-6">
                  What I Do
                </h3>
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        Full-stack engineering:{' '}
                      </span>
                      Building end-to-end features from UI to APIs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        Developing scalable tools and products:{' '}
                      </span>
                      Designing systems that handle millions of requests
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        Building browser-based coding tools:{' '}
                      </span>
                      Creating visualizers, IDEs, and learning systems
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        Mentoring and leading engineering delivery:{' '}
                      </span>
                      Guiding teams and shipping impactful products
                    </div>
                  </li>
                </ul>
              </div>

              {/* What I've Built */}
              <div className="bg-yellow-pastel rounded-lg border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-3xl font-black text-black mb-6">
                  What I've Built
                </h3>
                <p className="text-gray-800 leading-relaxed mb-3">
                  Led development of{' '}
                  <span className="font-bold">Code Visualizer</span> (100K+
                  monthly users), enabling thousands of learners to understand
                  code execution visually. Built{' '}
                  <span className="font-bold">browser-based IDEs</span> serving
                  1M+ monthly learners. Designed systems that cut content
                  release time by <span className="font-bold">7×</span>,
                  accelerating product iteration significantly.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Built REST APIs and microservices powering Lessons,
                  Challenges, and Quizzes, ensuring scalability and reliability
                  for millions of requests per month.
                </p>
              </div>
            </div>

            {/* Right Column - Photo and Tags */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full border-8 border-black bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                  <Image
                    src={abhishekPhoto}
                    alt="Abhishek Photo"
                    title="Abhishek Bhattarai"
                    priority
                  />
                </div>
              </div>

              {/* Orange Tags */}
              <div className="space-y-3">
                <div className="bg-orange-bright rounded-lg border-8 border-black p-4 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-white font-black text-sm">
                    Full Stack Engineer
                  </p>
                </div>
                <div className="bg-orange-bright rounded-lg border-8 border-black p-4 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-white font-black text-sm">
                    End to End Product Developer
                  </p>
                </div>
                <div className="bg-orange-bright rounded-lg border-8 border-black p-4 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-white font-black text-sm">Team Leader</p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-yellow-pastel rounded-lg border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-3xl font-black text-black mb-4">
                  Current Focus
                </h3>
                <ul className="text-gray-900 leading-relaxed font-normal">
                  <li className="flex items-start gap-2">
                    <span className="font-black">-</span>
                    <span>
                      Exploring cloud architecture and scalable systems.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black">-</span>
                    <span>
                      Contributing to open-source projects and sharing knowledge
                      with the developer community.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black">-</span>
                    <span>
                      Looking to own end-to-end technical solutions and grow
                      infrastructure expertise.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
