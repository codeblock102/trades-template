'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { SERVICES } from '@/data/content'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-16 md:py-24 bg-brand-lightBg" id="contact">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>(ENTRER EN CONTACT)</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="section-heading mb-8">
              Résolvons votre problème de plomberie aujourd’hui.
            </motion.h2>

            <motion.div variants={fadeUp} custom={2} className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Téléphone</h3>
                  <a href="tel:8663992885" className="text-neutral-600 hover:text-blue-600 transition-colors">
                    866-399-2885
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Courriel</h3>
                  <a href="mailto:contact@eluminaelectrique.ca" className="text-neutral-600 hover:text-blue-600 transition-colors">
                    contact@eluminaelectrique.ca
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Adresse</h3>
                  <p className="text-neutral-600">
                    70 Washington Square South<br />
                    New York, NY 10012
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={3} className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
            <a href="#" aria-label="Twitter" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
            <a href="#" aria-label="LinkedIn" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-brand-dark mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm text-brand-dark placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-brand-dark mb-2">
                      Nom de famille
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm text-brand-dark placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                      Adresse courriel
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm text-brand-dark placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-2">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm text-brand-dark placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-brand-dark mb-2">
                    Choisir un service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all"
                  >
                    <option value="">Choisir un service</option>
                    {SERVICES.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border bg-white font-manrope text-sm text-brand-dark placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600/40 focus:border-blue-600 transition-all resize-none"
                    placeholder="Dites-nous de quoi vous avez besoin en plomberie..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Envoyer le message →
                </button>
                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                    Merci ! Votre message a bien été envoyé.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

