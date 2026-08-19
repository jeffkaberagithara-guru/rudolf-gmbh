import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Leistungen', href: '#services' },
  { label: 'Gas', href: '#gas' },
  { label: 'Wasser', href: '#wasser' },
  { label: 'Heizung', href: '#heizung' },
  { label: 'Sanitär', href: '#sanitaer' },
  { label: 'Unternehmen', href: '#unternehmen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`
            transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
            ${scrolled
              ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(13,21,38,0.08)]'
              : 'bg-transparent'
            }
          `}
        >
          <nav className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <div className={`flex items-center justify-between transition-all duration-[400ms] ${
              scrolled ? 'h-16 md:h-18' : 'h-20 md:h-24'
            }`}>
              <a
                href="#"
                className="relative z-10 flex items-center gap-3"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <motion.div
                  className={`font-display font-bold tracking-[-0.02em] transition-colors duration-400 ${
                    scrolled ? 'text-navy-900' : 'text-white'
                  }`}
                  animate={{
                    fontSize: scrolled ? '1.25rem' : '1.5rem',
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  RUDOLF
                </motion.div>
                <div className={`hidden sm:block text-[0.65rem] tracking-[0.15em] uppercase font-light transition-colors duration-400 ${
                  scrolled ? 'text-steel-500' : 'text-white/60'
                }`}>
                  GmbH
                </div>
              </a>

              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      text-[0.8rem] font-medium tracking-[0.04em] uppercase
                      transition-colors duration-300 hover:opacity-70
                      ${scrolled ? 'text-navy-700' : 'text-white/80'}
                    `}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+431XXXXXXXX"
                  className={`
                    flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.04em] uppercase
                    px-5 py-2.5 rounded-sm transition-all duration-300
                    ${scrolled
                      ? 'bg-navy-900 text-white hover:bg-navy-800'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }
                  `}
                >
                  <Phone size={14} strokeWidth={2} />
                  Anrufen
                </a>
              </div>

              <button
                className="lg:hidden relative z-10 p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
              >
                {mobileOpen ? (
                  <X size={24} className={scrolled ? 'text-navy-900' : 'text-white'} />
                ) : (
                  <Menu size={24} className={scrolled ? 'text-navy-900' : 'text-white'} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white text-2xl font-display font-medium tracking-[0.04em] uppercase hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+431XXXXXXXX"
                className="mt-4 flex items-center gap-3 bg-white text-navy-900 px-8 py-4 rounded-sm text-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                <Phone size={18} />
                +43 1 XXX XXXX
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
