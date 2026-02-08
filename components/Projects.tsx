import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

import {
  visualizerProject,
  playgroundProject,
  cwsProject,
  buildProject,
  featureFlagProject,
  marketingAnalyticsProject,
} from '@/assets/images';
import Link from 'next/link';

const projects = [
  {
    title: 'Code Visualizer Suite',
    impactBadge: '100K+ monthly users',
    problem:
      'Learners struggled to understand abstract code execution and algorithm steps.',
    solution:
      'Led end-to-end build of Python, C, and DSA visualizers: line-by-line execution, variable tracking, recursion. TypeScript frontend with Python/Node execution pipelines.',
    impact: [
      '100K+ monthly active users',
      'Turns pointers, recursion, DP into intuitive visual experiences',
      'Core tool driving Programiz learning platform',
    ],
    technologies: [
      'Python',
      'React',
      'TypeScript',
      'Node.js',
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
      'Primary developer of multi-language IDE: 8 languages, real-time execution, scalable backend. Powers examples, lessons, and project-based learning.',
    impact: [
      '1M+ monthly learners',
      '8-language support with isolated execution',
      'Enabled in-browser coding and portfolio outcomes',
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
    title: 'Marketing Analytics Pipeline',
    impactBadge: '10M+ events/month',
    problem: 'Incomplete funnel visibility and poor conversion tracking.',
    solution:
      'Designed server-side event pipeline (sGTM, Meta CAPI). RudderStack and BigQuery for funnel analysis. 90%+ tracking coverage, privacy-compliant.',
    impact: [
      'Tracking 0% → 90%+; 50% tracking accuracy improvement',
      'Signup latency 1.5s → 800ms via non-blocking analytics',
      'Attribution and lower CAC for paid marketing',
    ],
    technologies: ['GTM', 'sGTM', 'GA4', 'Meta CAPI', 'RudderStack', 'Mixpanel'],
    github: '#',
    demo: '#',
    internal: true,
    image: marketingAnalyticsProject,
  },
  {
    title: 'AI-Powered Content Engine',
    impactBadge: '2x production velocity',
    problem: 'Content creation was slow and labor-intensive.',
    solution:
      'Slack-integrated AI engine: raw docs → structured courses, brand-compliant assets. Multi-stage GPT/Gemini pipeline for content team.',
    impact: [
      'Content production 12 → 6 days (2x faster)',
      'Primary tool for content team; halved time-to-market',
      'Brand consistency via custom training',
    ],
    technologies: ['OpenAI', 'Gemini', 'Slack API', 'Prompt Engineering'],
    github: '#',
    demo: '#',
    internal: true,
    image: cwsProject,
  },
  {
    title: 'Guided Project Environments',
    impactBadge: 'Thousands of learners',
    problem:
      'Learners needed structured, validated project experiences with portfolio outcomes.',
    solution:
      'Contributed to system design for scalable project environments: automatic validation, portfolio support, measurable success outcomes.',
    impact: [
      'Thousands of learners complete projects with measurable outcomes',
      'Portfolio support and wall-of-inspiration',
      'Improved engagement and completion',
    ],
    technologies: ['React', 'Google API', 'REST APIs', 'Python'],
    github: '#',
    demo: 'https://programiz.pro/wall-of-inspiration',
    image: buildProject,
  },
  {
    title: 'Feature Flag System',
    impactBadge: 'Risk-free rollouts',
    problem: 'High risk deployments and lack of experimentation capability.',
    solution:
      'Built feature flag infrastructure (custom + GrowthBook). Controlled rollouts, A/B testing, instant toggles across large codebase.',
    impact: [
      'A/B tested offer pages; reduced deployment risk',
      'Managing 10+ concurrent flags',
      'Decoupled deployment from release',
    ],
    technologies: ['GrowthBook', 'React', 'Node.js'],
    github: '#',
    demo: '#',
    internal: true,
    image: featureFlagProject,
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
            <span
              className="text-3xl"
              title="Projects section icon"
              role="img"
              aria-label="Project"
            >
              📁
            </span>
            <h2 className="text-4xl md:text-5xl font-black">Projects</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
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
                <section aria-label="Problem" className="mb-5 min-h-[76px]">
                  <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                    Problem
                  </p>
                  <p className="text-gray-800 leading-relaxed font-normal text-base">
                    {project.problem}
                  </p>
                </section>
                {/* Solution */}
                <section aria-label="Solution" className="mb-5 min-h-[102px]">
                  <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                    Solution
                  </p>
                  <p className="text-gray-800 leading-relaxed font-normal text-base">
                    {project.solution}
                  </p>
                </section>
                {/* Impact */}
                <section
                  aria-label="Impact"
                  className="mb-6 bg-yellow-pastel p-5 rounded-lg border-4 border-black"
                >
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
                </section>
                {/* Technologies */}
                <section aria-label="Tools" className="mb-6">
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
                </section>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
