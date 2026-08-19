import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Flame, Droplets, Thermometer, Bath, ArrowRight } from 'lucide-react'
import { MEDIA } from '../utils/media'

const services = [
  {
    id: 'gas',
    number: '01',
    title: 'GAS',
    subtitle: 'Gasinstallationen',
    description: 'Professionelle Gasinstallation, Wartung und Prüfung für Ihre Sicherheit und den optimalen Betrieb.',
    icon: Flame,
    image: MEDIA.images.gas,
    href: '#gas',
  },
  {
    id: 'wasser',
    number: '02',
    title: 'WASSER',
    subtitle: 'Wasserinstallationen',
    description: 'Moderne Wasserinstallationen, Rohrleitungen und Sanitärlösungen für Wohn- und Gewerbeobjekte.',
    icon: Droplets,
    image: MEDIA.images.water,
    href: '#wasser',
  },
  {
    id: 'heizung',
    number: '03',
    title: 'HEIZUNG',
    subtitle: 'Heizungsinstallationen',
    description: 'Effiziente Heizungslösungen — von der Installation bis zur Wartung für optimalen Komfort.',
    icon: Thermometer,
    image: MEDIA.images.heating,
    href: '#heizung',
  },
  {
    id: 'sanitaer',
    number: '04',
    title: 'SANITÄR',
    subtitle: 'Bad & Sanitär',
    description: 'Bädergestaltung, Sanitärinstallationen und hochwertige Ausstattung nach Ihren Wünschen.',
    icon: Bath,
    image: MEDIA.images.bathroom,
    href: '#sanitaer',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-36 lg:py-44 bg-warm-50"
      aria-label="Unsere Leistungen"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <span className="text-accent text-[0.7rem] tracking-[0.2em] uppercase font-semibold block mb-4">
            Leistungen
          </span>
          <h2 className="font-display text-navy-900 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em] max-w-2xl">
            Technische Expertise{' '}
            <span className="text-steel-400">mitoggler.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number]
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  return (
    <motion.a
      ref={cardRef}
      href={service.href}
      variants={itemVariants}
      className="group relative block overflow-hidden rounded-sm bg-white border border-navy-100/50 transition-all duration-[400ms] hover:border-navy-200 hover:shadow-[0_8px_40px_rgba(13,21,38,0.08)]"
      onClick={(e) => {
        e.preventDefault()
        document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} — ${service.subtitle}`}
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />

        <div className="absolute top-5 left-5 md:top-6 md:left-6">
          <div className="flex items-center gap-2 text-white/50 text-[0.65rem] tracking-[0.15em] uppercase font-medium">
            <service.icon
              size={14}
              className="transition-transform duration-[300ms] group-hover:translate-y-[-2px]"
            />
            <span>{service.number}</span>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
          <h3 className="font-display text-white text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-1 transition-transform duration-[300ms] group-hover:translate-x-1">
            {service.title}
          </h3>
          <p className="text-white/50 text-[0.75rem] tracking-[0.08em] uppercase mb-3">
            {service.subtitle}
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-4 line-clamp-2">
            {service.description}
          </p>
          <div className="flex items-center gap-2 text-white/70 text-[0.75rem] font-semibold tracking-[0.08em] uppercase transition-colors duration-300 group-hover:text-white">
            <span>Mehr erfahren</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-[300ms] group-hover:translate-x-2"
            />
          </div>
        </div>
      </div>
    </motion.a>
  )
}
