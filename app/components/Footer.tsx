'use client'

import Link from 'next/link'

const footerLinks = {
  Product: [
    { name: 'Browse Collection', href: '#categories' },
    { name: 'Submit Resource', href: '/submit' },
    { name: 'Categories', href: '#categories' },
    { name: 'Search', href: '#search' },
  ],
  Resources: [
    { name: 'Brand Guidelines', href: '#brand-guidelines' },
    { name: 'Design Systems', href: '#style-systems' },
    { name: 'Typography', href: '#typography' },
    { name: 'Color Palettes', href: '#color-palettes' },
    { name: 'Logo Design', href: '#logo-design' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms' },
  ],
}

export default function Footer() {
  const shareOnTwitter = () => {
    const text = encodeURIComponent("I found this new resource called Prysm, here's for you to try")
    const url = encodeURIComponent("https://prysm.design") // Replace with your actual URL
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
  }

  return (
    <footer className="bg-[#0E1015] text-white py-24 relative overflow-hidden">
      {/* Background text effect */}
      <div className="absolute inset-0 opacity-5 select-none pointer-events-none">
        <div className="text-[400px] font-bold text-white/10 absolute -bottom-20 -left-20">
          prysm
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top section with description and share button */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="text-xl font-light mb-6 max-w-lg">
              Prysm is the most complete design resource directory, trusted by thousands of designers and creative teams worldwide.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <button
              onClick={shareOnTwitter}
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl px-6 py-3 text-white transition-all group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Share on X
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mb-20">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-6">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with logo and social links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            {/* 3D Prism SVG Logo */}
            <div className="w-12 h-12 relative group">
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
            <span className="text-2xl font-bold tracking-tight">prysm</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://twitter.com" className="text-white/60 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="https://github.com" className="text-white/60 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Prysm. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 