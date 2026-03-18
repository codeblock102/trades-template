'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Headphones, Clock, Check } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '@/data/content'

export default function HeroSection() {
  const [serviceType, setServiceType] = useState<'residential' | 'commercial'>('residential')
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    phone: '',
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const services = serviceType === 'residential' ? RESIDENTIAL_SERVICES : COMMERCIAL_SERVICES

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center bg-white" id="home">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>(TRUSTED PLUMBING SERVICE)</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-[1.05] tracking-tight mb-6"
            >
              Stress-free plumbing, done right.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-manrope text-lg text-neutral-500 max-w-[480px] mb-8 leading-relaxed"
            >
              From leaks to full installs, Plumbee™ shows up on time and leaves your place spotless. Serving
              homeowners and businesses across the USA.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 mb-8">
              <Button href="#contact" variant="amber" showArrow>
                Get a Free Quote
              </Button>
              <Button href="#services" variant="secondary">
                See Our Services
              </Button>
            </motion.div>

            {/* Emergency Strip */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap items-center gap-8 mt-8"
            >
              <div className="flex items-center gap-3">
                <Headphones className="w-5 h-5 text-brand-amber" />
                <div>
                  <p className="text-xs text-neutral-400">Emergency Call</p>
                  <p className="font-semibold text-lg text-brand-dark">866-399-2885</p>
                </div>
              </div>
              <div className="w-px h-10 bg-brand-border hidden sm:block" />
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-amber" />
                <div>
                  <p className="text-xs text-neutral-400">Working Hours</p>
                  <p className="font-semibold text-lg text-brand-dark">9am – 8pm Daily</p>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div variants={fadeUp} custom={5} className="mt-12 bg-brand-lightBg rounded-2xl p-6">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setServiceType('residential')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    serviceType === 'residential'
                      ? 'bg-brand-dark text-white'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Residential
                </button>
                <button
                  onClick={() => setServiceType('commercial')}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    serviceType === 'commercial'
                      ? 'bg-brand-dark text-white'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  Commercial
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/40 focus:border-brand-amber"
                  required
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/40 focus:border-brand-amber"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm focus:outline-none focus:ring-2 focus:ring-brand-amber/40 focus:border-brand-amber"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-amber text-brand-dark font-semibold py-3 rounded-xl hover:bg-brand-amberDark transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=750&fit=crop"
                alt="Professional plumber"
                fill
                className="object-cover animate-float"
                priority
                sizes="(max-width: 1024px) 0vw, 45vw"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-card flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-amber/10 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-brand-amber" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-brand-dark">12,000+</p>
                  <p className="text-xs text-neutral-500">Jobs Completed</p>
                </div>
              </div>
            </div>
            {/* Decorative Blob */}
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-brand-amber/15 blur-3xl -right-20 -top-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
