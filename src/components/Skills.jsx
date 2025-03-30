import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 65 },
        { name: 'JavaScript', level: 60 },
        { name: 'React', level: 60 },
        { name: 'Tailwind CSS', level: 60 },
        { name: 'TypeScript', level: 55 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 50 },
        { name: 'Express', level: 60 },
        { name: 'MongoDB', level: 50 },
        { name: 'Firebase', level: 50 },
        { name: 'REST API', level: 50 },
        { name: 'GraphQL', level: 50 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 70 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Webpack', level: 65 },
        { name: 'Jest', level: 70 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding container-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">My</span> Skills
          </h2>
          <p className="text-light max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with on a regular basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-dark p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium select-none">{skill.name}</span>
                      <span className="text-secondary select-none">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-primary rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-secondary h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills