'use client'

import { useEffect, useRef } from 'react'
// import { AnalyzerEngine } from './tone/AnalyzerEngine' // optional, uncomment later

export default function ResonanceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  )
}
