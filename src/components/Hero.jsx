import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { useTypingEffect } from '../hooks/useTypingEffect'
import './Hero.css'
import profile from '../assets/profile.jpg'

// Roles cycled through by the typing effect — edit freely.
const TYPED_PHRASES = [
  'Python Backend & AI Developer',
  'Building innovative solutions',
  'Applying AI to real-world problems',
]

export default function Hero() {
  const typedText = useTypingEffect(TYPED_PHRASES)

  return (
    <section id="home" className="hero section">
      <div className="ambient-glow" aria-hidden="true" />

      <div className="hero__inner section-inner">
        {/* Text column */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow">Hello, I&apos;m</p>
          <h1 className="hero__name">
            Kiran Vijay<span className="gradient-text">.</span>
          </h1>

          <h2 className="hero__typed" aria-live="polite">
            {typedText}
            <span className="hero__cursor" aria-hidden="true" />
          </h2>

          <p className="hero__intro">
            I recently graduated with a B.Tech in Information Technology from QIS College of Engineering and Technology, Ongole.
             With a strong foundation in programming and a curiosity-driven mindset, I enjoy building real-world projects that solve practical problems.
             I’m eager to contribute to innovative teams, grow as a developer, and create impactful digital solutions.
          </p>

          <div className="hero__actions">
            <a href="/resume.pdf" className="btn btn-primary" download>
              <FiDownload /> Download Resume
            </a>
            <a
              href="https://github.com/kiranvijay-jagu"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kiran-vijay-871126291?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Image column — floating profile placeholder with glow ring */}
        <motion.div
          className="hero__image-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="hero__image-glow" aria-hidden="true" />
          <div className="hero__image-float">
            <div className="hero__image-placeholder" role="img" aria-label="Profile photo placeholder">
              <span> <img
    src={profile}
    alt="Kiran Vijay"
    className="hero__profile-image"
  /></span>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <FiArrowDown />
      </a>
    </section>
  )
}
