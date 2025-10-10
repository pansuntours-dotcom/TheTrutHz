'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HolographicButton from '@/components/ui/HolographicButton'
import { 
  TrendingUp, 
  Eye, 
  Users, 
  DollarSign, 
  Upload, 
  Play, 
  BarChart3,
  Crown,
  Zap,
  Calendar
} from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { icon: DollarSign, label: 'Total Revenue', value: '$12,547', change: '+23%' },
    { icon: Eye, label: 'Total Views', value: '234.5K', change: '+15%' },
    { icon: Users, label: 'Followers', value: '8,921', change: '+8%' },
    { icon: Play, label: 'AR Experiences', value: '47', change: '+12%' }
  ]

  const recentContent = [
    {
      id: 1,
      title: 'Holographic Product Demo',
      views: '12.3K',
      revenue: '$847',
      date: '2024-01-15',
      status: 'Live'
    },
    {
      id: 2,
      title: 'AR Fashion Showcase',
      views: '8.7K',
      revenue: '$623',
      date: '2024-01-12',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Virtual Gallery Tour',
      views: '15.2K',
      revenue: '$1,205',
      date: '2024-01-10',
      status: 'Live'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-secondary via-gray-900 to-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 holographic-text">
                Creator Dashboard
              </h1>
              <p className="text-xl text-gray-300">
                Welcome back! Here's your AR empire overview.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg">
                <Crown className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">FCP Member</span>
              </div>
              <HolographicButton>
                <Upload className="w-4 h-4 mr-2" />
                Create Content
              </HolographicButton>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-effect p-6 rounded-lg hover:ar-glow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
                <span className={`text-sm font-semibold ${
                  stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Dashboard Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect p-2 rounded-lg mb-8"
        >
          <div className="flex space-x-2">
            {['overview', 'content', 'analytics', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-secondary'
                    : 'text-gray-300 hover:text-accent hover:bg-white/5'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Recent Content */}
              <div className="lg:col-span-2">
                <div className="glass-effect p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-accent">Recent Content</h3>
                  <div className="space-y-4">
                    {recentContent.map((content) => (
                      <div key={content.id} className="flex items-center justify-between p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-semibold text-accent mb-1">{content.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-300">
                            <span className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{content.views}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{content.revenue}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{content.date}</span>
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-green-400/20 text-green-400 text-xs font-semibold rounded-full">
                            {content.status}
                          </span>
                          <button className="text-primary hover:text-accent transition-colors">
                            <Play className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="glass-effect p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-accent">Quick Actions</h3>
                  <div className="space-y-3">
                    <HolographicButton size="sm" className="w-full justify-start">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload AR Content
                    </HolographicButton>
                    <HolographicButton variant="secondary" size="sm" className="w-full justify-start">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
                    </HolographicButton>
                    <HolographicButton variant="outline" size="sm" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Manage Audience
                    </HolographicButton>
                  </div>
                </div>

                <div className="glass-effect p-6 rounded-lg neon-border">
                  <h3 className="text-xl font-bold mb-4 holographic-text">AR Studio</h3>
                  <p className="text-gray-300 mb-4">
                    Create immersive AR experiences with our advanced studio tools.
                  </p>
                  <HolographicButton size="sm" className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Launch Studio
                  </HolographicButton>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="glass-effect p-8 rounded-lg text-center">
              <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 holographic-text">Content Management</h3>
              <p className="text-gray-300 mb-6">
                Upload, edit, and manage your AR content library from here.
              </p>
              <HolographicButton size="lg">
                Get Started
              </HolographicButton>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="glass-effect p-8 rounded-lg text-center">
              <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 holographic-text">Analytics Dashboard</h3>
              <p className="text-gray-300 mb-6">
                Track your performance, audience insights, and revenue analytics.
              </p>
              <HolographicButton size="lg">
                View Analytics
              </HolographicButton>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="glass-effect p-8 rounded-lg text-center">
              <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 holographic-text">Account Settings</h3>
              <p className="text-gray-300 mb-6">
                Manage your profile, billing, notifications, and FCP membership.
              </p>
              <HolographicButton size="lg">
                Manage Settings
              </HolographicButton>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
