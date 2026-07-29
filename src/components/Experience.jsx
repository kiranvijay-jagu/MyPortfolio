import Reveal from './Reveal.jsx'
import { experience } from '../data/experience.js'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
          <p className="section-subtitle">
            Internships and hands-on experience that shaped how I build software.
          </p>
        </Reveal>

        <ol className="timeline">
          {experience.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              delay={index * 0.08}
              className="timeline__item"
            >
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content glass-card">
                <div className="timeline__header">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__company">{item.company}</p>
                <p className="timeline__desc">{item.description}</p>
                <ul className="timeline__tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="timeline__links">
  <a
    href={item.certificate}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline btn-sm"
  >
    📄 View Certificate
  </a>
</div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
