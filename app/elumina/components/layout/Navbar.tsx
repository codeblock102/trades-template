'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Wrench } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-3' : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Wrench className="w-5 h-5 text-blue-600" />
          <span className="font-syne text-2xl font-extrabold text-brand-dark">
            Elumina <span className="text-blue-600">Electrique</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-manrope text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button href="#contact" variant="primary" showArrow>
            Obtenir un devis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                    <Wrench className="w-5 h-5 text-blue-600" />
                    <span className="font-syne text-xl font-extrabold text-brand-dark">
                      Elumina <span className="text-blue-600">Electrique</span>
                    </span>
                  </Link>
                  <button onClick={() => setMobileOpen(false)} aria-label="Fermer le menu">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-manrope text-base font-medium text-neutral-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button href="#contact" variant="primary" showArrow onClick={() => setMobileOpen(false)}>
                    Obtenir un devis
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

