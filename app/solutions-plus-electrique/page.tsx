import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import SocialProofSection from '../elumina/components/sections/SocialProofSection'
import FeaturesSection from '../elumina/components/sections/FeaturesSection'
import AboutSection from '../elumina/components/sections/AboutSection'
import StatsSection from '../elumina/components/sections/StatsSection'
import ServicesSection from '../elumina/components/sections/ServicesSection'
import CTABanner from './components/sections/CTABanner'
import FAQSection from '../elumina/components/sections/FAQSection'
import BlogSection from '../elumina/components/sections/BlogSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'

export default function SolutionsPlusElectrique() {
  return (
    <main className="overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl"
      >
        Aller au contenu
      </a>

      <Navbar />
      <div id="main">
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <CTABanner />
        <FAQSection />
        <BlogSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

