'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { FAQS } from '@/data/content'

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-brand-lightBg" id="faq">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <SectionLabel>(FAQ)</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="section-heading mb-4">
            Have questions? We have answers.
          </motion.h2>
        </motion.div>

        <motion.div variants={fadeUp} custom={2} className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS} />
        </motion.div>
      </div>
    </section>
  )
}
