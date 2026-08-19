import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MEDIA } from '../utils/media'

export default function SpecialitatenSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 lg:py-44 bg-white overflow-hidden"
      aria-label="Specialitäten für Jung & Alt"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent text-[0.65rem] tracking-[0.2em] uppercase font-semibold block mb-3">
                Für Jung & Alt
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-navy-900 text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] font-bold tracking-[-0.02em] mb-6"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Komfort, der sich{' '}
              <span className="text-accent">anfühlt wie zuhause</span>
            </motion.h2>

            <motion.p
              className="text-steel-600 text-base md:text-lg leading-relaxed mb-6"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Ob junger Familien oder Generation — wir schaffen Wohnräume, in denen
              sich jeder wohlfühlt. Warmes Wasser, perfekte Heizung, funktionale
              Bäder. Technik, die im Alltag spürbar wird.
            </motion.p>

            <motion.p
              className="text-steel-500 text-sm leading-relaxed"
              style={{ y: textY }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              Unsere Kunden vertrauen uns seit über 30 Jahren. Wir verstehen,
              dass jede Wohnung und jeder Bewohner individuelle Anforderungen hat.
            </motion.p>
          </div>

          <motion.div
            className="lg:col-span-7 relative"
            style={{ scale: imageScale }}
          >
            <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-[2rem]">
              <img
                src={MEDIA.images.generational}
                alt="Wohnkomfort für Jung und Alt in Wien"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-sm px-5 py-3 inline-block">
                  <p className="text-white text-sm font-medium tracking-wide">
                    Seit über 30 Jahren in Wien
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Ihr Vertrauen ist unser Antrieb
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
