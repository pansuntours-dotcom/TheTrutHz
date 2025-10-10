'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HolographicButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export default function HolographicButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: HolographicButtonProps) {
  const baseClasses = 'font-futuristic font-semibold transition-all duration-300 cursor-pointer border-2 rounded-lg inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-primary text-secondary border-primary hover:bg-transparent hover:text-primary ar-glow disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-secondary ar-glow disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'bg-transparent text-accent border-accent hover:bg-accent hover:text-secondary disabled:opacity-50 disabled:cursor-not-allowed'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
