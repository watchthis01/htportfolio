import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding container-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">About</span> Me
          </h2>
          <p className="text-light max-w-2xl mx-auto">
            Here's a brief introduction about me and my journey as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="relative w-full h-80 bg-dark rounded-lg overflow-hidden">
              <img 
                src="/avt.png" 
                alt="About Me" 
                className="w-full h-full object-contain bg-dark"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 select-none">Thang Nguyen Developer & UI/UX Enthusiast</h3>
            <p className="text-light mb-4 select-none">
              I'm a passionate frontend developer with a strong focus on creating beautiful, functional, and user-friendly web applications. With over 5 years of experience in web development, I've worked on a variety of projects ranging from small business websites to complex web applications.
            </p>
            <p className="text-light mb-6 select-none">
              My approach to development combines technical expertise with an eye for design, ensuring that the end product is not only functional but also visually appealing and intuitive to use. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-secondary font-bold mb-2">Education</h4>
                <ul className="space-y-2">
                  <li>Hong Bang University</li>
                  <li>3.1 GPA</li>
                </ul>
              </div>
              <div>
                <h4 className="text-secondary font-bold mb-2">Experience</h4>
                <ul className="space-y-2">
                  <li>Frontend Developer</li>
                  <li>UI/UX Designer</li>
                  <li>Freelance Web Developer</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About