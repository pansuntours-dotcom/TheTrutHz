'use client'

import { motion } from 'framer-motion'
import HolographicButton from '@/components/ui/HolographicButton'
import { 
  Zap, 
  Users, 
  Globe, 
  Shield, 
  Crown, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const features = [
    {
      icon: Zap,
      title: "Advanced AR Technology",
      description: "Cutting-edge augmented reality tools that push the boundaries of what's possible in content creation.",
      details: ["Real-time rendering", "Cross-platform compatibility", "AI-powered optimization"]
    },
    {
      icon: Users,
      title: "Creator-First Platform",
      description: "Built by creators, for creators. Every feature is designed to empower your creative freedom.",
      details: ["100% creator ownership", "Zero platform fees", "Direct fan monetization"]
    },
    {
      icon: Globe,
      title: "Decentralized Network",
      description: "Own your content and audience. No corporate gatekeepers, no algorithm manipulation.",
      details: ["Blockchain verification", "Content ownership", "Censorship resistance"]
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your data, your rules. Military-grade encryption protects your creative assets.",
      details: ["End-to-end encryption", "Zero data collection", "Anonymous transactions"]
    }
  ]

  const fcpTiers = [
    {
      name: "Founding Creator",
      price: "$99",
      originalPrice: "$199",
      features: [
        "Lifetime platform access",
        "0% platform fees forever",
        "Early feature access",
        "Direct creator support",
        "Exclusive community access",
        "Revenue sharing program",
        "Custom AR studio tools",
        "Priority technical support"
      ],
      highlight: true,
      spotsLeft: 147
    },
    {
      name: "Creator Pro",
      price: "$29",
      originalPrice: "$49",
      period: "/month",
      features: [
        "Advanced AR tools",
        "5% platform fees",
        "Analytics dashboard",
        "Community access",
        "Priority uploads",
        "Brand partnership tools"
      ],
      highlight: false
    },
    {
      name: "Creator",
      price: "Free",
      period: "",
      features: [
        "Basic AR tools",
        "10% platform fees",
        "Standard uploads",
        "Community access",
        "Basic analytics"
      ],
      highlight: false
    }
  ]

  const roadmap = [
    {
      quarter: "Q1 2024",
      title: "Platform Launch",
      status: "completed",
      features: ["Core AR studio", "Creator onboarding", "Basic monetization"]
    },
    {
      quarter: "Q2 2024",
      title: "Advanced Features",
      status: "in-progress",
      features: ["AI-powered tools", "Advanced analytics", "Mobile AR studio"]
    },
    {
      quarter: "Q3 2024",
      title: "Ecosystem Growth",
      status: "planned",
      features: ["Brand partnerships", "NFT integration", "Cross-platform sync"]
    },
    {
            title: "Global Scale",
      status: "planned",
      features: ["Multi-language support", "Global payments", "Enterprise tools"],
    },
  ];
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-secondary via-gray-900 to-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-20"
>
  <h1 className="text-5xl md:text-7xl font-bold mb-8 holographic-text">
    THE FUTURE OF
  </h1>
</motion.div>
            <br />
            CONTENT CREATION
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            The TrutHz is revolutionizing how creators build, share, and monetize content 
            through cutting-edge Augmented Reality technology and a creator-first philosophy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/join">
              <HolographicButton size="lg" className="text-xl px-12 py-6">
                <Sparkles className="w-6 h-6 mr-3" />
                Join the Revolution
              </HolographicButton>
            </Link>
            <Link href="/dashboard">
              <HolographicButton variant="secondary" size="lg" className="text-xl px-12 py-6">
                <Crown className="w-6 h-6 mr-3" />
                Creator Dashboard
              </HolographicButton>
            </Link>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-effect p-12 rounded-lg neon-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 holographic-text">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To democratize content creation through Augmented Reality, giving creators 
              complete ownership of their work, audience, and revenue streams while pushing 
              the boundaries of immersive storytelling.
            </p>
          </div>
        </motion.section>

        {/* Platform Features */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 holographic-text">
            Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-lg hover:ar-glow cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-accent">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FCP Membership Plans */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
          id="fcp"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Founding Creator Program
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of the founding generation. Shape the platform's future and 
              enjoy lifetime benefits as we grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fcpTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-effect p-8 rounded-lg relative ${
                  tier.highlight ? 'neon-border scale-105' : 'border border-white/10'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-secondary px-6 py-2 rounded-full text-sm font-bold">
                      LIMITED TIME
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-accent">{tier.name}</h3>
                  <div className="mb-4">
                    {tier.originalPrice && (
                      <span className="text-gray-400 line-through text-lg mr-2">
                        {tier.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-primary">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-gray-300">{tier.period}</span>
                    )}
                  </div>
                  
                  {tier.spotsLeft && (
                    <div className="text-sm text-primary font-semibold">
                      Only {tier.spotsLeft} spots remaining
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/join">
                  <HolographicButton 
                    variant={tier.highlight ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.highlight ? "Join Now" : "Get Started"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </HolographicButton>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Roadmap */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 holographic-text">
            Platform Roadmap
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-effect p-6 rounded-lg ${
                  phase.status === 'completed' ? 'border-green-400/50' :
                  phase.status === 'in-progress' ? 'border-primary/50' :
                  'border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-300">{phase.quarter}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    phase.status === 'completed' ? 'bg-green-400' :
                    phase.status === 'in-progress' ? 'bg-primary animate-pulse' :
                    'bg-gray-600'
                  }`}></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-accent">{phase.title}</h3>
                
                <div className="space-y-2">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        phase.status === 'completed' ? 'bg-green-400' :
                        phase.status === 'in-progress' ? 'bg-primary' :
                        'bg-gray-600'
                      }`}></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
