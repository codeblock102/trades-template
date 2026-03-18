'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-brand-border rounded-2xl overflow-hidden bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <span className="font-syne font-semibold text-base text-brand-dark whitespace-normal break-words">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-brand-amber flex-shrink-0 ml-4"
            >
              <Plus size={20} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 font-manrope text-sm text-neutral-500 leading-relaxed whitespace-normal break-words border-t border-brand-border pt-4">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
