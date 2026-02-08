import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Icon */}
        <div className="mb-16 flex items-center">
          <div className="bg-black text-white px-8 py-5 rounded-l-lg border-4 border-black flex items-center gap-3">
            <span
              className="text-3xl"
              title="About section icon"
              role="img"
              aria-label="About"
            >
              👤
            </span>
            <h2 className="text-4xl md:text-5xl font-black">About</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        <article className="max-w-6xl mx-auto" aria-label="About me article">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Content - Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Short Intro */}
              <div className="bg-purple-bright rounded-lg border-8 border-black p-8 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg leading-relaxed font-normal">
                  I'm a Senior Software Engineer at{' '}
                  <span className="font-bold">Programiz</span> with 4 years of
                  experience, leading high-impact learning tools used by 10M+
                  users worldwide.
                </p>
                <p className="text-lg leading-relaxed font-normal mt-4">
                  I specialize in frontend (React, Next.js) and backend (Node,
                  Python), plus growth analytics (sGTM, Meta CAPI). I focus on
                  fast UX, scalable systems, and bridging engineering with
                  product and growth.
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
                      End-to-end features from UI to APIs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        Lead visualizer & IDE architecture:{' '}
                      </span>
                      Code Visualizer suite, Playground for 100K+ and 1M+ users
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        Marketing data pipelines:{' '}
                      </span>
                      sGTM, Meta CAPI, conversion tracking with growth teams
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        System performance:{' '}
                      </span>
                      Non-blocking analytics; 45% latency reduction on critical paths
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold text-xl">
                      •
                    </span>
                    <div>
                      <span className="font-bold text-lg">
                        Mentorship:{' '}
                      </span>
                      Code reviews, TypeScript and REST API standards
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
                  Led <span className="font-bold">Code Visualizer</span> (100K+
                  MAU) and <span className="font-bold">Playground IDE</span>{' '}
                  (8 languages, 1M+ learners). Cut content release from 14 to 4
                  days via a custom workflow system; 2× content velocity with
                  AI-powered pipelines. Built analytics stack (sGTM, CAPI)
                  handling ~10M events/month; tracking 0%→90%+, 45% auth latency
                  improvement.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  REST APIs and microservices for Lessons, Quizzes, and
                  execution pipelines; feature flags and A/B testing for
                  risk-free rollouts.
                </p>
              </div>
            </div>

            {/* Right Column - Photo and Tags */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full border-8 border-black bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/abhishek.jpg"
                    alt="Abhishek Photo"
                    title="Abhishek Bhattarai"
                    width={256}
                    height={256}
                    priority
                    unoptimized
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
                    Growth / Analytics
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
                      Leading design and implementation of complex features like
                      algorithm visualizers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black">-</span>
                    <span>
                      Mentoring junior engineers and guiding technical
                      architecture.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black">-</span>
                    <span>
                      Expanding into advanced marketing analytics and conversion
                      engineering.
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
        </article>
      </div>
    </section>
  );
};

export default About;
