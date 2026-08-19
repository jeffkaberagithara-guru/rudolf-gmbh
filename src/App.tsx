import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { OrganicShape } from './components/OrganicShapes'
import Hero from './sections/Hero'
import Services from './sections/Services'
import GasSection from './sections/GasSection'
import WasserSection from './sections/WasserSection'
import HeizungSection from './sections/HeizungSection'
import SanitaerSection from './sections/SanitaerSection'
import SpecialitatenSection from './sections/SpecialitatenSection'
import UnternehmenSection from './sections/UnternehmenSection'
import CraftsmanshipSection from './sections/CraftsmanshipSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <div className="relative">
      <Navigation />

      <main>
        <Hero />
        <Services />
        <GasSection />
        <WasserSection />
        <HeizungSection />
        <SanitaerSection />
        <SpecialitatenSection />

        <div className="relative">
          <OrganicShape
            className="absolute -top-20 right-0 w-80 h-80 text-navy-900"
            variant="water"
          />
        </div>

        <CraftsmanshipSection />
        <UnternehmenSection />

        <div className="relative">
          <OrganicShape
            className="absolute top-10 left-0 w-60 h-60 text-accent"
            variant="pipe"
          />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
