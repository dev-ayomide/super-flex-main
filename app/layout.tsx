import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Grow Vault',
  description: 'Created with superflex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
