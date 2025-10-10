'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import HolographicButton from '@/components/ui/HolographicButton'
import { 
  Key, 
  Users, 
  Settings, 
  BarChart3, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
  Copy,
  RefreshCw
} from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('api-keys')
  const [showKeys, setShowKeys] = useState(false)
  const [apiKeys, setApiKeys] = useState([
    {
      id: '1',
      name: 'Production API Key',
      key: 'truthz_prod_ak47bg92hf84jd92kf84jd92',
      usage: '2,847',
      lastUsed: '2024-01-15',
      status: 'active'
    },
    {
      id: '2', 
      name: 'Development API Key',
      key: 'truthz_dev_dk84jf92hf84jd92kf84jd93',
      usage: '156',
      lastUsed: '2024-01-14',
      status: 'active'
    },
    {
      id: '3',
      name: 'Test API Key',
      key: 'truthz_test_tk92kf84jd92hf84jd92kf84',
      usage: '45',
      lastUsed: '2024-01-12',
      status: 'inactive'
    }
  ])

  const systemStats = [
    { label: 'Total Users', value: '10,247', change: '+12%', icon: Users },
    { label: 'API Calls Today', value: '2.4M', change: '+8%', icon: BarChart3 },
    { label: 'System Uptime', value: '99.9%', change: '+0.1%', icon: CheckCircle },
    { label: 'Active Sessions', value: '1,847', change: '+15%', icon: Eye }
  ]

  const generateApiKey = () => {
    const newKey = {
      id: Date.now().toString(),
      name: `API Key ${apiKeys.length + 1}`,
      key: `truthz_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      usage: '0',
      lastUsed: 'Never',
      status: 'active'
    }
    setApiKeys([...apiKeys, newKey])
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('API key copied to clipboard!')
  }

  const deleteApiKey = (id: string) => {
    if (confirm('Are you sure you want to delete this API key?')) {
      setApiKeys(apiKeys.filter(key => key.id !== id))
    }
  }

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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 holographic-text">
                Admin Panel
              </h1>
              <p className="text-xl text-gray-300">
                Manage your TrutHz platform configuration and API access.
              </p>
            </div>
            <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Admin Access</span>
            </div>
          </div>

          {/* System Status Alert */}
          <div className="glass-effect p-4 rounded-lg border border-green-400/30 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <div className="font-semibold text-green-400">System Status: Operational</div>
                <div className="text-sm text-gray-300">All services running normally. Last updated: 2 minutes ago</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* System Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {systemStats.map((stat, index) => (
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

        {/* Admin Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect p-2 rounded-lg mb-8"
        >
          <div className="flex space-x-2">
            {[
              { id: 'api-keys', label: 'API Keys', icon: Key },
              { id: 'users', label: 'User Management', icon: Users },
              { id: 'settings', label: 'System Settings', icon: Settings },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-secondary'
                    : 'text-gray-300 hover:text-accent hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
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
          {activeTab === 'api-keys' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-accent">API Key Management</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowKeys(!showKeys)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors"
                  >
                    {showKeys ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{showKeys ? 'Hide' : 'Show'} Keys</span>
                  </button>
                  <HolographicButton onClick={generateApiKey}>
                    <Key className="w-4 h-4 mr-2" />
                    Generate New Key
                  </HolographicButton>
                </div>
              </div>

              <div className="glass-effect rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="space-y-4">
                    {apiKeys.map((apiKey) => (
                      <div key={apiKey.id} className="flex items-center justify-between p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-accent">{apiKey.name}</h3>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              apiKey.status === 'active' 
                                ? 'bg-green-400/20 text-green-400' 
                                : 'bg-gray-400/20 text-gray-400'
                            }`}>
                              {apiKey.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-300">
                            <code className="bg-black/50 px-3 py-1 rounded font-mono">
                              {showKeys ? apiKey.key : apiKey.key.slice(0, 20) + '...'}
                            </code>
                            <span>Usage: {apiKey.usage}</span>
                            <span>Last used: {apiKey.lastUsed}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => copyToClipboard(apiKey.key)}
                            className="p-2 text-gray-400 hover:text-primary transition-colors"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteApiKey(apiKey.id)}
                            className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <AlertTriangle className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-primary/30">
                <h3 className="text-lg font-semibold mb-4 text-accent">API Configuration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Rate Limit (requests/minute)
                    </label>
                    <input
                      type="number"
                      defaultValue="1000"
                      className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-accent focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Default Key Expiration (days)
                    </label>
                    <input
                      type="number"
                      defaultValue="365"
                      className="w-full px-4 py-3 bg-black/50 border border-primary/30 rounded-lg text-accent focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <HolographicButton variant="secondary">
                    <Settings className="w-4 h-4 mr-2" />
                    Save Configuration
                  </HolographicButton>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="glass-effect p-8 rounded-lg text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 holographic-text">User Management</h3>
              <p className="text-gray-300 mb-6">
                Manage user accounts, permissions, and FCP memberships.
              </p>
              <HolographicButton size="lg">
                Access User Management
              </HolographicButton>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="glass-effect p-8 rounded-lg text-center">
              <Settings className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 holographic-text">System Settings</h3>
              <p className="text-gray-300 mb-6">
                Configure platform settings, security policies, and integrations.
              </p>
              <HolographicButton size="lg">
                Configure System
              </HolographicButton>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="glass-effect p-8 rounded-lg text-center">
              <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 holographic-text">Platform Analytics</h3>
              <p className="text-gray-300 mb-6">
                View detailed analytics, usage patterns, and performance metrics.
              </p>
              <HolographicButton size="lg">
                View Analytics
              </HolographicButton>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
