'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Mail, Twitter, Github, Globe } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Platform: [
      { name: 'About', href: '/about' },
      { name: 'Join', href: '/join' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Admin', href: '/admin' }
    ],
    Legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'FCP Membership', href: '/about#fcp' },
      { name: 'Creator Rights', href: '/creator-rights' }
    ],
    Connect: [
      { name: 'Twitter', href: 'https://twitter.com/thetruthz', icon: Twitter },
      { name: 'GitHub', href: 'https://github.com/thetruthz', icon: Github },
      { name: 'Contact', href: 'mailto:hello@thetruthz.live', icon: Mail },
      { name: 'Website', href: 'https://thetruthz.live', icon: Globe }
    ]
  }

  return (
    <footer className="relative bg-black/40 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-border">
                <span className="text-secondary font-bold text-lg">T</span>
              </div>
              <span className="holographic-text text-xl font-bold">The TrutHz</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed mb-6"
            >
              Revolutionizing Creator Freedom in Augmented Reality. 
              Join the future of content creation today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-primary"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by AR Innovation</span>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
            >
              <h3 className="font-semibold text-accent mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors duration-300 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover:animate-pulse" />}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-effect p-8 rounded-lg mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 holographic-text">Stay Connected</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on AR innovations, creator features, and exclusive FCP member benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-6 py-3 bg-primary text-secondary rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 The TrutHz. Revolutionizing Creator Freedom in Augmented Reality.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Platform Online</span>
              </span>
              <span>Version 1.0.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
