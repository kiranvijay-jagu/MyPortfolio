import { FiTarget, FiBookOpen } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">
            Software development, <span className="gradient-text">AI-powered solutions</span>.
          </h2>
          <p className="section-subtitle">
            A quick look at my background, interests, and the kind of engineer I’m growing into.
          </p>
        </Reveal>

        <div className="about__grid">
          {/* Professional summary */}
          <Reveal delay={0.05} className="about__summary">
            <p>
              I’m Kiran Vijay, an IT graduate with a strong interest in software development and AI. 
              My focus lies in backend systems and intelligent applications, where I specialize in 
              Python, Django, SQL, and Generative AI.
            </p>
            <p>
              I enjoy building scalable web applications and AI-powered solutions that solve 
              real-world problems. Currently, I’m expanding my knowledge in Large Language Models (LLMs), 
              AI Agents, and modern backend development. My goal is to contribute to innovative software 
              products while continuously learning and growing as a developer.
            </p>
          </Reveal>

          {/* Education + objective cards */}
          <div className="about__side">
            <Reveal delay={0.1} className="about__card glass-card">
              <div className="about__card-icon">
                <FiBookOpen />
              </div>
              <h3>Education</h3>
              <p className="about__card-line">
                <strong>B.Tech in Information Technology</strong> — QIS College of Engineering and Technology, Ongole
              </p>
              <p className="about__card-line">2022 – 2026</p>
              <p className="about__card-line about__card-muted">CGPA: 7.9</p>
            </Reveal>

            <Reveal delay={0.15} className="about__card glass-card">
              <div className="about__card-icon">
                <FiTarget />
              </div>
              <h3>Career Objective</h3>
              <p className="about__card-line about__card-muted">
                Seeking a role in backend or AI engineering where I can design production-grade systems, 
                apply machine learning to real-world data, and grow alongside a team that values creativity, 
                efficiency, and impact.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
