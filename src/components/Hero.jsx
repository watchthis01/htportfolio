import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-28 md:pt-36 flex items-center container-padding bg-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 select-none">
            Hi, I'm <span className="text-secondary">Thắng</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 select-none">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000 
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>
          
          <p className="text-light mb-8 max-w-lg select-none">
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly interfaces with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary cursor-pointer"
              >
                Contact Me
              </motion.button>
            </Link>
            <motion.a
              href="/mycv.pdf"
              download
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary cursor-pointer"
            >
              Download CV
            </motion.a>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="inline-block px-6 py-3 text-secondary border-2 border-secondary rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              View Projects
            </Link>
          </div>
         
          
          <div className="flex gap-4 mt-8">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/huthang2403/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/hthang.2402/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={24} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
            <img 
              src="/avt2.jpg" 
              alt="Fantasy Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero