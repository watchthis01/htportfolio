import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import SoundToggle from './SoundToggle'

const navItems = [
  { id: 'home', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skills', text: 'Skills' },
  { id: 'projects', text: 'Projects' },
  { id: 'contact', text: 'Contact' },
]

const NavLink = ({ to, children, onClick, className }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    offset={-70}
    onClick={onClick}
    className={`relative cursor-pointer ${className}`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </Link>
)

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => setNav(!nav)

  return (
    <header className={`fixed w-full h-16 md:h-20 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg shadow-lg backdrop-blur-sm bg-opacity-80' : 'bg-transparent'
    }`}>
      <div className="container-padding h-full max-w-7xl mx-auto px-3 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavLink to="home" className="text-lg md:text-2xl font-bold cursor-pointer select-none whitespace-nowrap">
            <span className="text-secondary">Fantasy</span> Portfolio
          </NavLink>
        </motion.div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-2 md:gap-8">
          <motion.ul 
            className="hidden md:flex gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <NavLink
                  to={item.id}
                  className="px-4 py-2 text-text-primary group-hover:text-secondary transition-all duration-300 rounded-md relative inline-block font-medium"
                >
                  {item.text}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex items-center gap-1 md:gap-2">
            <div className="scale-90 md:scale-100">
              <SoundToggle />
            </div>
            <div className="scale-90 md:scale-100">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-50 scale-90"
            onClick={toggleNav}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.8 }}
          >
            {nav ? (
              <FaTimes size={22} className="text-secondary" />
            ) : (
              <FaBars size={22} className="text-text-primary hover:text-secondary transition-colors duration-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-bg/95 backdrop-blur-md md:hidden z-40"
            >
              <div className="flex flex-col justify-center items-center h-full">
                <motion.ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <NavLink
                        to={item.id}
                        onClick={() => setNav(false)}
                        className="text-xl font-medium text-text-primary hover:text-secondary transition-colors duration-300"
                      >
                        {item.text}
                      </NavLink>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar