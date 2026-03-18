'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import FeatureCard from '@/components/ui/FeatureCard'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { FEATURES } from '@/data/content'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>(WHY CHOOSE US)</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="section-heading mb-4">
            Plumbing service that earns your trust
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = (LucideIcons as any)[feature.icon]
            return (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={i}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
