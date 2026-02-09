import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaServer,
  FaCogs,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiGithubactions,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiJavascript,
  SiFramer,
  SiStorybook,
  SiMeta,
  SiMixpanel,
  SiChartdotjs,
} from 'react-icons/si';

const Skills = () => {
  const categorizedSkills = [
    {
      category: 'Core / Frontend',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'Design Systems', icon: SiStorybook, color: 'text-pink-500' },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-gray-800' },
      ],
    },
    {
      category: 'Backend & Systems',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
        { name: 'REST APIs', icon: SiExpress, color: 'text-gray-700' },
        { name: 'Microservices', icon: FaServer, color: 'text-gray-600' },
        { name: 'CI/CD', icon: SiGithubactions, color: 'text-orange-600' },
        { name: 'Workflow Automation', icon: FaCogs, color: 'text-gray-600' },
      ],
    },
    {
      category: 'Growth & Marketing Analytics',
      technologies: [
        {
          name: 'GTM & sGTM',
          icon: SiGoogletagmanager,
          color: 'text-blue-500',
        },
        { name: 'GA4', icon: SiGoogleanalytics, color: 'text-orange-500' },
        { name: 'Meta CAPI', icon: SiMeta, color: 'text-blue-600' },
        { name: 'RudderStack', icon: SiChartdotjs, color: 'text-orange-600' },
        { name: 'Mixpanel', icon: SiMixpanel, color: 'text-orange-600' },
        {
          name: 'Conversion Tracking',
          icon: FaChartLine,
          color: 'text-green-600',
        },
      ],
    },
    {
      category: 'Tools Used Daily',
      technologies: [
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="py-24 bg-yellow-pastel"
      aria-label="Skills section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Icon */}
        <div className="mb-12 flex items-center">
          <div className="bg-black text-white px-8 py-5 rounded-l-lg border-4 border-black flex items-center gap-3">
            <span
              className="text-3xl"
              title="Skills section icon"
              role="img"
              aria-label="Skills"
            >
              &lt;/&gt;
            </span>
            <h2 className="text-4xl md:text-5xl font-black">Skills</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        {/* Summary */}
        <div className="mb-12 max-w-3xl">
          <p
            className="text-lg text-gray-800 font-semibold leading-relaxed"
            aria-label="Skills summary"
          >
            Product-driven engineer with 4 years. TypeScript, React, Next.js,
            Node.js, Python. Scalable product, internal tools, and growth
            analytics (GTM, sGTM, CAPI).
          </p>
        </div>

        {/* Categorized Skills - 2x2 grid for 4 categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {categorizedSkills.map(category => (
            <div
              key={category.category}
              className="bg-white rounded-lg border-8 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              aria-label={category.category}
            >
              <h3
                className="text-xl font-black text-black mb-4 text-center"
                aria-label={category.category}
              >
                {category.category}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {category.technologies.map(tech => {
                  const Icon = tech.icon;
                  return (
                    <article
                      key={tech.name}
                      className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      title={tech.name}
                      aria-label={tech.name}
                    >
                      <Icon
                        className={`${tech.color} text-3xl mb-2`}
                        title={tech.name}
                        aria-label={tech.name}
                      />
                      <span
                        className="text-xs font-bold text-black text-center"
                        title={tech.name}
                        aria-label={tech.name}
                      >
                        {tech.name}
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
