import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = [
  { label: 'Gas', href: '#gas' },
  { label: 'Wasser', href: '#wasser' },
  { label: 'Heizung', href: '#heizung' },
  { label: 'Sanitär', href: '#sanitaer' },
  { label: 'Unternehmen', href: '#unternehmen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy-950 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-[0.03]"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 60 Q 360 0 720 60 T 1440 60 V120 H0Z"
            fill="currentColor"
            className="text-white"
            animate={{
              d: [
                'M0 60 Q 360 0 720 60 T 1440 60 V120 H0Z',
                'M0 60 Q 360 20 720 60 T 1440 60 V120 H0Z',
                'M0 60 Q 360 0 720 60 T 1440 60 V120 H0Z',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="font-display text-white text-2xl font-bold tracking-[-0.02em] mb-2">
              RUDOLF
            </div>
            <div className="text-white/30 text-[0.65rem] tracking-[0.15em] uppercase mb-6">
              GmbH
            </div>
            <p className="text-navy-400 text-sm leading-relaxed max-w-xs">
              Gas, Wasser, Heizung und Sanitär — Ihr vertrauenswürdiger Partner in Wien seit über 30 Jahren.
            </p>
          </div>

          <div>
            <h3 className="text-white/50 text-[0.65rem] tracking-[0.15em] uppercase font-semibold mb-5">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-navy-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/50 text-[0.65rem] tracking-[0.15em] uppercase font-semibold mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-navy-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-navy-400 text-sm hover:text-white transition-colors duration-300">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 text-sm hover:text-white transition-colors duration-300">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/50 text-[0.65rem] tracking-[0.15em] uppercase font-semibold mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+431XXXXXXXX" className="flex items-center gap-3 text-navy-400 text-sm hover:text-white transition-colors duration-300">
                  <Phone size={14} />
                  +43 1 XXX XXXX
                </a>
              </li>
              <li>
                <a href="mailto:office@rudolf-gmbh.at" className="flex items-center gap-3 text-navy-400 text-sm hover:text-white transition-colors duration-300">
                  <Mail size={14} />
                  office@rudolf-gmbh.at
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Kriemhildplatz+9+1150+Wien" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-navy-400 text-sm hover:text-white transition-colors duration-300">
                  <MapPin size={14} />
                  Kriemhildplatz 9, 1150 Wien
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-xs">
            © {new Date().getFullYear()} RUDOLF GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-navy-600 text-xs">
            Gas · Wasser · Heizung · Sanitär — Wien
          </p>
        </div>
      </div>
    </footer>
  )
}
