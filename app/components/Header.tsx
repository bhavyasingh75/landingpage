import Link from 'next/link'

export default function Header() {
  return (
    <nav className="fixed w-full bg-gray-800 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#ffffff]">
              prysm
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#categories" className="nav-link">Categories</Link>
            <Link href="#resources" className="nav-link">Resources</Link>
            <Link href="#templates" className="nav-link">Templates</Link>
            <Link href="#inspiration" className="nav-link">Inspiration</Link>
            <Link href="#contribute" className="nav-link">Contribute</Link>
          </div>

        
        </div>
      </div>
    </nav>
  )
} 