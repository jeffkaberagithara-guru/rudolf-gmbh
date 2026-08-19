import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MEDIA } from '../utils/media'

export default function UnternehmenSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.04, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [5, -5])

  return (
    <section
      id="unternehmen"
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 bg-white overflow-hidden flex items-center"
      aria-label="Company"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <motion.div
            className="lg:col-span-6 relative overflow-hidden rounded-sm"
            style={{
              y: imageY,
              scale: imageScale,
              opacity: imageOpacity,
            }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={MEDIA.images.company}
                alt="RUDOLF GmbH — Unser Team und unsere Werte"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent" />
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent text-[0.65rem] tracking-[0.2em] uppercase font-semibold block mb-3">
                Company
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-navy-900 text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-6"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              RUDOLF GmbH<span className="text-steel-300">.</span>
            </motion.h2>

            <motion.h3
              className="font-display text-navy-700 text-xl md:text-2xl font-medium tracking-[-0.01em] mb-6"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Over 30 Years in Vienna
            </motion.h3>

            <motion.p
              className="text-steel-600 text-base md:text-lg leading-relaxed mb-6 max-w-lg"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              Founded in Vienna, shaped by craftsmanship and technical excellence.
              The RUDOLF GmbH team stands for experience, reliability and the
              high quality that Viennese expect from a traditional company.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {[
                { value: '30+', label: 'Years Experience' },
                { value: '4', label: 'Specialties' },
                { value: '1150', label: 'Vienna Location' },
                { value: '24/7', label: 'Availability' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-navy-900 text-2xl md:text-3xl font-bold tracking-[-0.02em]">
                    {stat.value}
                  </div>
                  <div className="text-steel-500 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              className="text-steel-500 text-sm leading-relaxed"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              Kriemhildplatz 9 · 1150 Vienna
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
