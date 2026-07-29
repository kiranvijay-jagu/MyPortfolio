import { useEffect, useState } from 'react'

/**
 * useTypingEffect
 * Cycles through an array of strings, typing and deleting each one to
 * create the animated "typing" effect used in the Hero section.
 *
 * @param {string[]} phrases - strings to type out in sequence
 * @param {object} options - { typingSpeed, deletingSpeed, pauseTime }
 */
export function useTypingEffect(
  phrases,
  { typingSpeed = 70, deletingSpeed = 35, pauseTime = 1800 } = {}
) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length]
    let timeout

    if (!isDeleting && text === currentPhrase) {
      // Finished typing the phrase — pause, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      // Fully deleted — move to next phrase
      setIsDeleting(false)
      setPhraseIndex((prev) => prev + 1)
    } else {
      // Actively typing or deleting one character at a time
      const nextText = isDeleting
        ? currentPhrase.slice(0, text.length - 1)
        : currentPhrase.slice(0, text.length + 1)

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime])

  return text
}
