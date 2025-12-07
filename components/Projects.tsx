import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

import {
  visualizerProject,
  playgroundProject,
  cwsProject,
  buildProject,
} from '@/assets/images';
import Link from 'next/link';

const projects = [
  {
    title: 'Code Visualizer',
    impactBadge: '100K+ monthly users',
    problem:
      'Learners struggled to understand abstract code execution concepts.',
    solution:
      'Built a visual code execution tool that animates step-by-step program flow and state changes in real-time.',
    impact: [
      '100K+ monthly active users',
      'Thousands of learners completed projects with visual understanding',
      'Core tool driving Programiz growth',
    ],
    technologies: [
      'Python',
      'React',
      'Next.js',
      'REST APIs',
      'Debug inspection',
    ],
    github: '#',
    demo: 'https://programiz.pro/code-visualizer/dsa?type=knapsack',
    image: visualizerProject,
  },
  {
    title: 'Playground (IDE)',
    impactBadge: '1M+ monthly users',
    problem:
      'Learners needed a seamless in-browser coding environment for experimentation.',
    solution:
      'Engineered a multi-language IDE with real-time execution, instant feedback, and support for multiple programming languages.',
    impact: [
      '1M+ monthly learners',
      'Millions of code executions processed',
      'Enabled efficient in-browser coding',
      'Increased learner retention significantly',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'REST APIs',
      'Real-time execution',
    ],
    github: '#',
    demo: 'https://www.programiz.com/python-programming/online-compiler/',
    image: playgroundProject,
  },
  {
    title: 'Content Workflow System',
    impactBadge: '7× faster releases',
    problem: 'Content release cycle took 14 days, slowing product iteration.',
    solution:
      'Built an automated workflow system with CI/CD integration, reducing manual steps and enabling faster content delivery.',
    impact: [
      '7× faster content release (14 days → 2 days)',
      'Streamlined team workflows',
      'Accelerated product iteration',
    ],
    technologies: ['Python', 'Workflow Automation', 'CI/CD'],
    github: '#',
    demo: '#',
    internal: true,
    image: cwsProject,
  },
  {
    title: 'Guided Project Environments',
    impactBadge: 'Hundreds of projects',
    problem:
      'Learners needed structured, validated project experiences with portfolio outcomes.',
    solution:
      'Built scalable environments with live validation, portfolio support, and real-world learning outcomes.',
    impact: [
      'Hundreds of completed real-world projects',
      'Enabled portfolio outcomes for learners',
      'Improved learning outcomes and engagement',
    ],
    technologies: ['React', 'Google API', 'REST APIs', 'Python'],
    github: '#',
    demo: 'https://programiz.pro/wall-of-inspiration',
    image: buildProject,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white"
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Icon */}
        <div className="mb-16 flex items-center">
          <div className="bg-black text-white px-8 py-5 rounded-l-lg border-4 border-black flex items-center gap-3">
            <span className="text-3xl" title="Projects section icon">
              📁
            </span>
            <h2 className="text-4xl md:text-5xl font-black">Projects</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-8 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col"
              aria-label={project.title}
            >
              {project.image ? (
                <div className="relative w-full h-48 md:h-64 lg:h-80 max-w-[600px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    quality={100}
                    height={400}
                    width={600}
                    title={project.title}
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center border-b-4 border-black">
                  <span
                    className="text-gray-600 text-sm font-semibold"
                    title="Project Screenshot"
                  >
                    Project Screenshot
                  </span>
                </div>
              )}
              <div className="p-8 bg-white flex-1 flex flex-col">
                {/* Impact Badge */}
                {project.impactBadge && (
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-black text-yellow-pastel rounded-lg text-sm font-black border-4 border-black">
                      {project.impactBadge}
                    </span>
                  </div>
                )}
                <h3
                  className="text-2xl md:text-3xl font-black text-black mb-6"
                  title={project.title}
                >
                  {project.title}
                </h3>
                {/* Problem */}
                <div className="mb-5 min-h-[76px]">
                  <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                    Problem
                  </p>
                  <p className="text-gray-800 leading-relaxed font-normal text-base">
                    {project.problem}
                  </p>
                </div>
                {/* Solution */}
                <div className="mb-5 min-h-[102px]">
                  <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                    Solution
                  </p>
                  <p className="text-gray-800 leading-relaxed font-normal text-base">
                    {project.solution}
                  </p>
                </div>
                {/* Impact */}
                <div className="mb-6 bg-yellow-pastel p-5 rounded-lg border-4 border-black">
                  <p className="text-sm font-black text-black mb-3">Impact</p>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-900 text-sm font-semibold flex items-start leading-relaxed"
                      >
                        <span className="text-black mr-2 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-100 text-black rounded-lg text-xs font-semibold border-2 border-black"
                        title={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Links */}
                <div className="flex gap-4 pt-2 mt-auto">
                  {project.github !== '#' && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors font-semibold text-sm"
                      title="View Code on GitHub"
                      aria-label="View Code on GitHub"
                    >
                      <FaGithub size={18} title="GitHub icon" />
                      <span>Code</span>
                    </Link>
                  )}
                  {project.demo !== '#' && !project.internal && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors font-semibold text-sm"
                      title="View Live Demo"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt size={16} title="External link icon" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                  {project.internal && (
                    <span
                      className="flex items-center gap-2 text-gray-500 font-semibold text-sm"
                      title="Internal Tool"
                    >
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
};

export default Projects;
