import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MEDIA } from '../utils/media'
import { useReducedMotion } from '../hooks/useAnimations'

export default function HeizungSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.02])
  const textY = useTransform(scrollYProgress, [0.1, 0.5], [60, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.7, 0.55, 0.65])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isInView) return
    video.play().catch(() => {})
  }, [isInView])

  return (
    <section
      id="heizung"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      aria-label="Heating Installations"
    >
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
          poster={MEDIA.posters.heating}
        >
          <source src={MEDIA.videos.heating} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-navy-950"
        style={{ opacity: prefersReducedMotion ? 0.6 : overlayOpacity }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/30" />

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <motion.div style={{ y: prefersReducedMotion ? 0 : textY }} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <span className="text-accent-light text-[0.65rem] tracking-[0.2em] uppercase font-semibold">
              03 · Heating
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] font-bold tracking-[-0.03em] mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            HEATING<span className="block text-accent-light">INSTALLATIONS.</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            Modern heating technology for your comfort. We install
            highly efficient heating systems — individually, reliably and to the
            highest Austrian standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-[0.8rem] font-semibold tracking-[0.04em] uppercase rounded-sm transition-all duration-300 hover:bg-white/10"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book Heating Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
