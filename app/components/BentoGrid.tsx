'use client'

import Link from 'next/link'
import { useState } from 'react'

const resources = {
  'brand-guidelines': [
    {
      title: 'Branding Style Guidelines',
      description: 'The most comprehensive collection of brand style guides',
      link: 'https://brandingstyleguides.com',
      image: '/images/one.png'
    },
    {
      title: 'Brand Guidelines.net',
      description: 'Curated collection of beautiful brand guidelines',
      link: 'https://brandguidelines.net',
      image: '/images/two.png'
    },
    {
      title: 'Deck Gallery',
      description: 'Curated collection of beautifully designed decks, slides, and brand guidelines',
      link: 'https://www.deck.gallery/',
      image: '/images/three.png'
    }
  ],
  'style-systems': [
    {
      title: 'Design Systems Repo',
      description: 'Gallery of design systems and pattern libraries',
      link: 'https://designsystems.com',
      image: '/images/four.png'
    },
    {
      title: 'Material Design',
      description: "Google's open-source design system",
      link: 'https://material.io',
      image: '/images/threeseven.jpg'
    },
    {
      title: 'Apple Human Interface',
      description: "Apple's design principles and guidelines",
      link: 'https://developer.apple.com/design',
      image: '/images/threesix.jpg'
    },
    {
      title: 'Atlassian Design System',
      description: 'Complete design system for enterprise products',
      link: 'https://atlassian.design',
      image: '/images/threefive.jpg'
    }
  ],
  'typography': [
    {
      title: 'Typefaces Today',
      description: 'Handpicked typefaces for creative projects',
      link: 'https://typefaces.today',
      image: '/images/five.png'
    },
    {
      title: 'Google Fonts',
      description: 'Free licensed font families',
      link: 'https://fonts.google.com',
      image: '/images/threefour.jpg'
    },
    {
      title: 'Freefaces Gallery',
      description: 'Curated collection of typefaces',
      link: 'https://www.freefaces.gallery/',
      image: '/images/threeeight.jpg'
    },
    {
      title: 'Typewolf',
      description: 'Typography inspiration and resources',
      link: 'https://typewolf.com',
      image: '/images/six.png'
    },
    {
      title: 'Fontjoy',
      description: 'Font pairing generator',
      link: 'https://fontjoy.com',
      image: '/images/seven.png'
    }
  ],
  'color-palettes': [
    {
      title: 'Coolors',
      description: 'Color schemes generator',
      link: 'https://coolors.co',
      image: '/images/threethree.jpg'
    },
    {
      title: 'Adobe Color',
      description: 'Color wheel and palette generator',
      link: 'https://color.adobe.com',
      image: '/images/threetwo.png'
    },
    {
      title: 'Brand Colors',
      description: 'Collection of brand color codes',
      link: 'https://brandcolors.net',
      image: '/images/threeone.png'
    },
  ],
  'logo-design': [
    {
      title: 'Logggos Club',
      description: 'Curated collection of minimal logos and marks',
      link: 'https://www.logggos.club/',
      image: '/images/eight.png'
    },
    {
      title: 'Wrdmrks',
      description: 'Wordmark inspiration and showcase platform',
      link: 'https://wrdmrks.com/',
      image: '/images/nine.png'
    },
    {
      title: 'Logo Nature',
      description: 'Nature-inspired logo design showcase',
      link: 'https://logonature.com/',
      image: '/images/ten.png'
    },
    {
      title: 'Logobook',
      description: 'Archive of finest logos, symbols & trademarks',
      link: 'http://logobook.com/',
      image: '/images/eleven.png'
    },
    {
      title: 'Logo Design Love',
      description: 'Logo design inspiration and resources',
      link: 'https://logodesignlove.com',
      image: '/images/twelve.png'
    },
    {
      title: 'Logo Lounge',
      description: 'Professional logo design community',
      link: 'https://logolounge.com',
      image: '/images/thirteen.png'
    },
    {
      title: 'Letterform Archive',
      description: 'Digital archive of typography, lettering, and logo design',
      link: 'https://oa.letterformarchive.org/',
      image: '/images/fourteen.png'
    },
    {
      title: 'Logoed',
      description: 'Logo inspiration for graphic designers',
      link: 'http://www.logoed.co.uk/',
      image: '/images/fifteen.png'
    }
  ],
  'mood-boards': [
    {
      title: 'BX Museum',
      description: 'Brand identity museum and inspiration archive',
      link: 'https://www.bxmuseum.com/',
      image: '/images/sixteen.png'
    },
    {
      title: 'Doing Cool Stuff',
      description: 'Directory of brand, motion and digital product design studios',
      link: 'https://www.doingcoolstuff.xyz/',
      image: '/images/seventeen.png'
    },
    {
      title: 'Pinterest',
      description: 'Visual discovery platform',
      link: 'https://pinterest.com',
      image: '/images/eighteen.png'
    },
    {
      title: 'Dribbble',
      description: 'Design inspiration community',
      link: 'https://dribbble.com',
      image: '/images/nineteen.png'
    },
    {
      title: 'Layers Design',
      description: 'Specialist visual agency creating in-context imagery to showcase and elevate designs',
      link: 'https://layers.design/',
      image: '/images/twenty.png'
    },
    {
      title: 'Visual Journal',
      description: 'Curated showcase of finest branding and graphic design projects worldwide',
      link: 'https://visualjournal.it/',
      image: '/images/twentyone.png'
    }
  ],
  'brand-identity': [
    {
      title: 'Daily Branding',
      description: 'Daily dose of branding design inspiration',
      link: 'https://www.dailybranding.co/',
      image: '/images/twentytwo.png'
    },
    {
      title: 'Curation of Curations',
      description: 'Curated collection of brand identity design',
      link: 'https://www.curationofcurations.com/',
      image: '/images/twentythree.png'
    },
    {
      title: 'Storefront Design',
      description: 'Showcase of retail and brand identity design',
      link: 'https://www.storefront.design/',
      image: '/images/twentyfour.png'
    },
    {
      title: 'Rebrand Gallery',
      description: 'Stellar visual identity inspiration gallery',
      link: 'https://www.rebrand.gallery',
      image: '/images/twentyfive.png'
    },
    {
      title: 'The Brand Identity',
      description: 'Editorial platform for brand identity design',
      link: 'https://the-brandidentity.com/',
      image: '/images/twentysix.png'
    },
    {
      title: 'Archives Design',
      description: 'Digital archive of graphic design history',
      link: 'https://archives.design/',
      image: '/images/twentyseven.png'
    },
    {
      title: 'BP&O',
      description: 'Branding, Packaging and Opinion',
      link: 'https://bpando.org/',
      image: '/images/twentyeight.png'
    },
    {
      title: 'Voice & Tone',
      description: 'Content style guide examples',
      link: 'https://voiceandtone.com',
      image: '/images/twentynine.png'
    },
    {
      title: 'Identity Designed',
      description: 'Comprehensive archive of brand identity work and visual design inspiration',
      link: 'https://identitydesigned.com/',
      image: '/images/thirty.png'
    }
  ]
}

export default function BentoGrid() {
  const [activeCategory, setActiveCategory] = useState('mood-boards')
  
  const categories = [
    { id: 'mood-boards', label: 'Mood Boards' },
    { id: 'brand-identity', label: 'Brand Identity' },
    { id: 'style-systems', label: 'Style Guides & Design Systems' },
    { id: 'typography', label: 'Typography' },
    { id: 'color-palettes', label: 'Color Palettes' },
    { id: 'logo-design', label: 'Logo Design' },
    { id: 'brand-guidelines', label: 'Brand Guidelines' }
  ]

  return (
    <section className="py-20 bg-[#0E1015] text-white" id="categories">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex justify-center mb-16 px-4">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white/5 backdrop-blur-xl rounded-2xl p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl transition-all text-sm font-medium
                  ${activeCategory === category.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources[activeCategory as keyof typeof resources].map((resource, index) => (
            <a 
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              key={resource.title}
              className="group block overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Replace the Live Website Preview with local image */}
              <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 aspect-[4/3] mb-4">
                <img
                  src={resource.image}
                  alt={`${resource.title}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-2">
                  {resource.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 