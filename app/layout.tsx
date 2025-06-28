import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'DHM Guide: #1 Science-Backed Hangover Prevention Resource',
  description: '🧬 The definitive DHM (Dihydromyricetin) guide with 15+ clinical studies, independent product reviews, and expert dosage recommendations.',
  metadataBase: new URL('https://dhmguide.com'),
  openGraph: {
    title: 'DHM Guide: #1 Science-Backed Hangover Prevention Resource',
    description: '🧬 The definitive DHM guide with 15+ clinical studies and reviews.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical LCP image with responsive sizes */}
        <link
          rel="preload"
          as="image"
          href="/images/before-after-dhm-1536w.webp"
          imageSrcSet="/images/before-after-dhm-640w.webp 640w,
                       /images/before-after-dhm-768w.webp 768w,
                       /images/before-after-dhm-1024w.webp 1024w,
                       /images/before-after-dhm-1536w.webp 1536w"
          imageSizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1536px"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
          {children}
        </main>
      </body>
    </html>
  )
}