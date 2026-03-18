'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type StatItemProps = {
  value: number
  suffix: string
  label: string
}

export default function StatItem({ value, suffix, label }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none">
        {count.toLocaleString()}
        <span className="text-brand-amber">{suffix}</span>
      </div>
      <div className="font-manrope text-sm text-neutral-400 uppercase tracking-widest mt-2">{label}</div>
    </div>
  )
}
