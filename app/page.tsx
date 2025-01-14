import Header from './components/Header'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  )
}

