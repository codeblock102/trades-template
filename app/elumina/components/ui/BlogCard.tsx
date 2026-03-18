'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type BlogCardProps = {
  title: string
  category: string
  date: string
  readTime: string
  image: string
  href: string
}

export default function BlogCard({ title, category, date, readTime, image, href }: BlogCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </div>
        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-xs font-semibold mb-3">
            {category}
          </span>
          <h3 className="font-syne text-lg font-bold text-brand-dark mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-manrope">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

