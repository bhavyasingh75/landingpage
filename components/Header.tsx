import Link from 'next/link'
import { Compass } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Compass className="h-6 w-6" />
          <span className="font-bold">BrandInspo</span>
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link href="#guidelines" className="text-sm font-medium transition-colors hover:text-primary">
            Guidelines
          </Link>
          <Link href="#logos" className="text-sm font-medium transition-colors hover:text-primary">
            Logos
          </Link>
          <Link href="#typography" className="text-sm font-medium transition-colors hover:text-primary">
            Typography
          </Link>
          <Link href="#moodboards" className="text-sm font-medium transition-colors hover:text-primary">
            Mood Boards
          </Link>
          <Link href="#colorschemes" className="text-sm font-medium transition-colors hover:text-primary">
            Color Schemes
          </Link>
        </nav>
      </div>
    </header>
  )
}

