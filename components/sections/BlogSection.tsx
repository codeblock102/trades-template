'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import BlogCard from '@/components/ui/BlogCard'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { BLOGS } from '@/data/content'

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 md:py-24 bg-white" id="blog">
      <div className="container-main">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={0} className="section-heading mb-4 md:mb-0">
            Les dernières actualités de notre blogue
          </motion.h2>
          <motion.div variants={fadeUp} custom={1}>
            <Link
              href="#blog"
              className="text-brand-amber font-semibold hover:underline inline-flex items-center gap-1"
            >
              Voir tous les articles <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((blog, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <BlogCard
                title={blog.title}
                category={blog.category}
                date={blog.date}
                readTime={blog.readTime}
                image={blog.image}
                href={blog.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
