export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Icon */}
        <div className="mb-12 flex items-center">
          <div className="bg-black text-white px-6 py-4 rounded-l-lg border-4 border-black flex items-center gap-3">
            <span className="text-2xl">👤</span>
            <h2 className="text-3xl md:text-4xl font-black">About</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Content - Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Short Intro */}
              <div className="bg-purple-bright rounded-lg border-8 border-black p-6 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-base leading-relaxed font-normal">
                  I'm a Software Engineer at{' '}
                  <span className="font-bold">Programiz</span>, where I've spent
                  3+ years building and scaling developer tools and learning
                  platforms that reach millions of users worldwide. What started
                  as a frontend focus has evolved into full-stack expertise,
                  with strong skills in React, Next.js, TypeScript, and backend
                  development in Python and Node.js.
                </p>
              </div>

              {/* What I Do */}
              <div className="bg-white rounded-lg border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black text-black mb-4">
                  What I Do
                </h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold">•</span>
                    <span className="font-semibold">
                      Full-stack engineering
                    </span>{' '}
                    — Building end-to-end solutions from UI to APIs
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold">•</span>
                    <span className="font-semibold">System design</span> —
                    Architecting scalable systems handling millions of requests
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold">•</span>
                    <span className="font-semibold">Developer tooling</span> —
                    Creating tools that improve developer productivity
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-bright mr-3 font-bold">•</span>
                    <span className="font-semibold">Team leadership</span> —
                    Mentoring engineers and leading development teams
                  </li>
                </ul>
              </div>

              {/* What I've Built */}
              <div className="bg-white rounded-lg border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black text-black mb-4">
                  What I've Built
                </h3>
                <p className="text-gray-800 leading-relaxed mb-3">
                  Led development of{' '}
                  <span className="font-bold">Code Visualizer</span> (100K+
                  monthly users), enabling thousands of learners to understand
                  code execution visually. Built browser-based IDEs serving 1M+
                  monthly learners. Designed systems that cut content release
                  time by 7×, accelerating product iteration significantly.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Built REST APIs and microservices powering Lessons,
                  Challenges, and Quizzes, ensuring scalability and reliability
                  for millions of requests per month.
                </p>
              </div>

              {/* Current Focus */}
              <div className="bg-yellow-pastel rounded-lg border-8 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black text-black mb-3">
                  Current Focus
                </h3>
                <p className="text-gray-900 leading-relaxed font-normal">
                  Exploring cloud architecture and scalable systems.
                  Contributing to open-source projects and sharing knowledge
                  with the developer community. Looking to own end-to-end
                  technical solutions and grow infrastructure expertise.
                </p>
              </div>
            </div>

            {/* Right Column - Photo and Tags */}
            <div className="space-y-6">
              {/* Photo Placeholder */}
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-full border-8 border-black bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                  <div className="text-center text-gray-600 font-semibold">
                    <span className="text-4xl mb-2 block">📸</span>
                    <span className="text-sm">Photo Placeholder</span>
                  </div>
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
                    System Designer
                  </p>
                </div>
                <div className="bg-orange-bright rounded-lg border-8 border-black p-4 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-white font-black text-sm">Team Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
