'use client'

import { motion } from 'framer-motion'
import HolographicButton from '@/components/ui/HolographicButton'
import { Zap, Users, TrendingUp, Shield, Sparkles, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-gray-900 to-secondary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <span className="text-lg text-primary font-medium tracking-wider uppercase">
                The Future of Content Creation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 holographic-text leading-tight"
            >
              REVOLUTIONIZING
              <br />
              <span className="text-primary">CREATOR</span>
              <br />
              FREEDOM
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Experience the future of content creation with cutting-edge Augmented Reality technology. 
              Join The TrutHz and unlock limitless creative possibilities in a decentralized creator economy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/join">
                <HolographicButton size="lg" className="text-xl px-12 py-6 min-w-[280px]">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Join the Revolution
                </HolographicButton>
              </Link>
              <Link href="/about">
                <HolographicButton variant="secondary" size="lg" className="text-xl px-12 py-6 min-w-[280px]">
                  <Globe className="w-6 h-6 mr-3" />
                  Learn More
                </HolographicButton>
              </Link>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "10,000+", label: "Creators Empowered", icon: Users },
              { number: "$2.5M+", label: "Creator Earnings", icon: TrendingUp },
              { number: "50+", label: "AR Experiences", icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-effect p-6 rounded-lg hover:ar-glow cursor-pointer">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating AR Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              rotateY: 360,
              y: [0, -20, 0]
            }}
            transition={{ 
              rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-lg glass-effect"
          />
          <motion.div
            animate={{ 
              rotateX: 360,
              y: [0, 20, 0]
            }}
            transition={{ 
              rotateX: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-40 right-20 w-24 h-24 border-2 border-primary/30 rounded-full glass-effect"
          />
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-10 w-16 h-16 border-2 border-primary/20 rotate-45 glass-effect"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6 bg-black/20 cyber-grid">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 holographic-text">
              THE FUTURE IS HERE
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary AR technology meets creator freedom in an unprecedented platform
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "AR Technology",
                description: "Cutting-edge augmented reality tools for immersive content creation experiences"
              },
              {
                icon: Users,
                title: "Creator Freedom",
                description: "Unlimited creative possibilities with our decentralized creator economy platform"
              },
              {
                icon: TrendingUp,
                title: "Revenue Growth",
                description: "Maximize earnings with innovative monetization and direct creator-fan relationships"
              },
              {
                icon: Shield,
                title: "FCP Membership",
                description: "Exclusive benefits for Founding Creator Program members with lifetime privileges"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-lg hover:ar-glow cursor-pointer group"
              >
                <feature.icon className="w-12 h-12 text-primary mb-6 mx-auto group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-center mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-12 rounded-lg neon-border"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of creators who are already building the next generation 
              of immersive content experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <HolographicButton size="lg" className="text-lg px-10 py-4">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Creator
                </HolographicButton>
              </Link>
              <Link href="/dashboard">
                <HolographicButton variant="secondary" size="lg" className="text-lg px-10 py-4">
                  <Shield className="w-5 h-5 mr-2" />
                  Launch Dashboard
                </HolographicButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
