'use client'
import Link from 'next/link'
import { Wrench, ArrowUp, Facebook, Twitter, Linkedin } from 'lucide-react'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-brand-amber" />
              <span className="font-syne text-xl font-extrabold">
                AMK <span className="text-brand-amber">Electrique</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm mb-4 max-w-xs leading-relaxed">
              Professional plumbing services you can trust. Licensed, insured, and ready to help 24/7.
            </p>
            <div className="space-y-2 text-sm">
              <p>866-399-2885</p>
                <p>help@amkelectrique.service</p>
            </div>
            <div className="mt-4">
              <Button href="#contact" variant="amber" className="text-sm">
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-syne text-xs uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Address Column */}
          <div>
            <h4 className="font-syne text-xs uppercase tracking-widest mb-4">Social</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" aria-label="Facebook" className="text-neutral-400 hover:text-brand-amber transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-neutral-400 hover:text-brand-amber transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-neutral-400 hover:text-brand-amber transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <h4 className="font-syne text-xs uppercase tracking-widest mb-4 mt-6">Address</h4>
            <p className="text-neutral-400 text-sm">
              70 Washington Square South<br />
              New York, NY 10012
            </p>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-syne text-xs uppercase tracking-widest mb-4">Stay Updated</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Handle newsletter subscription
              }}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-amber/40 focus:border-brand-amber transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-brand-amber text-brand-dark font-semibold py-3 rounded-xl hover:bg-brand-amberDark transition-colors"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            Designed with care by AMK Electrique © 2025
          </p>
          <button
            onClick={scrollToTop}
            className="text-brand-amber hover:text-brand-amberDark transition-colors text-sm font-semibold flex items-center gap-1"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
