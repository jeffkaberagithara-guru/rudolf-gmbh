import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { MEDIA } from '../utils/media'
import { useReducedMotion } from '../hooks/useAnimations'

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.7])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden flex items-center"
      aria-label="RUDOLF GmbH — Hero"
    >
      {/* Background video */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: prefersReducedMotion ? 1 : videoScale }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={MEDIA.videos.hero} type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-navy-950"
        style={{ opacity: prefersReducedMotion ? 0.55 : overlayOpacity }}
      />

      {/* Gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-navy-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(74,144,194,0.06),transparent)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 pb-16 md:pt-36 md:pb-0"
        style={{ y: prefersReducedMotion ? 0 : contentY }}
      >
        <div className="max-w-[1400px] mx-auto max-w-3xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center gap-2 text-white/50 text-[0.7rem] tracking-[0.2em] uppercase font-medium border border-white/15 px-4 py-2 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
                Kriemhildplatz 9 · 1150 Vienna
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-white text-[clamp(2.5rem,4.5vw,4.2rem)] leading-[1.05] font-bold tracking-[-0.03em] mb-6"
            >
              <span className="block">Gas.</span>
              <span className="block">Water.</span>
              <span className="block text-accent-light">Heating.</span>
              <span className="block">Sanitary.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md mb-10"
            >
              Your trusted partner for installation technology
              in Vienna for over 30 years. Precision, technology,
              reliability.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="group flex items-center gap-3 bg-white text-navy-900 px-8 py-4 text-[0.85rem] font-semibold tracking-[0.04em] uppercase rounded-sm transition-all duration-300 hover:bg-accent hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Discover Services
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#kontakt"
                className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-[0.85rem] font-semibold tracking-[0.04em] uppercase rounded-sm transition-all duration-300 hover:bg-white/10"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Make Contact
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[0.65rem] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
