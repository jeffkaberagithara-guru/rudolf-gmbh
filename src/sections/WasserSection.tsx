import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MEDIA } from '../utils/media'

export default function WasserSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const mediaX = useTransform(scrollYProgress, [0, 1], [30, -30])
  const textX = useTransform(scrollYProgress, [0, 1], [8, -8])
  const mediaScale = useTransform(scrollYProgress, [0, 0.5], [1.02, 1])

  return (
    <section
      id="wasser"
      ref={sectionRef}
      className="relative py-24 md:py-36 lg:py-44 bg-navy-950 overflow-hidden"
      aria-label="Wasserinstallationen"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 lg:order-1">
            <motion.div
              style={{ x: textX }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent-light text-[0.65rem] tracking-[0.2em] uppercase font-semibold block mb-3">
                02 · Wasser
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-white text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-6"
              style={{ x: textX }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              WASSER<span className="text-navy-500">.</span>
            </motion.h2>

            <motion.h3
              className="font-display text-navy-300 text-xl md:text-2xl font-medium tracking-[-0.01em] mb-6"
              style={{ x: textX }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Wasserinstallationen
            </motion.h3>

            <motion.p
              className="text-navy-300/70 text-base md:text-lg leading-relaxed mb-8 max-w-md"
              style={{ x: textX }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              Von der kompletten Wasserinstallation bis zur Sanitärerneuerung — wir
              schaffen zuverlässige Wassersysteme, die jahrelang einwandfrei funktionieren.
              Sauber, präzise, langlebig.
            </motion.p>

            <motion.div
              style={{ x: textX }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 bg-white text-navy-900 px-8 py-4 text-[0.8rem] font-semibold tracking-[0.04em] uppercase rounded-sm transition-all duration-300 hover:bg-accent hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Wasser-Service anfragen
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-7 lg:order-2 relative overflow-hidden rounded-sm"
            style={{ x: mediaX, scale: mediaScale }}
          >
            <div className="relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden rounded-sm">
              <img
                src={MEDIA.images.water}
                alt="Wasserinstallation — Professionelle Rohr- und Wasserarbeiten in Wien"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-navy-950/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
