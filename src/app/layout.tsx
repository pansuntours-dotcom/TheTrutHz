import type { Metadata } from 'next'
import { Orbitron, Poppins } from 'next/font/google'
import './globals.css'
import AREffect from '@/components/ui/AREffect'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'The TrutHz - Revolutionizing Creator Freedom in Augmented Reality',
  description: 'Join the AR revolution. Empower creators with cutting-edge augmented reality technology and unlock limitless creative possibilities.',
  keywords: 'AR, augmented reality, creator platform, The TrutHz, holographic, futuristic, content creation',
  openGraph: {
    title: 'The TrutHz - AR Creator Platform',
    description: 'Revolutionizing Creator Freedom in Augmented Reality',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${poppins.variable} font-futuristic antialiased`}>
        <AREffect />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
