import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import SocialProofSection from './components/sections/SocialProofSection'
import FeaturesSection from './components/sections/FeaturesSection'
import AboutSection from './components/sections/AboutSection'
import StatsSection from './components/sections/StatsSection'
import ServicesSection from './components/sections/ServicesSection'
import CTABanner from './components/sections/CTABanner'
import FAQSection from './components/sections/FAQSection'
import BlogSection from './components/sections/BlogSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'

export default function Elumina() {
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

