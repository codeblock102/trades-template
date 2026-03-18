'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'amber'
  href?: string
  onClick?: () => void
  className?: string
  showArrow?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  showArrow = false,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-manrope font-semibold text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-brand-dark text-white hover:bg-neutral-800 shadow-md hover:shadow-lg',
    secondary: 'bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white',
    amber: 'bg-brand-amber text-brand-dark hover:bg-brand-amberDark shadow-amber hover:shadow-lg',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {showArrow && <ArrowRight size={15} />}
      {children}
      {showArrow && <ArrowRight size={15} />}
    </Component>
  )
}
