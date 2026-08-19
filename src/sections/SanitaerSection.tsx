import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MEDIA } from '../utils/media'

export default function SanitaerSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section
      id="sanitaer"
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 bg-warm-50 overflow-hidden flex items-center"
      aria-label="Bathroom & Sanitary"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 relative overflow-hidden rounded-sm"
            style={{
              clipPath: `inset(0 0 ${100 - (isInView ? 100 : 85)}% 0)`,
              y: imageY,
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden rounded-sm">
              <img
                src={MEDIA.images.bathroom}
                alt="Bad & Sanitär — Moderne Bädergestaltung in Wien"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-warm-50/10 to-transparent" />
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent text-[0.65rem] tracking-[0.2em] uppercase font-semibold block mb-3">
                04 · Bathroom & Sanitary
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-navy-900 text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              BATHROOM & SANITARY<span className="text-steel-300">.</span>
            </motion.h2>

            <motion.h3
              className="font-display text-navy-700 text-xl md:text-2xl font-medium tracking-[-0.01em] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Bathroom Design & Sanitary
            </motion.h3>

            <motion.p
              className="text-steel-600 text-base md:text-lg leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              Your dream bathroom becomes reality. We plan, install and design
              bathrooms with the highest craftsmanship — from the first consultation to the
              last detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 bg-navy-900 text-white px-8 py-4 text-[0.8rem] font-semibold tracking-[0.04em] uppercase rounded-sm transition-all duration-300 hover:bg-accent"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Request Bathroom Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
