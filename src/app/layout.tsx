import type { Metadata } from 'next'
import './globals.css'
import { monda, monoton, ps2p } from './fonte'

export const metadata: Metadata = {
  title: 'PET-SIMC - Website',
  description: "PETSIMC's Website to get to know projects, members, about and more..."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${monda.variable}${ps2p.variable}${monoton.variable}`}>
        {children}
      </body>
    </html>
  )
}