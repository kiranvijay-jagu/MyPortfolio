import { useState } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import './Contact.css'
import emailjs from "@emailjs/browser"


const CONTACT_INFO = [
  { icon: FiMail, label: 'Email', value: 'kiranvijay1414@gmail.com', href: 'mailto:kiranvijay1414@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 63026 34562', href: 'tel:+916302634562' },
  { icon: FiGithub, label: 'GitHub', value: 'kiranvijay-jagu', href: 'https://github.com/kiranvijay-jagu' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'kiran vijay jagu', href: 'https://www.linkedin.com/in/kiran-vijay-871126291?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Placeholder submit handler — wire this up to an email service
  // (e.g. Formspree, EmailJS, or a custom backend endpoint) in production.
 const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    setStatus('sent')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)

  } catch (error) {
    console.error(error)
    alert("Failed to send message.")
  }
}

  return (
    <section id="contact" className="section contact">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">build something</span>
          </h2>
          <p className="section-subtitle">
            Open to backend and AI engineering opportunities — reach out through any channel below.
          </p>
        </Reveal>

        <div className="contact__grid">
          {/* Contact info list */}
          <Reveal delay={0.05} className="contact__info">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__info-item glass-card"
                >
                  <span className="contact__info-icon">
                    <Icon />
                  </span>
                  <span>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </span>
                </a>
              )
            })}
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="contact__form-wrap glass-card">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                <FiSend /> {status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </button>

              {status === 'sent' && (
                <p className="contact__success" role="status">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
