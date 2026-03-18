'use client'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { fadeUp } from '@/lib/animations'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
  index?: number
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const Icon = (LucideIcons as any)[icon] as React.ComponentType<{ className?: string }>

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
      whileHover={{ y: -6 }}
    >
      <div className="rounded-xl p-3 bg-blue-600/10 w-fit mb-4">
        {Icon && <Icon className="w-6 h-6 text-blue-600" />}
      </div>
      <h3 className="font-syne text-lg font-bold text-brand-dark mb-2">{title}</h3>
      <p className="font-manrope text-sm text-neutral-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}

