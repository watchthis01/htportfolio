import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`w-12 h-12 rounded-full flex items-center justify-center
        ${isDark ? 'bg-dark' : 'bg-light'} 
        hover:scale-110 transition-all duration-300
        border-2 border-secondary`}
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        backgroundColor: isDark ? '#020c1b' : '#e6f1ff',
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 360,
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FaMoon className="text-secondary text-xl" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? -360 : 0,
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FaSun className="text-secondary text-xl" />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle 