import { useEffect, useState } from 'react'

/**
 * useActiveSection
 * Watches a list of section IDs and returns whichever one currently
 * occupies the "active" band near the top of the viewport, so the Navbar
 * can highlight the correct link as the user scrolls.
 *
 * @param {string[]} sectionIds
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        // Treat a band near the top of the viewport as "active" —
        // accounts for the sticky navbar height.
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
