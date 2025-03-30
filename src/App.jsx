import { useState, useEffect } from 'react'
import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <ThemeProvider>
      {isLoading ? (
        <div className="h-screen w-full flex items-center justify-center bg-bg">
          <Bouncy
            size={100}
            speed={1.75}
            color="var(--color-secondary)" 
          />
        </div>
      ) : (
        <div className="min-h-screen bg-bg text-text-primary transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App