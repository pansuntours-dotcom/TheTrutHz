'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HolographicButton from '@/components/ui/HolographicButton'
import { Crown, Zap, Users, TrendingUp, Shield, Mail, User, Lock } from 'lucide-react'

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    fcpMember: false,
    agreeTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Welcome to The TrutHz! Check your email to verify your account.')
    setIsSubmitting(false)
  }

  const fcpBenefits = [
    {
      icon: Crown,
      title: "Exclusive Access",
      description: "First access to new AR features and beta releases"
    },
    {
      icon: TrendingUp,
      title: "Revenue Boost",
      description: "Enhanced monetization tools and premium revenue splits"
    },
    {
      icon: Shield,
      title: "Lifetime Status",
      description: "Permanent founding member recognition and benefits"
    },
    {
      icon: Users,
      title: "VIP Community",
      description: "Private Discord channels and direct creator networking"
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-secondary via-gray-900 to-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text">
            JOIN THE
            <br />
            REVOLUTION
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Become part of the next generation of creators. Shape the future of AR content 
            and unlock unlimited creative possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Sign Up Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect p-8 rounded-lg neon-border">
              <h2 className="text-3xl font-bold mb-8 text-center holographic-text">
                Create Your Account
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-accent placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* FCP Membership */}
                <div className="glass-effect p-6 rounded-lg border border-primary/30">
                  <div className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      id="fcpMember"
                      className="mt-1"
                      checked={formData.fcpMember}
                      onChange={(e) => setFormData({...formData, fcpMember: e.target.checked})}
                    />
                    <div className="flex-1">
                      <label htmlFor="fcpMember" className="flex items-center space-x-2 text-lg font-semibold text-primary cursor-pointer">
                        <Crown className="w-5 h-5" />
                        <span>Join Founding Creator Program</span>
                      </label>
                      <p className="text-gray-300 mt-1">
                        Get exclusive benefits, early access, and lifetime perks. Limited spots available.
                      </p>
                      <p className="text-primary font-semibold mt-2">
                        One-time fee: $99 (Regular price: $199)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    required
                    className="mt-1"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-300">
                    I agree to the{' '}
                    <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <HolographicButton
                  size="lg"
                  className="w-full text-xl py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    <>
                      <Zap className="w-6 h-6 mr-2" />
                      {formData.fcpMember ? 'Join as Founding Creator' : 'Create Account'}
                    </>
                  )}
                </HolographicButton>
              </form>
            </div>
          </motion.div>

          {/* FCP Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect p-8 rounded-lg border border-primary/30">
              <h3 className="text-3xl font-bold mb-8 holographic-text text-center">
                Founding Creator Program
              </h3>
              
              <div className="space-y-6 mb-8">
                {fcpBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start space-x-4 p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors"
                  >
                    <benefit.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-accent mb-2">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">147</div>
                <p className="text-gray-300">Founding spots remaining</p>
                <div className="w-full bg-black/50 rounded-full h-2 mt-4">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '73.5%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
