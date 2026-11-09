import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import OJT from './components/OJT'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    return <NotFound />
  }

  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((theme) => !theme)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <OJT />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
