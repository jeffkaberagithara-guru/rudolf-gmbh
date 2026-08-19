import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react'
import { MEDIA } from '../utils/media'

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+43 1 XXX XXXX',
    href: 'tel:+431XXXXXXXX',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'office@rudolf-gmbh.at',
    href: 'mailto:office@rudolf-gmbh.at',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Kriemhildplatz 9, 1150 Vienna',
    href: 'https://maps.google.com/?q=Kriemhildplatz+9+1150+Wien',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.rudolf-gmbh.at',
    href: 'https://rudolf-gmbh.at',
  },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 lg:py-40 bg-navy-950 overflow-hidden flex items-center"
      aria-label="Contact"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src={MEDIA.images.vienna}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent-light text-[0.65rem] tracking-[0.2em] uppercase font-semibold block mb-4">
                Contact
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              CONTACT{' '}
              <span className="text-accent-light">RUDOLF.</span>
            </motion.h2>

            <motion.p
              className="text-navy-300/70 text-base md:text-lg leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Call us or write to us — we look forward to your
              enquiry and will get back to you as soon as possible.
            </motion.p>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/30">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[0.65rem] tracking-[0.12em] uppercase text-white/40 mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/3] lg:aspect-square rounded-sm overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKriemhildplatz+9%2C+1150+Wien!5e0!3m2!1sde!2sat!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'saturate(0.8) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RUDOLF GmbH Standort auf Karte"
              />
            </div>

            <motion.a
              href="https://maps.google.com/?q=Kriemhildplatz+9+1150+Wien"
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute -bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto inline-flex items-center gap-3 bg-white text-navy-900 px-6 py-3 text-[0.75rem] font-semibold tracking-[0.04em] uppercase rounded-sm transition-all duration-300 hover:bg-accent hover:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Open in Google Maps
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
