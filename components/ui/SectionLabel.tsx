export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-border bg-brand-lightBg font-manrope text-xs font-semibold uppercase tracking-[0.1em] text-brand-gray mb-4">
      {children}
    </span>
  )
}
