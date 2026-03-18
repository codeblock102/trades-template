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
  title: 'BRIA Electrique Inc - Services de plomberie professionnels',
  description:
    'Une plomberie sans stress, faite comme il faut. Des professionnels agréés disponibles 24 h/24 et 7 j/7 pour tous vos besoins en plomberie.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-CA" className={`${syne.variable} ${manrope.variable}`}>
      <body className="font-manrope bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  )
}
