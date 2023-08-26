import './globals.css'
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
const dosis = Dosis({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: 'German Dojcinovic',
  description: `German Dojcinovic's portfolio website`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={dosis.style} className='min-h-screen w-full bg-dark text-paleGold'>
        {children}
      </body>
    </html>
  )
}
