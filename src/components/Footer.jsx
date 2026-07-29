import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

const SOCIAL_LINKS = [
  { icon: FiGithub, href: 'https://github.com/kiranvijay-jagu', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kiran-vijay-871126291?utm_source=share_via&utm_content=profile&utm_medium=member_ios', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:kiranvijay1414@gmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner section-inner">
        <p className="footer__logo gradient-text">&lt;KV&gt;</p>

        <ul className="footer__socials">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="footer__social-link"
                >
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>

        <p className="footer__copyright">
          &copy; {year} Kiran Vijay. All rights reserved.
        </p>

        <button
          className="footer__top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      </div>
    </footer>
  )
}
