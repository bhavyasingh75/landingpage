'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E1015] text-white">
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">About Prysm</h1>
        
        <div className="prose prose-lg prose-invert">
          <p className="text-xl text-white/80 mb-8">
            Prysm is a curated directory of design resources, created by designers for designers. Our mission is to help creatives discover and explore the best brand design resources across the web.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Purpose</h2>
          <p className="text-white/80 mb-6">
            We believe that great design comes from inspiration and knowledge sharing. That's why we've created a platform that brings together the finest resources for brand guidelines, typography, logos, and more - all in one place.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What We Offer</h2>
          <ul className="space-y-4 text-white/80 mb-8">
            <li>• Carefully curated design resources</li>
            <li>• Live previews of websites and tools</li>
            <li>• Organized categories for easy navigation</li>
            <li>• Regular updates with new content</li>
            <li>• Community-driven submissions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Join Our Community</h2>
          <p className="text-white/80 mb-6">
            We're always looking for new resources to add to our collection. If you know of a great design resource that should be featured on Prysm, we encourage you to submit it through our submission form.
          </p>

          <div className="mt-12 flex gap-4">
            <a 
              href="/submit" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-all"
            >
              Submit a Resource
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </a>
            <a 
              href="/#categories" 
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl transition-all"
            >
              Browse Collection
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
} 