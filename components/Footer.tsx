import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by the brand inspiration community. Powered by{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

