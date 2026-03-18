'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 md:py-24 bg-brand-lightBg" id="about">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=750&fit=crop"
                alt="Équipe de plomberie professionnelle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Square */}
            <div className="absolute -z-10 w-64 h-64 bg-blue-600/20 rounded-2xl rotate-6 -bottom-8 -left-8" />
            {/* Rating Badge */}
            <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-card flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-semibold text-sm text-brand-dark">4.9/5</p>
                <p className="text-xs text-neutral-500">Note moyenne</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>(QUI SOMMES-NOUS)</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="section-heading mb-6">
              Des pros agréés. Des prix honnêtes. Zéro surprise.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="section-subtext mb-8">
              Avec plus de 15 ans d’expérience, nous avons bâti une réputation d’excellence en services de
              plomberie. Notre équipe de professionnels agréés s’engage à offrir un travail de qualité supérieure
              et un service à la clientèle exceptionnel.
            </motion.p>

            <motion.ul variants={fadeUp} custom={3} className="space-y-4 mb-8">
              {[
                'Techniciens dont les antécédents ont été vérifiés',
                'Entièrement agréés dans les 50 États',
                'Devis détaillés — sans frais cachés',
                'Garantie de travail de 12 mois',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-manrope text-base text-neutral-600">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} custom={4}>
              <Button href="#contact" variant="primary" showArrow>
                Rencontrez notre équipe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

