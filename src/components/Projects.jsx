import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown, FiCode } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'
import './Projects.css'

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Reveal delay={index * 0.08} className="project-card glass-card">
      {/* Project Image */}
<div className="project-card__image">
  <img
    src={project.image}
    alt={project.title}
    className="project-card__preview"
  />
</div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>

        <ul className="project-card__tech">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <p className="project-card__desc">{project.description}</p>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="project-card__details"
            >
              <p>{project.details}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="project-card__footer">
          <button
            className="project-card__expand-btn"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'Expand for details'}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="project-card__expand-icon"
            >
              <FiChevronDown />
            </motion.span>
          </button>

          <div className="project-card__links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FiGithub /> GitHub
            </a>
            
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="section-subtitle">
            Projects that highlight my expertise in backend engineering and AI, ranging from applied ML to complete web applications.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
