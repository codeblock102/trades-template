'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeIn } from '@/lib/animations'
import { SOCIAL_PROOF_LOGOS } from '@/data/content'

export default function SocialProofSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="bg-brand-lightBg py-12">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <p className="font-syne text-sm uppercase tracking-widest text-neutral-400 mb-6">
              Approuvé par des milliers de clients partout aux États-Unis
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {SOCIAL_PROOF_LOGOS.map((logo, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-brand-border text-neutral-500 text-sm font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
