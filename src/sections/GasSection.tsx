import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MEDIA } from '../utils/media'

export default function GasSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const videoScale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1])

  return (
    <section
      id="gas"
      ref={sectionRef}
      className="relative py-24 md:py-36 lg:py-44 bg-white overflow-hidden"
      aria-label="Gasinstallationen"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 relative overflow-hidden rounded-sm"
            style={{ scale: videoScale, opacity: videoOpacity }}
          >
            <div className="relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden rounded-sm">
              <img
                src={MEDIA.images.gas}
                alt="Gasinstallation — Professionelle Gasprüfung in Wien"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/30 to-transparent" />
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent text-[0.65rem] tracking-[0.2em] uppercase font-semibold block mb-3">
                01 · Gas
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-navy-900 text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              GAS<span className="text-steel-300">.</span>
            </motion.h2>

            <motion.h3
              className="font-display text-navy-700 text-xl md:text-2xl font-medium tracking-[-0.01em] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Gasinstallationen
            </motion.h3>

            <motion.p
              className="text-steel-600 text-base md:text-lg leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              Sicherheit beginnt mit Präzision. Wir installieren, warten und prüfen
              Ihre Gasanlagen mit höchster Sorgfalt — für Ihren Schutz und den
              optimalen Betrieb Ihrer Gasgeräte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 text-[0.8rem] font-semibold tracking-[0.04em] uppercase rounded-sm transition-all duration-300 hover:bg-accent"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Gas-Service anfragen
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
