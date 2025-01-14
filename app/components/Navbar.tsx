'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient border and backdrop */}
      <div className="absolute inset-0 bg-[#0E1015]/80 backdrop-blur-xl" />
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      
      {/* Navbar content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full transform group-hover:scale-110 transition-transform">
                <path
                  d="M50 10L90 30V70L50 90L10 70V30L50 10Z"
                  className="fill-blue-500 group-hover:fill-blue-400 transition-colors"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' }}
                />
                <path
                  d="M50 10L90 30L50 50L10 30L50 10Z"
                  className="fill-blue-600 group-hover:fill-blue-500 transition-colors"
                />
                <path
                  d="M90 30V70L50 90V50L90 30Z"
                  className="fill-blue-700 group-hover:fill-blue-600 transition-colors"
                />
                <path
                  d="M10 30V70L50 90V50L10 30Z"
                  className="fill-blue-800 group-hover:fill-blue-700 transition-colors"
                />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
              prysm
            </span>
          </Link>

          {/* Submit Button */}
          <Link
            href="/submit"
            className="group px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
          >
            <span className="flex items-center gap-2 text-sm text-white/70 group-hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
              Submit Resource
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
} 