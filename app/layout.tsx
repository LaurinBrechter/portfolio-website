import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import CalendlyScheduling from './components/CalendlyScheduling'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VertexAnalytics',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id='root' className="flex flex-col min-h-[100dvh]">
          <Nav />
          <main className="flex-1">{children}</main>
          <CalendlyScheduling />
        </div>
      </body>
    </html>
  )
}
