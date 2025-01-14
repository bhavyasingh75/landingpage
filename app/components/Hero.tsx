'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative position (0 to 1)
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0E1015] flex items-center justify-center overflow-hidden">
      {/* Enhanced interactive background gradient effects */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * 40}px, ${(mousePosition.y - 0.5) * 40}px)`
        }}
      >
        <div 
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 80}px, ${mousePosition.y * 80}px) rotate(${mousePosition.x * 45}deg)`
          }}
        />
        <div 
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 80}px, ${-mousePosition.y * 80}px) rotate(${-mousePosition.y * 45}deg)`
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-blue-400/20 rounded-full blur-[120px] mix-blend-screen"
          style={{
            transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px) translate(-50%, -50%) scale(${1 + (mousePosition.x + mousePosition.y) * 0.2})`
          }}
        />
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 
          className="text-5xl md:text-7xl font-serif font-extrabold mb-8 text-white transition-all duration-500"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px) scale(${1 + Math.abs(mousePosition.x - 0.5) * 0.05})`,
            textShadow: `0 0 30px rgba(59, 130, 246, ${Math.abs(mousePosition.x - 0.5) * 0.3})`
          }}
        >
          A refracted view of
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            colorful brand inspiration
          </span>
        </h1>
        
        <p 
          className="text-xl text-white/70 mb-12 max-w-2xl mx-auto transition-all duration-500"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * -10}px, ${(mousePosition.y - 0.5) * -10}px)`,
            opacity: 0.7 + Math.abs(mousePosition.x - 0.5) * 0.6
          }}
        >
          Explore resources for brand guidelines, typography, logos, and more.
          <br />
          Curated for designers, by designers.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * -5}px, ${(mousePosition.y - 0.5) * -5}px)`,
            scale: `${1 + Math.abs(mousePosition.y - 0.5) * 0.05}`
          }}
        >
          <Link
            href="#categories"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600/90 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl transition-all group hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            Start Browsing
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/submit"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl transition-all group hover:border-white/20 hover:scale-105"
          >
            Submit Resource
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Link>
        </div>

        {/* Quick Stats with enhanced animations */}
        <div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px) rotate(${(mousePosition.x - 0.5) * -2}deg)`
          }}
        >
          {[
            { label: 'Resources', value: '100+' },
            { label: 'Categories', value: '7' },
            { label: 'Designers', value: '1000+' },
            { label: 'Daily Views', value: '5K+' }
          ].map((stat) => (
            <div key={stat.label} className="text-center transform transition-transform hover:scale-110">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 