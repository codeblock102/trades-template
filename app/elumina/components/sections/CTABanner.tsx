'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Button from '@/components/ui/Button'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Orb */}
      <div className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl -top-48 -right-48" />

      <div className="container-main relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="font-syne text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Prêt pour une électricité sans stress ?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="font-manrope text-lg text-neutral-400 mb-8 max-w-2xl mx-auto"
          >
            Rejoignez 12 000+ clients qui font confiance à Elumina Electrique pour chaque intervention.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4 justify-center">
            <Button
              href="#contact"
              variant="amber"
              showArrow
              className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white shadow-lg hover:shadow-lg"
            >
              Obtenir un devis gratuit
            </Button>
            <Button
              href="tel:8663992885"
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-brand-dark"
            >
              Appelez maintenant : 866-399-2885
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

