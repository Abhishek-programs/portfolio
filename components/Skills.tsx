import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';

const Skills = () => {
  const categorizedSkills = [
    {
      category: 'Core Engineering',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
      ],
    },
    {
      category: 'Platforms & Infrastructure',
      technologies: [
        { name: 'REST APIs', icon: SiExpress, color: 'text-gray-700' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
        { name: 'CI/CD', icon: FaGitAlt, color: 'text-orange-600' },
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
              aria-label="Skills section icon"
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
            Product-driven engineer specializing in React, Next.js, TypeScript,
            Node.js, and Python. Comfortable across the entire stack, with
            experience in building scalable product and internal tools.
          </p>
        </div>

        {/* Categorized Skills */}
        <div className="grid md:grid-cols-3 gap-6">
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
                    <div
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
                    </div>
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
