import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight, Play } from 'lucide-react'
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 40])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] bg-navy-950 overflow-hidden flex items-center"
      aria-label="RUDOLF GmbH — Hero"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_50%,rgba(74,144,194,0.08),transparent)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-0"
        style={{ y: prefersReducedMotion ? 0 : contentY }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80svh]">

          {/* Left — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={videoLoaded ? 'visible' : 'hidden'}
            className="max-w-xl"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center gap-2 text-white/50 text-[0.7rem] tracking-[0.2em] uppercase font-medium border border-white/15 px-4 py-2 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
                Kriemhildplatz 9 · 1150 Wien
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-white text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.95] font-bold tracking-[-0.03em] mb-8"
            >
              <span className="block">Gas.</span>
              <span className="block">Wasser.</span>
              <span className="block text-accent-light">Heizung.</span>
              <span className="block">Sanitär.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md mb-12"
            >
              Seit über 30 Jahren Ihr vertrauenswürdiger Partner für
              Installationstechnik in Wien. Präzision, Technik, Zuverlässigkeit.
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
                Leistungen entdecken
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
                Kontakt aufnehmen
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Video */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={videoLoaded ? 'visible' : 'hidden'}
            style={{ y: prefersReducedMotion ? 0 : videoY }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px]">
              {/* Glow behind video */}
              <div className="absolute -inset-3 bg-accent/10 rounded-2xl blur-2xl" />

              {/* Video frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-navy-950/50">
                <video
                  ref={videoRef}
                  className="w-full aspect-[4/3] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedData={() => setVideoLoaded(true)}
                >
                  <source src={MEDIA.videos.hero} type="video/mp4" />
                </video>

                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
                      <span className="text-white/70 text-[0.65rem] tracking-[0.15em] uppercase font-medium">
                        Servicetechniker im Einsatz
                      </span>
                    </div>
                    <p className="text-white/40 text-[0.7rem] tracking-wide">
                      Heizungsanlage — Wartung & Inspektion
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                    <Play size={14} className="text-white/80 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={videoLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-4 lg:-left-8 bottom-16 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3.5 shadow-lg"
              >
                <p className="text-accent-light font-display text-2xl font-bold leading-none mb-1">
                  30+
                </p>
                <p className="text-white/50 text-[0.65rem] tracking-wide uppercase">
                  Jahre Erfahrung
                </p>
              </motion.div>
            </div>
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
            Scrollen
          </span>
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
