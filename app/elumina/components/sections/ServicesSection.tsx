'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '../ui/ServiceCard'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { SERVICES } from '@/data/content'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>(CE QUE NOUS FAISONS)</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="section-heading mb-4">
            Tous vos besoins en plomberie, couverts
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

