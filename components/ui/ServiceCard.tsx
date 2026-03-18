'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type ServiceCardProps = {
  title: string
  description: string
  image: string
  href: string
}

export default function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full bg-brand-amber/10 text-brand-amber text-xs font-semibold mb-3">
          Service
        </span>
        <h3 className="font-syne text-xl font-bold text-brand-dark mb-2">{title}</h3>
        <p className="font-manrope text-sm text-neutral-500 mb-4 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="text-brand-amber font-semibold text-sm hover:underline inline-flex items-center gap-1"
        >
          En savoir plus <span>→</span>
        </Link>
      </div>
    </motion.div>
  )
}
