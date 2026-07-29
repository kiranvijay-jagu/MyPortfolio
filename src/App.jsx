import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Achievements from "./components/Achievements"
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

// App.jsx composes the full single-page portfolio from section components.
// Each section is a semantic <section> with its own id, targeted by the
// Navbar's anchor links and the scroll-spy hook for active-link highlighting.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
