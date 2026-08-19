import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { MEDIA } from '../utils/media'
import { useReducedMotion } from '../hooks/useAnimations'

const words = [
  { number: '01', text: 'PRÄZISION.' },
  { number: '02', text: 'TECHNIK.' },
  { number: '03', text: 'ZUVERLÄSSIGKEIT.' },
]

export default function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.65, 0.55, 0.55, 0.7])

  const wordProgress = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.9], [0, 1, 2, 3])

  const [activeWordIndex, setActiveWordIndex] = useState(0)

  useEffect(() => {
    const unsubscribe = wordProgress.on('change', (v) => {
      const idx = Math.min(Math.floor(v), words.length - 1)
      setActiveWordIndex(idx)
    })
    return unsubscribe
  }, [wordProgress])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh]"
      aria-label="Handwerkskunst — Präzision, Technik, Zuverlässigkeit"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: prefersReducedMotion ? 1 : videoScale }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster={MEDIA.posters.craftsmanship}
          >
            <source src={MEDIA.videos.craftsmanship} type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-navy-950"
          style={{ opacity: prefersReducedMotion ? 0.6 : overlayOpacity }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <AnimatePresence mode="wait">
              {activeWordIndex < words.length ? (
                <motion.div
                  key={activeWordIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center"
                >
                  <span className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase font-semibold block mb-4">
                    {words[activeWordIndex].number}
                  </span>
                  <h2 className="font-display text-white text-[clamp(3rem,10vw,8rem)] leading-none font-bold tracking-[-0.04em]">
                    {words[activeWordIndex].text}
                  </h2>
                </motion.div>
              ) : (
                <motion.div
                  key="final"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center"
                >
                  <h2 className="font-display text-white text-[clamp(2rem,5vw,4rem)] leading-none font-bold tracking-[-0.03em] mb-4">
                    RUDOLF GmbH
                  </h2>
                  <p className="text-white/50 text-sm md:text-base tracking-[0.1em] uppercase">
                    Kriemhildplatz 9 · 1150 Wien
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                activeWordIndex === i ? 'bg-white w-8' : 'bg-white/30 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
