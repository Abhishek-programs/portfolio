import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Code Visualizer',
    problem:
      'Learners struggled to understand abstract code execution concepts.',
    solution:
      'Built a visual code execution tool that animates step-by-step program flow and state changes.',
    impact: [
      '1M+ monthly active users',
      'Thousands of learners completed projects',
      'Core tool for Programiz growth',
    ],
    technologies: ['Python', 'React', 'System Design', 'Backend Services'],
    github: '#',
    demo: 'https://programiz.pro/code-visualizer/dsa?type=knapsack',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Playground (IDE)',
    problem:
      'Learners needed a seamless in-browser coding environment for experimentation.',
    solution:
      'Engineered a multi-language IDE with real-time execution and instant feedback.',
    impact: [
      '100k+ monthly learners',
      'Enabled efficient in-browser coding',
      'Increased learner retention',
    ],
    technologies: ['React', 'Node.js', 'REST APIs', 'Real-time Execution'],
    github: '#',
    demo: 'https://www.programiz.com/python-programming/online-compiler/',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Content Workflow System',
    problem: 'Content release cycle took 14 days, slowing product iteration.',
    solution:
      'Designed and implemented an automated workflow system with CI/CD integration.',
    impact: [
      '7× faster content release (14 days → 2 days)',
      'Streamlined team workflows',
      'Accelerated product iteration',
    ],
    technologies: ['System Design', 'Python', 'Workflow Automation', 'CI/CD'],
    github: '#',
    demo: '#',
    internal: true,
    image: '/api/placeholder/600/400',
  },
  {
    title: 'Guided Project Environments',
    problem:
      'Learners needed structured, validated project experiences with portfolio outcomes.',
    solution:
      'Architected scalable environments with live validation and portfolio support.',
    impact: [
      'Thousands of completed real-world projects',
      'Enabled portfolio outcomes for learners',
      'Improved learning outcomes',
    ],
    technologies: ['System Design', 'Python', 'REST APIs', 'Microservices'],
    github: '#',
    demo: '#',
    image: '/api/placeholder/600/400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-yellow-pastel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Icon */}
        <div className="mb-16 flex items-center">
          <div className="bg-black text-white px-6 py-4 rounded-l-lg border-4 border-black flex items-center gap-3">
            <span className="text-2xl">📁</span>
            <h2 className="text-3xl md:text-4xl font-black">Projects</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-8 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center border-b-4 border-black">
                <span className="text-gray-600 text-sm font-semibold">
                  Project Screenshot
                </span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
                  {project.title}
                </h3>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-600 mb-1">
                    Problem
                  </p>
                  <p className="text-gray-800 leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-600 mb-1">
                    Solution
                  </p>
                  <p className="text-gray-800 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="mb-4 bg-yellow-pastel p-4 rounded-lg border-4 border-black">
                  <p className="text-sm font-bold text-black mb-2">Impact</p>
                  <ul className="space-y-1">
                    {project.impact.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-900 text-sm font-semibold flex items-start"
                      >
                        <span className="text-black mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-600 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-black rounded-lg text-xs font-semibold border-2 border-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors font-semibold text-sm"
                    >
                      <FaGithub size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo !== '#' && !project.internal && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors font-semibold text-sm"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.internal && (
                    <span className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
                      <span>🔒 Internal Tool</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
