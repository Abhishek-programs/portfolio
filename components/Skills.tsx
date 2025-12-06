import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';

export default function Skills() {
  const categorizedSkills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Express', icon: SiExpress, color: 'text-gray-700' },
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
      ],
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      ],
    },
    {
      category: 'DevOps & Tools',
      technologies: [
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
        { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-yellow-pastel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Icon */}
        <div className="mb-8 flex items-center">
          <div className="bg-black text-white px-6 py-4 rounded-l-lg border-4 border-black flex items-center gap-3">
            <span className="text-2xl">&lt;/&gt;</span>
            <h2 className="text-3xl md:text-4xl font-black">Skills</h2>
          </div>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        {/* Summary */}
        <div className="mb-12 max-w-3xl">
          <p className="text-lg text-gray-800 font-semibold leading-relaxed">
            A full-stack engineer comfortable across the entire stack, with a
            strong focus on developer tooling and scalable systems.
          </p>
        </div>

        {/* Categorized Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorizedSkills.map(category => (
            <div
              key={category.category}
              className="bg-white rounded-lg border-8 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-xl font-black text-black mb-4 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map(tech => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Icon className={`${tech.color} text-3xl mb-2`} />
                      <span className="text-xs font-bold text-black text-center">
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
}
