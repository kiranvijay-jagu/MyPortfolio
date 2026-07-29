import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { skillCategories } from '../data/skills.js'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">
            My <span className="gradient-text">technical toolkit</span>
          </h2>
          <p className="section-subtitle">
            Technologies I use regularly, grouped by where they fit in the stack.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillCategories.map((category, catIndex) => (
            <Reveal
              key={category.id}
              delay={catIndex * 0.05}
              className="skills__card glass-card"
            >
              <h3 className="skills__category-title">
                {category.title}
              </h3>

              <ul className="skills__list">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon

                  return (
                    <motion.li
                      key={skill.name}
                      className="skills__pill"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -3 }}
                    >
                      {Icon && (
                        <Icon
                          className="skills__pill-icon"
                          aria-hidden="true"
                        />
                      )}

                      <span>{skill.name}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}