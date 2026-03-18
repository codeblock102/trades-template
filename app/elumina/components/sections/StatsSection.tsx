'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import StatItem from '../ui/StatItem'
import { STATS } from '@/data/content'

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-3"
        >
          {STATS.map((stat, i) => (
            <StatItem key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

