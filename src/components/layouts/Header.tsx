'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import HolographicButton from '@/components/ui/HolographicButton'
import { Menu, X, Sparkles, Shield, Globe, Users } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Sparkles },
    { name: 'Join', href: '/join', icon: Users },
    { name: 'Dashboard', href: '/dashboard', icon: Shield }
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass-effect border-b border-primary/20"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-border"
            >
              <span className="text-secondary font-bold text-xl">T</span>
            </motion.div>
            <span className="holographic-text text-2xl font-bold hidden sm:block">
              The TrutHz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:animate-pulse" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/join">
              <HolographicButton variant="secondary" size="sm">
                Join Revolution
              </HolographicButton>
            </Link>
            <Link href="/dashboard">
              <HolographicButton size="sm">
                Creator Dashboard
              </HolographicButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-primary/20"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-primary/20">
                <Link href="/join" onClick={() => setIsMenuOpen(false)}>
                  <HolographicButton variant="secondary" size="sm" className="w-full">
                    Join Revolution
                  </HolographicButton>
                </Link>
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <HolographicButton size="sm" className="w-full">
                    Creator Dashboard
                  </HolographicButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
