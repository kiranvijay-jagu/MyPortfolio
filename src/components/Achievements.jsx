import { FiAward, FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { certifications } from '../data/achievements.js'
import './Achievements.css'

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-title"><span className="gradient-text">
            Participations</span> & Recognition
          </h2>
          <p className="section-subtitle">
            Certifications completed so far, with more in progress as I keep building on the AI/ML side.
          </p>
        </Reveal>

        <div className="cert__grid">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.07} className="cert__card glass-card">
              <div className="cert__icon">
                <FiAward />
              </div>
              <h3 className="cert__title">{cert.title}</h3>
              <p className="cert__issuer">{cert.issuer}</p>
              <p className="cert__date">{cert.date}</p>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert__link"
                >
                  View credential <FiExternalLink size={14} />
                </a>
              ) : (
                <span className="cert__link cert__link--disabled">Certificate coming soon</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
