import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.',
      image: 'ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      image: 'portfolio',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      image: 'taskapp',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'fullstack',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data for any location.',
      image: 'weather',
      technologies: ['JavaScript', 'API', 'CSS'],
      category: 'frontend',
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with content management system and user authentication.',
      image: 'blog',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      category: 'fullstack',
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'Movie Database',
      description: 'A movie database application that allows users to search for movies, view details, and save favorites.',
      image: 'movie',
      technologies: ['React', 'API', 'CSS'],
      category: 'frontend',
      github: '#',
      demo: '#',
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
  ]

  return (
    <section id="projects" className="section-padding container-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">My</span> Projects
          </h2>
          <p className="text-light max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in different areas of web development.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 select-none ${filter === category.id ? 'bg-secondary text-primary font-medium' : 'bg-primary text-light hover:bg-opacity-80'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const projectLinks = (project) => (
    <div className="flex gap-4 mt-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:scale-110 transition-transform duration-300"
        title="Source Code"
      >
        <FaGithub size={24} />
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:scale-110 transition-transform duration-300"
        title="Live Demo"
      >
        <FaExternalLinkAlt size={24} />
      </a>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 bg-gray-800 flex items-center justify-center text-secondary text-xl">
        {/* Replace with actual project images */}
        <span>{project.image} Image</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 select-none">{project.title}</h3>
        <p className="text-light mb-4 select-none">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-dark text-secondary px-2 py-1 rounded select-none">
              {tech}
            </span>
          ))}
        </div>
        
        {projectLinks(project)}
      </div>
    </motion.div>
  )
}

export default Projects