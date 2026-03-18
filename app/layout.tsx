import type { Metadata } from 'next'
import { Syne, Manrope } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Plumbee - Professional Plumbing Services',
  description: 'Stress-free plumbing, done right. Licensed professionals available 24/7 for all your plumbing needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="font-manrope bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  )
}
